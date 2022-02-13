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
