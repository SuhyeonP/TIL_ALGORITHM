function solution(kind, cnt) {
    const answer = [];
    let temp = Array({length: cnt}, () => 0);

    function DFS(n,before) {
        if(n === cnt) {
            answer.push(temp.slice())
        } else {
            for(let i = 0; i < kind.length; i++) {
                if(before !== kind[i]){
                    temp[n] = kind[i];
                    DFS(n + 1, kind[i]);
                }
            }
        }
    }
    DFS(0,0)
    return answer;
}

console.log(solution([3,6,9], 2))

function solution2(kind, cnt) {
    const answer = [];
    const temp = Array.from({length: cnt}, () => 0)
    const check = Array.from({length: kind.length}, () => 0);

    function DFS(n) {
        if(n === cnt) {
            answer.push(temp.slice());
        } else {
            for(let i = 0; i < kind.length; i++) {
                if(check[i] === 0){
                    check[i] = 1;
                    temp[n] = kind[i];
                    DFS(n + 1);
                    check[i] = 0;
                }
            }
        }
    }

    DFS(0)
    return answer;
}

console.log(solution2([3,6,9],2))
