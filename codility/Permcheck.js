// permcheck

function solution(A) {
    const check = [...new Set(A)];

    if(check.length !== A.length) {
        return 0;
    }
    const temp = Array.from({length: A.length}, (v, i) => i+1).reduce((before, now) => before+now, 0);
    const now = A.reduce((before, now)=> before+ now, 0);

    return temp - now === 0 ? 1: 0;
}

console.log(solution([1,3,1]))

function solution2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const check = Array.from({length: A.length}, (ele, idx) => idx + 1);
    let answer = 1;

    A.sort((a, b) => a - b);

    for (let i = 0; i < A.length; i++) {
        if(A[i] !== check[i]) return 0;
    }

    return answer;
}
