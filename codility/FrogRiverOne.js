function solution(A, X) {
    let answer = -1;
    const set = new Set();

    for(let i = 0; i < A.length; i++) {
        set.add(A[i]);^
        if(set.size === X) {
            return i;
        }
    }

    return answer;
}

console.log(solution([1,3,1,4,2,3,5,4], 5))
