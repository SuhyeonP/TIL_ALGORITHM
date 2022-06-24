// 8-7 동일

function solution(questions, time) {
    const dy = Array.from({ length: time + 1 }, () => 0);

    for (let i = 0; i < questions.length; i++) {
        const score = questions[i][0];
        const min = questions[i][1];

        // 중복적용 피하기 위해
        for(let j = time; j >= min; j --) {
            dy[j] = Math.max(dy[j], dy[j - min] + score);
        }
    }
    console.log(dy)
    return dy[time]
}
console.log(solution([[10,5],[25,12],[15,8],[6,3],[7,4]],20))
// console.log([[10,5],[25,12],[15,8],[6,3],[7,4]][0])
