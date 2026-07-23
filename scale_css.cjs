const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const filesToProcess = [
  path.join(srcDir, 'App.css'),
  path.join(srcDir, 'index.css'),
  ...fs.readdirSync(pagesDir).filter(f => f.endsWith('.css')).map(f => path.join(pagesDir, f))
];

const regex = /(^|[:\s\(\,])(-?\d+(?:\.\d+)?)px\b/gi;

let totalReplacements = 0;

for (const file of filesToProcess) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;
    
    content = content.replace(regex, (match, prefix, numStr) => {
      const num = parseFloat(numStr);
      // Skip if 0
      if (num === 0) return match;
      
      let scaled = num * 0.8;
      // Round to 1 decimal place to avoid float precision issues
      scaled = Math.round(scaled * 10) / 10;
      
      fileReplacements++;
      return `${prefix}${scaled}px`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Processed ${path.basename(file)}: ${fileReplacements} replacements`);
    totalReplacements += fileReplacements;
  }
}

console.log(`Total replacements: ${totalReplacements}`);
