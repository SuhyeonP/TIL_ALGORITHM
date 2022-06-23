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
