

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let lookup = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4
    }

    let occurances_pref = {
        A: [0],
        C: [0],
        G: [0],
        T: [0]
    }

    for (let i = 0; i < S.length; i++) {
        if (i > 0) {
            occurances_pref.A[i] = occurances_pref.A[i - 1];
            occurances_pref.C[i] = occurances_pref.C[i - 1];
            occurances_pref.G[i] = occurances_pref.G[i - 1];
            occurances_pref.T[i] = occurances_pref.T[i - 1];
        }
        occurances_pref[S[i]][i]++;
    }
    function checkSingle(s, f, l) {
        let val = s < 1 ? occurances_pref[l][f] : occurances_pref[l][f] - occurances_pref[l][s - 1];
        return val >= 1;
    }

    const mins = [];
    for (let i = 0; i < P.length; i++) {
        if (Q[i] == P[i]) {
            mins[i] = lookup[S[Q[i]]];
            continue;
        }
        if (checkSingle(P[i], Q[i], 'A')) mins[i] = 1;
        else if (checkSingle(P[i], Q[i], 'C')) mins[i] = 2;
        else if (checkSingle(P[i], Q[i], 'G')) mins[i] = 3;
        else if (checkSingle(P[i], Q[i], 'T')) mins[i] = 4;
    }
    // console.log(mins);
    return mins;
}