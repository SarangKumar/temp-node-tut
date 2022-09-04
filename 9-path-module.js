const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/','subfolder','some_cont.txt');
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content', 'subfolder', 'some_cont.txt')
console.log(absolute)