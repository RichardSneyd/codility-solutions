// https://app.codility.com/demo/results/trainingJFW5UG-EYT/

function solution(A) {
    if (A.length == 1) return +(A[0] == 1);
    if (A.length == 2) {
        if(A[0] !== 1) return 0;
        return A[0] > A[1] ? +(A[0] - A[1] == 1) : +(A[1] - A[0] == 1);
    }
    
    /*  const sum = (A, i) => {
        if(i == A.length -1) return A[i];
        else return A[i] + sum(A, ++i);
    }  */
    const sum = (A) => {
        let total = 0;
        for (let i = 0; i < A.length; i++) {
            total += A[i];
        }
        return total;
    }
    const getTarget = (A) => {
        //let N = Math.max(...A);
        let N = A.length;
        return (N * (N + 1)) / 2;
    }

    const set = new Set();
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) return 0;
        else set.add(A[i]);
    }
    return +(sum(A, 0) == getTarget(A));

}
