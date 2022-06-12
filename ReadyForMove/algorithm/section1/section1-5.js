// section 1-5
// 최솟값 구하기 7가지의 수가 주어지면 그 숫자중 가장 작은수를 출력하는 프로그램을 작성하시오

function solutionMiner(a, b, c, d, e, f, g) {
    let min = Infinity;

    if (min < a) {
        min = a;
    }

    if (min < b) {
        min = b;
    }

    if (min < c) {
        min = c;
    }


    if (min < d) {
        min = d;
    }

    if (min < e) {
        min = e;
    }

    if (min < f) {
        min = f;
    }

    if (min < g) {
        min = g;
    }

    return g;
}

function solution2(arr) {
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
