const fs = require('fs');
let input = fs.readFileSync('./Arr6.txt').toString().split('\r\n');

let N = Number(input[0]);
let Arr =[];
for(let i=1;i<=N;i++){
    let Ar = String(input[i]);
    let a = [];
    for(let j=0;j<Ar.length;j++){
        a.push(Ar[j])
     
    }
    Arr.push(a);
}

solution(N,Arr)

function solution(N,Arr){
    let sum = 0;
    let count = 1;

    for(let i=0; i<N;i++){
        let imar = Arr[i];

        for(let j=0;j<Arr[i].length;j++){
            if(imar[j]==='O'){
                sum = sum+count;
                count++;
            }
            else{
                count = 1;
            }
        }
        console.log(sum);

        sum = 0;
        count = 1;
    }

}