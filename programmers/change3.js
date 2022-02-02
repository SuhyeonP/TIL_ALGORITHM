function solution(n) {
    const triple = n.toString(3).split('');
    let answer = 0;

    for(let i = 0; i < triple.length; i++) {
        answer += Math.pow(3, i) * Number(triple[i])
    }


    return answer;
}

const solution2 = (num) => {
    return parseInt(num.toString(3).split('').reverse().join(''), 3);
}



console.log(solution(45));
