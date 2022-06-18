function solution(questions, time) {
    const totalScore = questions.reduce((a, b) => a + b[0], 0);
    console.log(totalScore)
    const totalTime = questions.reduce((a, b) => a + b[1], 0);
    console.log(totalTime)
    let answer = 0;

    function DFS(idx, sum, going) {
        if(idx === questions.length) {
            return;
        }
        if(going <= time) {
            console.log(idx, going, sum)
            answer = Math.max(answer, sum)
        } else {
            DFS(idx + 1, sum, going);
            DFS(idx + 1, sum - questions[idx][0], going - questions[idx][1]);
        }
    }

    DFS(0, totalScore, totalTime)
    return answer;
}

console.log(solution([[10,5],[25,12],[15,8],[6,3],[7,4]],20))
// console.log([[10,5],[25,12],[15,8],[6,3],[7,4]][0])
