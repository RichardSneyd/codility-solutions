// https://app.codility.com/demo/results/trainingY4ERM4-9V4/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryString = N.toString(2);
    let longest = 0;
    for(let i = 0; i < binaryString.length; i++){
           // uppermost and lowermost cannot logically join a binaryGap, so exclude
       if(i !== 0 && i !== binaryString.length - 1){ 
           // if true, starts a gap
           if(binaryString[i] == 0 && binaryString[i-1] == 1){ 
               let gap = 0;
               while(binaryString[i] == 0){
                gap++;
                i++;
               }
               if(i !== binaryString.length) longest = gap > longest ? gap : longest;
           }
       }
    }

    return longest;
}

console.log(solution(17));
// 32 - 100000 -> 0
// 5 - 101
// 17 - 10001