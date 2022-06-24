console.log(solution([[1,1,0,0,0,1,0], [0,1,1,0,1,1,0], [0,1,0,0,0,0,0], [0,0,0,1,0,1,1], [1,1,0,1,1,0,0], [1,0,0,0,1,0,0], [1,0,1,0,1,0,0],]))

function isValid(arr, size) {
    const [start, end] = arr;
    if (start < 0 || end < 0 || size <= start || size <= end) return false;
    return true;
}

function solution(boards) {
    const size = boards.length;
    let answer = 0;

    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    function DFS(start, end) {
        boards[start][end] = 0;

        for(let i = 0; i < 8; i++) {
            const nx = start + dx[i];
            const ny = end + dy[i];

            if(isValid([nx, ny], size) && boards[nx][ny] === 1) {
                DFS(nx, ny)
            }
        }
    }


    for(let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if(boards[i][j] === 1) {
                answer ++;
                DFS(i, j)
            }
        }
    }
    return answer;
}
