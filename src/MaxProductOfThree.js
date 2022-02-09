// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    let result = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    if(A[1] < 0) result = result > (A[0] * A[1]) * A[A.length - 1] ? result :  (A[0] * A[1]) * A[A.length - 1];
    return result;
}
