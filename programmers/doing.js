function solution(m, n, gameBoard) {
    let answer = 0;

    const kind = ['R','M','A','F','C','J','N', 'T'];
    const visited = ['r','h','a','f','c','j','n','t'];

    function checkSame(check, characterIdx) {
        const temp = check.filter((ele) => ele === kind[characterIdx] || ele === visited[characterIdx]);
        return temp.length === 4;
    }

    function checkKeepGoing (game) {
        let checkCol = new Array(n).fill(true);

        game.forEach((line, idx) => {
            if(line.filter((tile) => tile !== 'X').length < 2) {
                checkCol[idx] = false;
            }
        })
        return checkCol.join('').includes('truetrue');
    }

    let board = [];

    for (let i = 0; i < n; i++) {
        board.push(gameBoard.map((ele) => ele[i]));
    }

    while(checkKeepGoing(board)){
        for (let row = 0; row <= n - 2; row ++) {
            for (let col = 0; col <= m - 2; col ++) {
                const now = [board[row][col], board[row][col+1], board[row+1][col], board[row+1][col + 1]];
                if(now.filter((ele) => ele === 'X').length > 0) {
                    break;
                }
                for (const characterIdx in kind) {
                    const check = checkSame(now, characterIdx);
                    if (check) {
                        answer ++;
                        board[col][row] = visited[characterIdx];
                        board[col][row+1] = visited[characterIdx];
                        board[col+1][row] = visited[characterIdx];
                        board[col][row+1] = visited[characterIdx];
                        break;
                    }
                }
            }
        }
        console.log(board)

        board.forEach((ele, idx) => {
            const temp = ele.join('').replace(/[^ARMFCJNT]/g, '').split('');
            board[idx] = temp.concat(new Array(m - temp.length).fill('X'));
        })
        console.log(board)

    }

    return answer;
}

console.log(solution(4,5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))


// console.log([false, true, false, false].some(item => item))

// console.log([true,false,false,true,false].join('').includes('truetrue'))
