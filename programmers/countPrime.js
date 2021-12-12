function solution1(left, right) {
    // 내가 푼거
    const sum = [];
    for(let i = left; i <= right; i++) {
        const divides = [];
        for(let j = 1; j <=  i; j++) {
            if(i % j === 0) {
                divides.push(j)
            }
        }
        sum.push(divides.length % 2 === 0 ? i : i * (-1))
    }

    return sum.reduce((before, now) => (before + now),0);
}

function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if(Number.isInteger(Math.sqrt(i))){
            // 홀수인 경우 즉 제곱수일 경우에는 약수의 개수가 홀수로 나옴
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(13, 17))