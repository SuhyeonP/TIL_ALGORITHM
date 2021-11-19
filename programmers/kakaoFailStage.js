function solution(N, stages) {
    let answer = [];
    let copy = stages.slice().sort((a, b) => a - b);
    let stage = new Map();
    let length = stages.length;

    for (let i = 1; i <= N; i++) {
        const remain = copy.filter((ele) => ele === i).length;
        const range = remain / length;
        stage.set(range, stage.has(range) ? [...stage.get(range), i] : [i])
        length -= remain;
    }
    const temp = [...stage].sort((a, b) => b[0] - a[0]);

    for(const value of temp) {
        answer.push(...value[1])
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]	))
console.log(solution(4, [4,4,4,4,4]	))
// 3,4,2,1,5
