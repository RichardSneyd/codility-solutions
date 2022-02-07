// this solution is elegant, but cryptic to read. Relies on bitwise operations
function solution(N) {
    let agg = 0;
    for (let i = 0; i < N.length; i++) {
       // console.log(`${agg} ^ ${N[i]} = ${agg ^ N[i]}`)
        agg ^= N[i];
      //  console.log(`agg = ${agg}`)
    }

    return agg;
}

// this pattern is much easier to understand and apply to other situations
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const isOdd = (val) => val % 2 != 0;

    const occuranceMap = A.reduce((accum, val) => {
        if (accum[val] == undefined) accum[val] = 0;
        ++accum[val];
        return accum;
    }, {});
    return +Object.keys(occuranceMap).find((val, i) => isOdd(occuranceMap[val]));
}

solution([1, 1, 145, 145, 5, 3, 39, 3, 4, 4, 5]);