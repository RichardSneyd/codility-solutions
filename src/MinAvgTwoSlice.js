
function solution(A) {
    if(A.length <= 2) return 0;
    let lowest = {
        index: null,
        avg: null
    }
    for (let i = 0; i < A.length - 1; i++) {
        let avg = (A[i] + A[i + 1]) / 2;
        if(i + 3 <= A.length) avg = (A[i] + A[i + 1] + A[i + 2]) / 3 < avg ? (A[i] + A[i + 1] + A[i + 2]) / 3 : avg;
        if (i == 0) lowest = { index: i, avg: avg }
        else if (avg < lowest.avg) lowest = { index: i, avg: avg }
    }

    return lowest.index;
}