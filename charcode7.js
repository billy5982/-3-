const { Console } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./charcode7.txt').toString().split(' ');
let ar = [];
for(let i=0;i<input.length;i++){
    let num = String(input[i])
    let numar = [];
    for(let j=2;j>=0;j--){
        numar.push(num[j])
    }
    ar.push(numar.join(''));
}
let num = {
    A : Number(ar[0]),
    B : Number(ar[1]),
}

if(num.A>num.B){
    console.log(num.A);
}else{
    console.log(num.B);
}