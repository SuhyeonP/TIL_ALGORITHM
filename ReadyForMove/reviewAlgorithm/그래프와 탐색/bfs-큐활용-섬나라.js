// 큐에 좌표를 넣어둠!!
// 큐에 넣기전 0으로 바꿔주고 넣어야함
function isValid([x, y], size) {
    if (x >= 0 && y >= 0 && x < size && y < size) return true;
    return false;
}

function solution(board) {
    let answer = 0;

    const size = board.length;
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    const queue = [];

    for(let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j]) {
                board[i][j] = 0;
                queue.push([i, j]);
                answer ++;

                while (queue.length) {
                    const [x, y] = queue.shift();

                    for(let k = 0; k < 8; k++) {
                        const nx = dx[k] + x;
                        const ny = dy[k] + y;

                        if(isValid([nx, ny], size) && board[nx][ny]) {
                            board[nx][ny] = 0;
                            queue.push([nx, ny]);
                        }
                    }
                }
            }
        }
    }
    return answer;
}
console.log(solution([[1,1,0,0,0,1,0], [0,1,1,0,1,1,0], [0,1,0,0,0,0,0], [0,0,0,1,0,1,1], [1,1,0,1,1,0,0], [1,0,0,0,1,0,0], [1,0,1,0,1,0,0],]))


