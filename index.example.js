const package = require('package-manager.js');
package.setup('req.example.txt');
console.log(package('pkg'));
