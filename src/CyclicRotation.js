// https://app.codility.com/demo/results/trainingTQRSHY-YMV/

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 1) return A;
    for(let x = 0; x < K; x++){
        A.unshift(A.pop());
    }
    return A;
}

console.log(solution([1, 2, 3, 4], 3));