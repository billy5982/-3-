const fs = require('fs');
let input = fs.readFileSync('./charcode2.txt').toString().split('\r\n');
let N = Number(input[0]);
let ar = [];
for(let i=0;i<N;i++){
    arr = input[1];
    ar.push(Number(arr[i]));
    }

dn(N,ar)

function dn(NN,aar){
    sum =0;
    for(let i=0;i<N;i++){
        sum=sum+ar[i];
    }
    console.log(sum);
}