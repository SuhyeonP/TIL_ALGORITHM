//N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

function solution(arr) {
    const length = arr.length;
    let max = -Infinity;

    let cross1 = 0;
    let cross2 = 0;

    for(let i = 0; i < length; i++) {
        const sum = arr[i].reduce((before, now) => before + now, 0);
        if (max < sum) {
            max = sum;
        }
        let temp = 0
        for (let j = 0; j < length; j++) {
            temp += arr[i][j];
        }

        if (max < temp) {
            max = temp;
        }

        cross1 += arr[i][i];
        cross2 += arr[length - 1 - i][length - 1 - i];
    }
    // 열 합

    const bigger = Math.max(cross1, cross2);

    if (max < bigger) {
        max = bigger;
    }

    return max;
}

function solution2(arr) {
    let sum1 = 0,sum2 = 0, sum3 = 0, sum4 = 0;
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        sum3 += arr[i][i];
        sum4 += arr[length - 1- i][length - 1 - i];
    }
    return Math.max(sum1, sum2, sum3, sum4);

}


console.log(solution2([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]))


console.log(solution([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]]))
