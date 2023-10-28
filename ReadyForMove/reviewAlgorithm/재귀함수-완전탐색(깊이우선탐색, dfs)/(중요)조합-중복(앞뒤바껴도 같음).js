// 1 부터 N 까지 번호가 적힌 구슬이 있습니다.
// 이중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다.
// 맨 마지막 총 경우의 수를 출력합니다.
// 출력순서는 사전순으로 오름차순으로 출력합니다.

// ▣ 입력예제 1
// 4 2
// ▣ 출력예제 1
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4
// 6

function solution(kind, time) {
    const answer = [];
    const bucket = Array.from({length: time}, () => 0);

    function DFS(ind, deps) {
        if (ind === time) {
            answer.push(bucket.slice());
        } else {
            for (let i = deps; i <= kind; i++) {
                bucket[ind] = i;
                DFS(ind + 1, i + 1);
            }
        }
    }

    DFS(0, 1);
    return answer;
}
