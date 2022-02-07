// https://app.codility.com/demo/results/trainingQZTW7Z-EVC/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const counters = Array(N).fill(0);
    let equal = true;
    let base = 0;
    let max = 0;

    const inc = (M) => {
        if (counters[M - 1] < base) counters[M - 1] = base + 1;
        else counters[M - 1]++;
        if(counters[M - 1] > max) max = counters[M - 1];
        equal = false;
    }
    const maxCounters = () => {
        if (equal) return;
        else {
            equal = true;
            //   return arr.fill(Math.max(...arr)); // less scaleable, struggles with extreme test cases
            base = max; // perfect, O(1) time complexity
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] == N + 1) maxCounters();
        else {
            inc(A[i]);
        }
    }
    return counters.map(val => val < base ? base : val);
    //  console.log(maxCounters([0, 1, 0, 4, 3, 2, 7, 4, 3])); working
}

// Naive solution - still O(N + M), but fails on HUGE test cases because of the manual Math.max, solution was to track max with a variable
// instead, which gives a lookup time complexity of O(1) for max, istead of O(N), which is linear time

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const counters = Array(N).fill(0);
    let equal = true;

    const inc = (M) => {
        counters[M-1]++;
        equal = false;
    }
    const maxCounters = (arr = counters)=> {
        if(equal) return;
        else {
            equal = true;
            return arr.fill(Math.max(...arr));
        }
    }
    for(let i = 0; i < A.length; i++) {
        if(A[i] == N+1) maxCounters();
        else {
            inc(A[i]);
        }
    }
    return counters;
  //  console.log(maxCounters([0, 1, 0, 4, 3, 2, 7, 4, 3])); working
}


