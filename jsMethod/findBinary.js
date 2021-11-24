function solution(n) {
    const binary = n.toString(2);
    let answer =  0;
    const count1 = binary.match(/1/g).length;
    if(n === Math.pow(2, binary.length) - 1) {
        return 0;
    } else if (n === Math.pow(2, binary.length -1)) {
        return binary.length - 1;
    }

    for(let i = 1; i < n; i++) {
        if(count1 === i.toString(2).match(/1/g).length) {
            answer ++;
        }
    }

    return answer;
}

console.log(solution(9))
console.log(solution(10))
