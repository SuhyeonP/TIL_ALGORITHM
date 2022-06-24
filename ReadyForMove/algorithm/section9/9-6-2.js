console.log(solution([[1,1,0,0,0,1,0], [0,1,1,0,1,1,0], [0,1,0,0,0,0,0], [0,0,0,1,0,1,1], [1,1,0,1,1,0,0], [1,0,0,0,1,0,0], [1,0,1,0,1,0,0],]))
console.log(solution2([[1,1,0,0,0,1,0], [0,1,1,0,1,1,0], [0,1,0,0,0,0,0], [0,0,0,1,0,1,1], [1,1,0,1,1,0,0], [1,0,0,0,1,0,0], [1,0,1,0,1,0,0],]))

function isValid(arr, size) {
    const [start, end] = arr;

    if(start < 0 || end < 0 || size <= start || size <= end) return false;

    return true;
}

function solution(board) {
    const size = board.length;

    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, 0];

    const queue = [];
    let answer = 0;

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(board[i][j] === 1) {
                queue.push([i, j]);
                board[i][j] = 0;
                answer ++;


                while (queue.length) {
                    const temp = queue.shift();

                    for (let k = 0; k < 8; k++) {
                        const nx = temp[0] + dx[k];
                        const ny = temp[1] + dy[k];

                        if (isValid([nx, ny], size) && board[nx][ny] === 1) {
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

function solution2(board) {
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    const size = board.length;
    const queue = [];

    let answer = 0;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 0;
                queue.push([i, j]);
                answer++;

                while (queue.length) {
                    const [x, y] = queue.shift();

                    for (let k = 0; k < 8; k++) {
                        const nx = x + dx[k];
                        const ny = y + dy[k];

                        if (isValid([nx, ny], size) && board[nx][ny] === 1) {
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
