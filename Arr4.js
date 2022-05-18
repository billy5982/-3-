const fs = require('fs');
let input = fs.readFileSync('./Arr4.txt').toString().split('\r\n');
let Num = [];
for(let i=0; i<input.length; i++){
    Num.push(Number(input[i]));
}


solution(Num);

function solution(SS){
    let Ar = [];
    let sum = 0;
    for(let i=0; i<Num.length;i++){
        sum = Num[i]%42;
        if(Ar.indexOf(sum)===-1){
            Ar.push(sum);
        }
    }
    console.log(Ar);
}