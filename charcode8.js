const { Console } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./charcode8.txt').toString();

let N = Number(input.length);

let num = {
    2 : 'ABC',
    3 : 'DEF',
    4 : 'GHI',
    5 : 'JKL',
    6 : 'MNO',
    7 : 'PQRS',
    8 : 'TUV',
    9 : 'WXYZ',
}
// console.log(num[9].includes(input[0]));
solution(input,N)

function solution(i,n){
    let sum = 0;
    for(let i=0;i<N;i++){
        for(let j=2;j<10;j++){
            if(num[j].includes(input[i])){
                sum = sum+j+1
            }
        }
    }
    console.log(sum);
}