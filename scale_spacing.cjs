const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.css') && !file.includes('.backup.')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      let lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (/(margin|padding|gap).*:/i.test(line)) {
          lines[i] = line.replace(/([\d.]+)px/g, (match, p1) => {
            let val = parseFloat(p1);
            if (val === 0) return '0px';
            let newVal = Math.round(val * 1.2);
            return newVal + 'px';
          });
        }
      }
      content = lines.join('\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated spacing in ' + fullPath);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
console.log('Done');
