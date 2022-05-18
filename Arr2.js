const fs = require('fs');
let input = fs.readFileSync('./Arr2.txt').toString().split('\r\n');

// console.log(input.length);

let Arr =[];
for(let i=0; i<input.length;i++){
    Arr.push(Number(input[i]));
}

// console.log(Arr);

solution(Arr);

function solution(Armr){
    let max = Arr[0];
    let sum = 0;
    for(let i=0; i<Arr.length;i++){
        if(max<Arr[i]){
            max = Arr[i];
            sum = i;
        }
    }
    sum = sum+1;
    console.log(max+'\n'+sum);
}