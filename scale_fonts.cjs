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
      content = content.replace(/font-size:\s*([\d.]+)(px|rem|em)/g, (match, p1, p2) => {
        let size = parseFloat(p1);
        let newSize = (size * 1.2).toFixed(2);
        newSize = parseFloat(newSize);
        if (p2 === 'px') newSize = Math.round(size * 1.2);
        return 'font-size: ' + newSize + p2;
      });
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
console.log('Done');
