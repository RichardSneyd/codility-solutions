
// https://app.codility.com/demo/results/trainingF4KAUN-3YB/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1) return 0;
    const westward = [];
    for (let i = A.length - 1; i >= 0; i--) {
        if (i == A.length - 1) {
            westward[i] = A[i];
        } else {
            westward[i] = A[i] == 1 ? westward[i + 1] + 1 : westward[i + 1]
        }
    }
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            count += westward[i];
            if(count > 1000000000) return -1;
        }

    }
    return count;
}




console.log(solution([0, 1, 1, 0, 1]));