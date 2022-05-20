const fs = require('fs');
let input = fs.readFileSync('./fun1.txt').toString().split(' ');

let N = input.length;
let A = [];
for(let i=0;i<N;i++){
    A.push(Number(input[i]));
}

    solution(N,A)   

    function solution(num,Arr){
        let sum = 0;
        for(let i=0;i<N;i++){
            sum = sum + A[i]
        }return console.log(sum);
    }