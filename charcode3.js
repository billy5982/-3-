const fs = require('fs');
const { addAbortSignal } = require('stream');
let input = fs.readFileSync('./charcode3.txt').toString();

se(input);

function se(inpu){
    let ab =[];
    for(let i=97;i<123;i++){
    ab.push(input.indexOf(String.fromCharCode(i)));        
    }
    console.log(ab.join(' '));
}
