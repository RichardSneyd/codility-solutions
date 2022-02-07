// https://app.codility.com/demo/results/trainingKPRF4W-3R8/
// this solution is O(N)
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 2) return Math.abs(A[0] - A[1]);
    let left = A[0];
    let right = A.slice(1).reduce((accum, el) => accum + el);
    let min_diff = Math.abs(left - right);

    for(let i = 1; i < A.length - 1; i++) {
        left += A[i];
        right -= A[i];
        const cand = Math.abs(left - right);
        if(cand < min_diff) min_diff = cand;
    }

    return min_diff;
}


// this solution is O(n2) quadratic time, not good enough...
const diff = (A, p) => {
    let [left, right] = [0, 0];
    for(let i = 0; i < A.length; i++) {
        i < p ? left += A[i] : right += A[i];
    }
    return Math.abs(left - right);
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = null;
    for(let i = 1; i < A.length; i++){
        const latest = diff(A, i);
        if(min == null || latest < min) min = latest;
    }
    return min;
}
