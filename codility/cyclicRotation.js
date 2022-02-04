function solution(A, K) {
    if (A.every(item => item === A[0]) || K === 0 || K == A.length){
        return A;
    }

    const count = K % A.length;

    for (let i = 0; i < count; i++) {
        let last = A[A.length - 1];
        A.unshift(last);
        // unshift는 바로 앞에 값 추가
        A.pop()
    }
    return A;
}

console.log(solution([3,8,9,7,6], 3))
console.log(solution([0,0,0], 1))
console.log(solution([1,2,3,4], 4))
console.log(solution([5, -100], 2))
const a = [1,2,3,4]
a.unshift(3)
console.log(a)
