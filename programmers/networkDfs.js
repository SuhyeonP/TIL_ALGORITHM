function solution (n, computers) {
    let answer = 0;

    const check = [];

    for (let i = 0; i < n; i++) {
        check.push(false);
    }

    function dfs (idx) {
        check[idx] = true;
        // 방문했다는거

        for (let i = 0; i < n; i++) {
            // 자식 방문
            if (computers[idx][i] === 1 && !check[i]) {
                dfs(i)
            }
        }
    }

    for(const idx in check) {
        if (!check[idx]) {
            dfs(idx);
            answer += 1;
        }
    }

    return answer;
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]	))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))
