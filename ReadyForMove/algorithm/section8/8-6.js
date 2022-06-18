function solution(weight, dogs) {
    const total = dogs.reduce((a, b) => a + b, 0);
    let answer = 0;

    function DFS(idx, sum) {
        if(idx === dogs.length + 1) {
            return;
        }
        if(sum <= weight) {
            answer = Math.max(answer, sum);
        } else {
            DFS(idx + 1, total - dogs[idx]);
            DFS(idx + 1, total);
        }
    }

    DFS(0,total)
    return answer;
}


console.log(solution(259, [81, 58, 42, 33, 61])) // 242
