
// https://app.codility.com/demo/results/trainingRYFRPR-FPD/

function solution(X, A) {
    if(A.length == 1) {
        if(A[0] == 1) return 0;
        else return -1;
    }
    
    let lowest_occ = [];
    // get lowest occurances
    for(let i = 0; i < A.length; i++) {
        if(lowest_occ[A[i]] == undefined) {
            lowest_occ[A[i]] = i;
        }
    }
    let min = null;
    for(let i = 1; i <= X; i++) {
        if(lowest_occ[i] == undefined) return -1;
        if(min == null || lowest_occ[i] > min) min = lowest_occ[i];
    }
    return min;
}