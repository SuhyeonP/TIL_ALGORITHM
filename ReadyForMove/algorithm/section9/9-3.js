console.log(solution(5, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]))

function solution(n, root) {
    const map = Array.from({length: n + 1}, () => []);
    const check = Array.from({length: n + 1}, () => 0);
    let answer = 0;
    for (let [start, end] of root) {
        map[start].push(end)
    }

    function DFS(idx) {
        if(idx === n) answer ++;
        else {
            for(let ele of map[idx]) {
                if (check[ele] === 0) {
                    check[ele] = 1;
                    DFS(ele);
                    check[ele] = 0;
                }
            }
        }
    }
    check[1] = 1;
    DFS(1);

    return answer;
}
