// 0이하의 N개의 자연수가 주어지면
// 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과
// M(2<=M<=N) 이 주어집니다.
// 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다.
// 맨 마지막 총 경우의 수를 출력합니다.
// 출력순서는 사전순으로 오름차순으로 출력합니다.
// ▣ 입력예제 1
// 3 2
// 3 6 9
// ▣ 출력예제 1
// 3 6
// 3 9
// 6 3
// 6 9
// 9 3
// 9 6
// 6
function solution(arr, count) {
    const check = Array.from({length: arr.length}, () => 0);
    const bucket = Array.from({length: count}, () => 0);
    const answer = [];

    function DFS(ind) {
        if (count === ind)  {
            answer.push(bucket.slice());
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (check[i] === 0) {
                    // 첨에 쓴다고 하는건 똑같은 요소가 중복으로 들어가면 안돼서
                    check[i] = 1;
                    bucket[ind] = arr[i];
                    DFS(ind + 1);
                    // 0을 다시 해주는 이유는 다하고 돌아온거(arr[i]가 이미 answer에는 다 들어감
                    // 그래서 다른데서는 넣어줘야하니까 다시 0으로 안썻다고 해주는거임
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}

console.log(solution([3,6,9], 2))
