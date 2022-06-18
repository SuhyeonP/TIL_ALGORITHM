//10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
// 단 재귀함수를 이용 해서 출력해야 합니다.

function solution(n) {
    if (n === 1) {
        return n % 2;
    } else {
        return solution(Math.floor(n / 2)) + (n % 2).toString();
    }
}

console.log(solution(11))
console.log(solution2(11))

function solution2(n) {
    let answer = '';

    function DFS(l) {
        if(l === 0) return;
        else {
            DFS(Math.floor(l / 2));
            answer += String(l % 2)
        }
    }
    DFS(n)
    return answer;
}
