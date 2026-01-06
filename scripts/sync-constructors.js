const fs = require('fs');
const path = require('path');

// app/data/projects 目录
const baseDir = path.join(__dirname, '..', 'app', 'data', 'projects');
const refFile = path.join(baseDir, 'DBTF0000001.json');

const ref = JSON.parse(fs.readFileSync(refFile, 'utf8'));
const refConstructors = ((((ref || {}).profile || {}).projectDetailsPage || {}).projectConstruction || {}).constructors;

if (!Array.isArray(refConstructors)) {
  console.error('Reference constructors array not found');
  process.exit(1);
}

const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.json') && f !== 'DBTF0000001.json');

for (const file of files) {
  const full = path.join(baseDir, file);
  const data = JSON.parse(fs.readFileSync(full, 'utf8'));

  if (!data.profile) data.profile = {};
  if (!data.profile.projectDetailsPage) data.profile.projectDetailsPage = {};
  if (!data.profile.projectDetailsPage.projectConstruction) {
    data.profile.projectDetailsPage.projectConstruction = {};
  }

  // Deep clone constructors so每个文件都有同样长度和字段
  data.profile.projectDetailsPage.projectConstruction.constructors = JSON.parse(JSON.stringify(refConstructors));

  fs.writeFileSync(full, JSON.stringify(data, null, 2));
  console.log('Updated constructors for', file);
}

console.log('Done syncing constructors.');
