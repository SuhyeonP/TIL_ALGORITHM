function solution2(kind, cnt) {
    const answer = [];
    let tmp = Array.from({length: cnt}, () => 0);
    function DFS(n) {
        if(n === cnt) {
            answer.push(tmp.slice())
        } else {
            for(let i = 1; i <= kind; i++) {
                tmp[n] = i;
                DFS(n + 1);
            }
        }
    }

    DFS(0);
    return [answer, answer.length];
}


console.log(solution2(3,2))
