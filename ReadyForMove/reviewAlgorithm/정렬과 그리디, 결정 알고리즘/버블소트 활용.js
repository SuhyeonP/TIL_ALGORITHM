// N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
// 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

// !!! 순서 변함이 없다!

// ▣ 입력설명
// 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고,
// 그 다음 줄부터 음수를 포함한 정수가 주어진 다.
// 숫자 0은 입력되지 않는다.

// ▣ 출력설명
// 정렬된 결과를 출력한다.
//
// ▣ 입력예제 1
// 8
// 1 2 3 -3 -2 5 6 -6
//
// ▣ 출력예제 1
// -3 -2 -6 1 2 3 5 6


function solution (arr) {
    const answer = [];
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 버블정렬 기법으로
            // 순서는 바뀌면 안됨 => 음수 양수만 체크하는거임
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

// 정렬 기법 안써도 된다면
function solution2sub(arr) {
    const answer = [];

    for(let ele of arr) {
        if(ele < 0) {
            answer.push(ele);
        }
    }
    for(let ele of arr) {
        if(ele > 0) {
            answer.push(ele)
        }
    }
    return answer;
}