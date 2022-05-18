const fs = require('fs');
let input = fs.readFileSync('./Arr3.txt').toString().split('\r\n');
let Ar =[];

for(let i =0; i<input.length;i++){
    Ar.push(Number(input[i]));
}
let sum = 1;
for(let j=0;j<Ar.length;j++){
    sum = sum*Ar[j];
}
// console.log(sum);

solution(sum);

function solution(SS){
    let count = 0;
    let ave = String(sum);
    console.log(ave[1]);
    for(let j=0; j<10;j++){
        for(let i=0;i<ave.length;i++){
            if(Number(ave[i])===j){
                count++
            }

        }
        console.log(count);
        count =0;
    }

}