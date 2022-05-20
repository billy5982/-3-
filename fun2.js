function d(n){
    let num = n;
    let result = 0;
    for(let i=0;i<String(n).length;i++){
        result = result+num%10;
        num = Math.floor(num/10);
    }
    return result+n;
}

let range = 100;
let selfnum = Array(range+1).fill(true);


for(let i=0;i<=range;i++){
    selfnum[d(i)] = false;
}

console.log(selfnum);

for(let j=0;j<range;j++){
    if(selfnum[j]){
        console.log(j);
    }
}











// function d(n){
//     let num = n;
//     let result = 0;
//     for(let i=0; i<String(n).length;i++){
//         result = result+num%10;
//         num = Math.floor(num/10);
//     }return result+n;
// }

// const range =100;
// let self = Array(range+1).fill(true);

// for(let i=0; i<=range;i++){
//     self[d(i)]=false;
// }

// console.log(self);