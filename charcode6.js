const { info } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./charcode6.txt').toString().trim().split(' ');
if(input[0]!==''){
console.log(input.length);
}