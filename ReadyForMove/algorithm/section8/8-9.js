function solution(kind, price) {
    let answer = Infinity;

    function DFS(count, sum) {
        if(sum > price) return;
        if(count > answer) return;

        if(sum === price) {
            answer = Math.min(answer, count);
        } else {
            for(let i = 0; i < kind.length; i++) {
                DFS(count + 1, sum + kind[i]);
            }
        }
    }

    DFS(0,0)
    return answer;
}

console.log(solution([1,2,5],15))
