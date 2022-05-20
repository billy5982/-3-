const fs = require('fs');
let input = fs.readFileSync('./charcode1.txt').toString().split(' ');
let N = String(input);

console.log(N.charCodeAt());