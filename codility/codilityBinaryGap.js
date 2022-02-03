function solution(N) {
    const binary = N.toString(2);
    const gap = binary.split('1');
    const sortGap = gap.map((ele, ind) => {
        if(ind !== gap.length - 1) {
            return ele.length;
        } else {
            return 0;
        }
    })
    return Math.max(...sortGap)
}

console.log(solution(529))
console.log(solution(15))
console.log(solution(32))