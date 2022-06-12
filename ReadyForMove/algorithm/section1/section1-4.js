// section 1-4
// 자연수 N이 입력되면 1부터 N 까지의 합을 출력한다 (20이하의 자연수 N)

function solution(n) {
    // if (n === 1) {
    //     return 1;
    // } else {
    //     return n + solution(n - 1);
    // }

    return (n * (n + 1)) / 2;
}

function solution2(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        answer += i;
    }

    return answer;
}


console.log(solution(10))
