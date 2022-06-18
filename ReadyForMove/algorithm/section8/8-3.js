function solution(n) {
    let answer = '';
    function DFS(v) {
        if(v > 7) {
            return ;
        } else {
            // console.log(v);
            // DFS(v  * 2);
            // DFS(v * 2 + 1) // 전위


            DFS(v  * 2);
            console.log(v);
            DFS(v * 2 + 1) // 중위


            // DFS(v  * 2);
            // DFS(v * 2 + 1)
            // console.log(v);// 후위
        }
    }
    DFS(n)
    return answer;
}

console.log(solution(1))
