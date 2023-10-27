// 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
// ▣ 출력설명
// 첫째 줄에 조합수를 출력합니다.
// ▣ 입력예제 1 53
// ▣ 출력예제 1 10
// ▣ 입력예제 2
// 33 19
// ▣ 출력예제 2 818809200

// nCr = nC(n - r) 이기 때문에 이걸 메모 해두고 사용하는거이

function solution(n, r) {
    // 대충 숫자 33까진데 크게 잡는겨
    const memo = Array.from(Array(35),  () => Array(35).fill(0));

    function DFS(left, right) {
        if(memo[left][right] > 0) return memo[left][right];
        else if (left === right || right === 0) return 1;
        else {
            memo[left][right] = DFS(left - 1, right - 1) + DFS(left - 1, right);
            return memo[left][right];
        }
    }

    return DFS(n, r);
}

console.log(solution(5, 3))
console.log(solution(33, 19))
