const fs = require('fs');
let input = fs.readFileSync('./Arr7.txt').toString().split('\r\n');

let T = Number(input[0]);
let Arr = [];

for(let i=1; i<=T; i++){
    let ar = input[i].split(' ')
    let arr = [];
    for(let j=1; j<=Number(ar[0]);j++){
        arr.push(Number(ar[j]));
    }
    const arry ={
        N : Number(ar[0]),
        scr : arr,
    }
    Arr.push(arry);
}
     solution(T,Arr)   

     function solution(caseT,caseArr){
      for(let i=0; i<T; i++){
          let sum = 0;
          for(let j=0; j<Arr[i].N;j++){
              sum = sum+Arr[i].scr[j]; // 각 학생들의 점수 합 구하기
            }
        let ave = sum/Arr[i].N; //학생들의 점수 합 평균 구하기 = 합 / 학생 수
        count = 0;

        for(let k=0; k<Arr[i].N;k++){// 평균 이상의 학생들 세기
            if(Arr[i].scr[k]>ave){
                count++;
            }
        }
        let cla = 0;
        cla = (count/Arr[i].N)*100;
        console.log(cla.toFixed(3)+'%');
            
      }
     }  