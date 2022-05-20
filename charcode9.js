const { Console } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./charcode9.txt').toString();

solution(input);

function solution(ins){
    let wrd = input;
    let count = Number(input.length);
    
    for(let i=0;i<input.length;i++){
        let w = i;
        let nw = i+1;
        let nnw =i+2;
        if(wrd[w]==='c'&&wrd[nw]==='='){
            count--;
        }else if(wrd[w]==='c'&&wrd[nw]==='-'){
            count--;
        }
        if(wrd[w]==='d'){
            if(wrd[nw]==='z'&&wrd[nnw]==='='){
                count--;                
            }else if(wrd[nw]==='-'){
                count--;
            }
        }
        if(wrd[w]==='l'&&wrd[nw]==='j'){
            count--;
        }
        if(wrd[w]==='n'&&wrd[nw]==='j'){
            count--;
        }
        if(wrd[w]==='s'&&wrd[nw]==='='){
            count--;
        }
        if(wrd[w]==='z'&&wrd[nw]==='='){
            count--;
        }
    }
    console.log(count);
}