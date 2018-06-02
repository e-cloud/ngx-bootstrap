const rootPkg = require('../package.json');
const fs = require('fs');
const path = require('path');

const targetFilePath = '../dist/ngx-bootstrap/package.json';
const libPkg = require(targetFilePath);

const propsToCopy = ['description', 'keywords', 'author', 'repository', 'bugs', 'license'];

const filesToCopy = ['README.md', 'CHANGELOG.md', 'LICENSE', '.browserslistrc'];

writePackageInfo();
copyAssets();

function writePackageInfo() {
  propsToCopy.forEach(key => {
    libPkg[key] = rootPkg[key];
  });

  fs.writeFileSync(path.resolve(__dirname, targetFilePath), JSON.stringify(libPkg, null, 4));
}

function copyAssets() {
  filesToCopy.forEach(file => {
    fs.createReadStream(path.resolve(__dirname, '../', file)).pipe(fs.createWriteStream('dist/ngx-bootstrap/' + file));
  });
}
