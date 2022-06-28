console.log(solution([[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0]]))

function solution(board) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    let answer = 0;

    board[0][0] = 1;

    function DFS(start, end) {
        if(start === 6 && end === 6) answer++;
        else {
            for(let i = 0; i < 4; i++) {
                let nx = start + dx[i];
                let ny = end + dy[i];

                if(0<= nx && nx <= 6 && 0 <= ny && ny <=6 && board[nx][ny] === 0) {
                    board[nx][ny] = 1;
                    DFS(nx, ny);
                    board[nx][ny] = 0;
                }
            }
        }
    }

    DFS(0, 0);
    return answer;
}
console.log(solR([[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1], [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0]]))

function isValid(arr, size) {
    const [start, end] = arr;
    return 0 <= start && start < size && 0 <= end && end < size;
}

function solR(boards) {
    let answer = 0;

    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    boards[0][0] = 1;

    function dfs(start, end) {
        if(start === 6 && end === 6) answer ++;
        else {
            for (let i = 0; i < 4; i++) {
                const nx = start + dx[i];
                const ny = end + dy[i];
                if (isValid([nx, ny], 7) && boards[nx][ny] === 0) {
                    boards[nx][ny] = 1;
                    dfs(nx, ny);
                    boards[nx][ny] = 0;
                }
            }
        }
    }
    dfs(0,0)
    return answer;
}
