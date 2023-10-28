// 기존에는 갈 수 있는데를 1로 표시했다면
// 이젠

const arr1=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];

// 이거면
// [[2, 3, 4],
// [1, 3, 5],
// [4],
// [2,5],
//[]]

// 위치를 바로 표시
function solution(arr, target) {
    const graph = Array.from({length: target + 1}, () => []);
    const check = Array.from({length: target + 1}, () => 0);
    const path = [];
    const all = [];

    for(const [start, end] of arr) {
        graph[start].push(end);
    }

    let answer = 0;
    function DFS(ind) {
        if (ind === target) {
            answer ++;
            all.push(path.slice());
        } else {
            for (const ele of graph[ind]) {
                if (check[ele] === 0) {
                    check[ele] = 1;
                    path.push(ele);
                    DFS(ele);
                    check[ele] = 0;
                    path.pop();
                }
            }
        }
    }

    check[1] = 1;
    DFS(1);
    console.log(all)
    return answer;
}
const arr1=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];

console.log(solution(arr1, 5))
