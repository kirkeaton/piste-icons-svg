const path = require('path');

module.exports = (filePaths) => {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export * from './${basename}'`;
  });
  return exportEntries.join('\n');
};
