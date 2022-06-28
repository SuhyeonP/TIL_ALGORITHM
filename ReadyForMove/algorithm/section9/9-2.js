function solution(length, root) {
    const check = Array.from({length: length + 1}, () => 0);
    const map = Array.from({length: length + 1}, () => Array.from({length: length + 1}, () => 0));
    let answer = 0;
    for (let [start, end] of root) {
        map[start][end] = 1;
    }

    function DFS(idx) {
        if (idx === length) {
            answer ++;
        } else {
            for(let i = 1; i <= length; i++) {
                if (check[i] === 0 && map[idx][i] === 1) {
                    check[i] = 1;
                    DFS(i);
                    check[i] = 0;
                }
            }
        }
    }


    check[1] = 1;
    DFS(1);
    return answer;
}
console.log(solution(5, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]))
console.log(solR(5, [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]]))

function solR(size, arr) {
    let answer = 0;
    const board = Array.from({length: size + 1}, () => Array.from({length: size + 1}, () => 0));
    const check = Array.from({length: size + 1}, () => 0);

    for(let [start, end] of arr) {
        board[start][end] = 1;
    }

    console.log(board)

    function DFS(idx) {
        if (idx === 5) answer ++;
        else {
            for(let i = 1; i <= size; i++) {
                if (check[i] === 0 && board[idx][i] === 1) {
                    check[i] = 1;
                    DFS(i);
                    check[i] = 0;
                }
            }
        }
    }

    check[1] = 1;
    DFS(1);

    return answer;

}
