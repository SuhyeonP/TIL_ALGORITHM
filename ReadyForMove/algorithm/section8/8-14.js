function solution(n, cnt) {
    const answer = [];
    const temp = Array.from({length: cnt}, () => 0);

    function DFS(idx, s) {
        if (idx === cnt) {
            answer.push(temp.slice())
        } else {
            for(let i = s; i <= n; i++) {
                temp[idx] = i;
                DFS(idx + 1, i + 1);
            }
        }
    }

    DFS(0,1);
    return answer;
}

console.log(solution(4, 2))
