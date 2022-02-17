// MaxProductTree

function solution(A) {
    const length = A.length;
    A.sort();
    if(A[length - 1] <= 0) {
        return A[length - 3] * A[length - 2] * A[length - 1];
    } else {
        return Math.max(A[0] * A[1] * A[length - 1], A[length - 3] * A[length - 2] * A[length - 1]);
    }
}

console.log(solution([1,2,3]))
console.log(solution([-3, 1, 2, -2, 5, 6]))
