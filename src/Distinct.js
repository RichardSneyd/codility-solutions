function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const uniq = new Set();
    for(let i = 0; i < A.length; i++) {
        uniq.add(A[i]);
    } 
    return uniq.size;
}