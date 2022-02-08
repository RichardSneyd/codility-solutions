function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A == B) return A % K == 0 ? 1 : 0;
    return Math.floor(B / K) - Math.floor((A / K)) + (A % K == 0 ? 1 : 0);
}