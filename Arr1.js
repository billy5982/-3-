const fs = require('fs');
let input = fs.readFileSync('./Arr1.txt').toString().split('\r\n');

let N = Number(input[0]);
let Arr =[];

for(let i=0; i<N; i++){
    let ar = input[1].split(' ');
    Arr.push(Number(ar[i]))
}

solution(N,Arr);

function solution(Nm,Armr){

    let max = Arr[0];
    let min = Arr[0];

    for(let i=0;i<N;i++){
        if(max<Arr[i]){
            max = Arr[i];
        }
        if(min>Arr[i]){
            min = Arr[i];
        }
    }
    console.log(min,max);

}