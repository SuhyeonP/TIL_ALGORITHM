function solution (brown, yellow) {
    const sum = brown + yellow;
    // answer[1]은 최소 3 이다. (가로 - 2) * (세로 - 2) = 노랑 개수

    for (let i = 3; i <= brown; i ++) {
        if (sum % i === 0) {
            let col = sum / i;

            if((i - 2) * (col -2) === yellow) {
                return [col, i];
            }
        }
    }


    return [0,0];
}

console.log(solution(8,1))
console.log(solution(10,2))
