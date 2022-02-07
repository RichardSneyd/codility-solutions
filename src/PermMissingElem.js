// https://app.codility.com/demo/results/trainingXXBUG5-MX9/

const getGoal = (highest) => {
    let total = 0;
    for(let i = highest; i >= 1; i--) {
        total += i;
    }
    return total;
}

const getSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function solution(A) {

    if (A.length == 0) return 1;
   // else if (A[0] !== 1) return A[0];
  //  console.log(`goal ${getGoal(A.length + 1)} sum ${getSum(A)}`);
    return getGoal(A.length + 1) - getSum(A);
}