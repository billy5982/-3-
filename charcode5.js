const { info } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./charcode5.txt').toString().toLowerCase();

let N = input.length;

solution(input);

function solution(inp){
    let ar = Array(26).fill(0);//a-z
    
    for(let i=0;i<N;i++){ //ABBA

        for(let j=0;j<26;j++){//a~z
            if((input[i].charCodeAt())-97===j){ //input ABBC 4 / 
                ar[j]++;
            }
        }
    }
    
    let maxid = 0;
    for(let k=0;k<ar.length;k++){
        if(maxid<ar[k]){
            maxid = ar[k];
        }
    }
    let maxindex = ar.indexOf(maxid);
    let lastindex = ar.lastIndexOf(maxid);
    if(maxindex!==lastindex){
        console.log('?');
    }else{
        console.log(String.fromCharCode(maxindex+65));
    }
}