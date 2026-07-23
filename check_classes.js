const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  console.log(`--- ${f} ---`);
  console.log(content.split('\n').slice(0, 40).join('\n'));
}
