// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if(A.length <= 1) return 0;
    const left_count = [];
    for (let i = 0; i < A.length; i++) {
        // if left point lower than 0, inc 0 index
        if (left_count[i] == undefined) left_count[i] = 0;
        if (i - A[i] > 0) {
            if (left_count[i - A[i]] == undefined) left_count[i - A[i]] = 1;
            else left_count[i - A[i]]++;
        }
        else {
            if (left_count[0] == undefined) left_count[0] = 1;
            else left_count[0]++;
        }
    }
    for (let i = 1; i < left_count.length; i++) {
        left_count[i] = left_count[i] + left_count[i - 1];
    }

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        const rightmost = i + A[i] < A.length ? i + A[i] : A.length - 1;
        count += (left_count[rightmost] - (i + 1));
        if (count > 10000000) return - 1;
    }

    return count;
}
