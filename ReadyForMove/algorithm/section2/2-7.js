//지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
// 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
function solution(arr) {
    let answer = 0;
    const length = arr.length;
    const copy = new Array(length + 2).fill(new Array(length + 2).fill(0));

    for(let i = 1; i < length + 1; i++) {
        copy[i] = [0, ...arr[i - 1], 0];
    }

    for(let i = 1; i < length + 1; i++) {
        for (let j = 1; j < length + 1; j++) {
            const base = copy[i][j];
            if(base < copy[i - 1][j] || base < copy[i][j - 1] || base < copy[i][j + 1] || base < copy[i + 1][j]) continue;
            answer ++;
        }
        // for (let j = 1; j < length + 1; j++) {
        //     const base = copy[i][j];
        //     const top = copy[i - 1][j];
        //     const left = copy[i][j - 1];
        //     const right = copy[i][j + 1];
        //     const bottom = copy[i + 1][j];
        //
        //     if (base === Math.max(top, left, right, bottom, base)) {
        //         answer +=1 ;
        //     }
        // }
    }

    return answer;
}

function solution2(arr) {
    let answer = 0;
    const length = arr.length;
    const dx = [-1, 0 , 1, 0];
    const dy = [0, 1, 0, -1];

    for(let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                const nx = i + dx[k];
                const ny = j + dy[k];
                if (nx >= 0 && nx < length && ny >= 0 && ny < length && arr[nx][ny] > arr[i][j]) {
                    flag = 0;
                    break;
                }
            }
            if(flag) answer++;
        }
    }
    return answer;
}

console.log(solution([[5, 3, 7, 2, 3], [3, 7, 1, 6, 1],[7, 2, 5, 3, 4],[4, 3, 6, 4, 1],[8, 7, 3, 5, 2]]))
console.log(solution2([[5, 3, 7, 2, 3], [3, 7, 1, 6, 1],[7, 2, 5, 3, 4],[4, 3, 6, 4, 1],[8, 7, 3, 5, 2]]))

