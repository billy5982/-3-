const fs = require('fs');
let input = fs.readFileSync('./fun3.txt').toString().split(' ');
let N = Number(input);

d(N)

function d(n){
    let count =0;
    for(let i =1; i<N;i++){
        let sum = String(i);
        if(i<=100){
            count ++;
        }
       let ab = Number(sum[0])-Number(sum[1]);
       let ac = Number(sum[1])-Number(sum[2]);
        if(ab===ac){
            count++;
        }
    }
    console.log(count);
}