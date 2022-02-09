function solution (A) {
    function sum(array) {
        return array.reduce((now, ele) => now + ele, 0);
    }

    // 원래 배열 전체 합 -  없는배열 전체합
    return sum(Array.from({length: A.length + 1}, (v, i) => i+1)) - sum(A);
}

console.log(solution([3,1,4]))
console.log(solution([]))

