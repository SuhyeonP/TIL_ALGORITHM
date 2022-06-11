// 최솟값

function solution (arr) {
    return Math.min(...arr);
}

function solution2 (num1, num2, num3) {
    let min = num1;

    if (min > num2) {
        min = num2;
    }

    if (min > num3) {
        min = num3;
    }

    return min;
}

console.log(solution2(73,10,33))

//100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.
//(정렬을 사용하면 안됩니다)
