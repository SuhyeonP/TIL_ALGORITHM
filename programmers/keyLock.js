// function solution(key, lock) {
//     let answer = false;
//
//     const board = makeBoard(lock, key.length);
//     let copy_key = key;
//     // 총 4번 반복을 할 것이다. 4번 회전이 가능하기 때문이다.
//     for (let i = 0; i < 4; i++) {
//         // 처음부터 회전을 적용하여 시작한다. 때문에 4번 반복을 하는 것이다.
//         copy_key = rotate(copy_key);
//
//         // 전체 탐색 배열에서 오직 key 배열만 처음부터 끝까지
//         // 위치를 이동하며 탐색을 진행한다.
//         // 이때 시작위치는 0이며, 종료위치는 마지막 원소에서
//         // key 배열의 길이만틈 떨어진 곳이 될 것이다.
//         for (let j = 0; j <= board.length - key.length; j++) {
//             for (let k = 0; k <= board.length - key.length; k++) {
//                 // JSON 함수를 이용해 원본 전체 탐색 배열을 복사
//                 const copy_lock = JSON.parse(JSON.stringify(board));
//
//                 // key에 담긴 값(= copy_key[l][m])을
//                 // 현재 key가 위치하고 있는 전체 탐색 배열 위치
//                 // copy_lock[j+l][k+m]과 더해줄 것 이다.
//                 for (let l = 0; l < key.length; l++) {
//                     for (let m = 0; m < key.length; m++) {
//                         copy_lock[j + l][k + m] += copy_key[l][m];
//                     }
//                 }
//
//                 // 계산이 완료된 copy_lock을 체크함수에 전달
//                 answer = isCheck(copy_lock, key.length, lock.length);
//                 // 만일 잠금해제가 가능한 상태면 바로 반복을 종료하고 정답을 리턴
//                 if (answer) return answer;
//             }
//         }
//     }
//
//     // 위의 반복문이 도중에 종료되지 않았다면
//     // 잠금해제가 가능한 경우가 없었다는 것이므로 false 리턴
//     return false;
// }
//
//
// // 90도 회전하는 함수
// const rotate = (arr) => {
//     // 배열을 리턴해줄 것이므로 map 함수를 사용하여 2중 반복 처리
//     return arr.map((_, idx) => {
//         const rest = [];
//         // 배열의 마지막부터 접근하여
//         // 마지막원소(i)와 현재위치(idx)를 교환해준다.
//         for (let i = arr.length - 1; i >= 0; i--)
//             rest.push(arr[i][idx]);
//         return rest;
//     });
// }
//
//
// // arr 매개변수는 lock, len은 key 배열의 길이이다.
// const makeBoard = (arr, len) => {
//     // 두 배열의 크기차이를 구한다.
//     // 2를 곱해주는 이유는 가로/세로 관점에서 최대 2개의
//     // key 배열이 왼쪽-오른쪽/위쪽-아래쪽에 추가되기 때문
//     const diff = (arr.length - len) * 2
//     // 전체 배열의 크기를 구한다.
//     // 전체 배열의 크기는 lock 배열 크기의 3배에서
//     // 사이드에 추가되는 key 배열이 각각 모서리 1칸씩 점유하므로 2를 빼주고
//     // 위에서 구한 diff 를 빼준 값이 된다.
//     const blocks = arr.length * 3 - 2 - diff;
//
//     // blocks 크기 만큼의 확장된 2차원 배열을 생성
//     return new Array(blocks).fill().map((_, idx) => {
//         // div 영역은 전체 배열에서 중앙에 위치하는 lock 배열의 공간이다.
//         const div = (blocks - arr.length) / 2;
//         // 해당 위치가 전체배열의 중앙이라면
//         if (idx >= div && idx < div + arr.length) {
//             // lock 배열을 초과하는 나머지 배열은 0으로 채우고
//             const fb = new Array(div).fill(0);
//             // 중앙 부분은 기존 lock 배열의 값을 넣어준다.
//             return [...fb, ...arr[idx - div], ...fb];
//         }
//         // 해당 위치는 lock 배열 외부의 공간이므로
//         // 모두 0으로 초기화한다.
//         return new Array(blocks).fill(0);
//     });
// }
//
// // klen = key 배열의 길이, llen = lock 배열의 길이
// const isCheck = (arr, klen, llen) => {
//     // 전체 배열에서 가운데 위치한 자물쇠의 영역은
//     // arr.slice(start, last)가 된다.
//     const start = klen - 1;
//     const last = start + llen;
//     // slice 라서 -1 안함
//     // outer는 전체 배열에서 lock 배열이 있는 첫 행
//     for (const outer of arr.slice(start, last)) {
//         // inner은 첫 행에서 lock 배열만의 행을 말한다.
//         for (const inner of outer.slice(start, last)) {
//             // 이 값이 1이 아니라는 것은 잠금해제가 불가한 것
//             if (inner !== 1) return false;
//         }
//     }
//
//     // 위 반복을 모두 통과하면 lock이 모두 1이 된 상태이므로
//     // 잠금해제가 가능한 상태를 말한다.
//     return true;
// }

function solution (key, lock) {
    const keyLength = key.length;
    const board = makeBoard(lock, keyLength);

    for (let cycle = 0; cycle < 4; cycle++) {
        key = rotate(key);
        for (let i = 0; i <= board.length - keyLength; i++) {
            for (let j = 0; j<= board.length - keyLength; j++) {
                const copy_board = JSON.parse(JSON.stringify(board));

                for (let p = 0; p < keyLength; p ++) {
                    for (let q = 0; q < keyLength; q++) {
                        copy_board[i+p][j+q] += key[p][q];
                    }
                }
                if(checkingSolve(copy_board, keyLength, lock.length)) return true;
            }
        }
    }
    return false;
}

function checkingSolve (tempBoard, keyLength, lockLength) {
    const start = keyLength -1;
    const last = start + lockLength;

    for (const outer of tempBoard.slice(start, last)) {
        for (const inner of outer.slice(start, last)){
            if(inner !== 1) return false;
        }
    }
    return true;
}

function rotate (key) {
    return key.map((_, idx) => {
        const temp = [];

        for(let i = key.length - 1; i >= 0; i-- ){
            temp.push(key[i][idx])
        }


        return temp;
    })
}

function makeBoard (lock, keyLength) {
    const gap = (lock.length - keyLength) * 2;
    const deps = lock.length * 3 - 2 - gap;

    return new Array(deps).fill().map((ele, idx) => {
        const lockZone = keyLength - 1;
        // lockZone 이 lock 이 채워져야할 인덱스이기도 하지만 key가 가져야할 공간의 길이가 될수도
        if(lockZone <= idx && idx < lockZone + lock.length) {
            const fillZero = new Array(lockZone).fill(0);
            return [...fillZero, ...lock[idx - lockZone], ...fillZero]
        }
        return new Array(deps).fill(0);
    })
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))