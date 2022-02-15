// missingInteger

function solution(A) {
    let min = 1;
    A.sort();
    A.forEach((ele) => {
        if(ele > 0 && ele === min) {
            min ++;
        }
    })

    return min;
}

console.log(solution([1,2,3]))
console.log(solution([1,3]))
console.log(solution([-1, -3]))
console.log(solution([1,3,6,4,1,2]))
console.log(solution([2]))

