function solution(questions, time) {
    let answer = 0;

    function DFS(idx, sum, going) {
        if(going > time) {
            return;
        }
        if(idx === questions.length) {
            answer = Math.max(answer, sum);
        } else {
            DFS(idx + 1, sum, going);
            DFS(idx + 1, sum + questions[idx][0], going + questions[idx][1])
        }
    }

    DFS(0, 0, 0)
    return answer;
}

console.log(solution([[10,5],[25,12],[15,8],[6,3],[7,4]],20))
// console.log([[10,5],[25,12],[15,8],[6,3],[7,4]][0])
