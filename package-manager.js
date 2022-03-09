const fs = require('fs');

function setup(file) {
  exports.file = file;
}

function get(package) {
  var item;
  fs.readFileSync(exports.file, 'utf8').toString().split('\n').map(i => i.split('=')).forEach(i => {
    if (i[0] === package) {
      item = i[1]
    }
  })
  return require(item);
}

exports = module.exports = get;
exports.setup = setup;
