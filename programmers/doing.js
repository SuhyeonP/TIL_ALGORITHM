function solution(m, n, board) {
    board = board.map(v => v.split(''));

    while (true) {
        let founded = [];

        // 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }

        if (! founded.length) return [].concat(...board).filter(v => ! v).length;

        // 부수기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => ! v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}

// console.log(solution(4,5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))

console.log(solution(6,6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

// console.log([false, true, false, false].some(item => item))

// console.log([true,false,false,true,false].join('').includes('truetrue'))


//function solution(m, n, board) {
//     board = board.map((ele) => ele.split(''));
//
//     while(true) {
//
//         let founded = [];
//
//         for (let i = 1; i < m; i++) {
//             for (let j = 1; j < n; j ++) {
//                 const now = [board[i][j], board[i][j - 1], board[i-1][j], board[i-1][j-1]].sort();
//                 if(now[0] === now[3] && now[0]) {
//                     founded.push([i, j]);
//                 }
//             }
//         }
//
//         if (!founded.length) {
//             return [].concat(...board).filter(v=>!v).length;
//         }
//
//         founded.forEach(tile => {
//             board[tile[0]][tile[1]] = 0;
//             board[tile[0]][tile[1]-1] = 0;
//             board[tile[0]-1][tile[1]] = 0;
//             board[tile[0]-1][tile[1]-1] = 0;
//         });
//
//         for (let i = m - 1; i > 0; i--) {
//             if (!board[i].some(v => !v)) continue;
//             for(let j = 0; j < n; j++) {
//                 for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
//                     if (board[k][j]) {
//                         board[i][j] = board[k][j];
//                         board[k][j] = 0;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// }