// https://app.codility.com/c/close/trainingR2KXM5-UVK/?final_task_completed=1

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const posSet = [];
    hasPos = false;
    for(let i = 0; i < A.length; i++) {
        if(A[i] <= 0) continue;
        posSet[A[i]] = 1;
        hasPos = true;
    }
    if(!hasPos) return 1;
    for(let i = 1; i < posSet.length; i++) {
        if(posSet[i] == undefined) return i;
    }
    return posSet.length;
}
