const package = require('package-manager.js');
package.setup('req.txt');
console.log(package('pkg'));
