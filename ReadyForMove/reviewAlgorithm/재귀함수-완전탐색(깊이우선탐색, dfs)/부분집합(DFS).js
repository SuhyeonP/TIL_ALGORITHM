//자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을
// 모두 출력하는 프로그램 을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
// 단 공집합은 출력하지 않습니다.

// ▣ 입력예제 1
// 3
// ▣ 출력예제 1
// 1 2 3
// 1 2
// 1 3
// 1
// 2 3
// 2
// 3

// 부분집합의 공식은 2 ^ n (공집합 포함)
// 각 원소들에 대해 부분집합에 포함한ㄷ/ 안한다 두개로 나눌 수 있음
function solution(n) {
    const answer = [];
    // 1부터 시작해서 한개 더 늘리고, 0은 안쓰는 방향
    const check = Array.from({length: n + 1}, () => 0);

    function DFS(target) {
        if (target === n + 1) {
            const tempArr = [];
            for (let i = 1; i < n + 1; i++) {
                // check에 표시한 애면 부분집합에 포함시킬 값이라서
                if (check[i] === 1) {
                    tempArr.push(i);
                }
            }
            if (tempArr.length !== 0) {
                answer.push(tempArr);
            }
        } else {
            check[target] = 0;
            DFS(target + 1);
            check[target] = 1;
            DFS(target + 1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3))
