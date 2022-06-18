//자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

function solution(n) {
    if (n === 1) {
        return 1;
    } else {
        return solution(n - 1) + n.toString();
    }
}

console.log(solution(3))

function solution2(n) {
    function DFS(L) {
        if (L === 0) {
            return;
        } else {
            DFS(L - 1);
            console.log(L);
        }
    }
    return DFS(n);
}

solution2(3)
