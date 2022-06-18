//N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고,
// 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
// 둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어 합니다.
// 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로
// 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

//1 3 5 6 7 10 => YES

function solution(arr) {
    let answer = 'NO';
    const total = arr.reduce((a, b) => a + b, 0);
    let flag = 0;

    function DFS(idx, sum) {
        if(flag) return;
        if(idx === arr.length) {
            if (total - sum === sum) {
                flag = 1;
                answer = 'YES';
            }
        } else {
            DFS(idx + 1, sum + arr[idx]);
            DFS(idx + 1, sum);
        }
    }
    DFS(0,0)
    return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]))
