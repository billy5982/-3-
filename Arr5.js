const fs = require('fs');
let input = fs.readFileSync('./Arr5.txt').toString().split('\r\n');

let N = Number(input[0]);
let fsc = [];
for(let i=0; i<N; i++){
    let ff = input[1].split(' ');
    fsc.push(Number(ff[i]));
}
console.log(fsc);

solution(N,fsc);

function solution(NN,ffsc){

    let max = fsc[0];
    for(let i=0;i<N;i++){ //값중 최대값 구하기.
        if(max<fsc[i]){
            max = fsc[i];
        }
    }
    let newScr = [];
    let ne = 0;
    for(let j=0;j<N;j++){
        ne = ne+fsc[j]/max*100;
        
    }
    let ave = (ne/N).toFixed(2);
    console.log(ave);
}