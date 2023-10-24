//N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬하는 방법은 선택정렬입니다.
//
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
// 각 자연수는 정수형 범위 안에 있습니다.
//
// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.
//
// ▣ 입력예제 1
// 6
// 13 5 11 7 23 15
//
// ▣ 출력예제 1
// 5 7 11 13 15 23

// 선택정렬 전략은 이중포문,
// i는 0부터 시작.. j는 i 뒤부터 돔
// 선택정렬은 주어진 리스트중 최소값을 찾아서 맨앞에 위치한값과 교체한다.
// 맨첨위치를 뺀 나머지 리스트를 같은방법으로 교체한다.
// 시간보잡도는 o(n^2)이다.
// 항상 두개의 중첩된 루프를 가지며 외부루프는 N-1 번 반복하고, 내부루프는 최솟값을 찾기위해 현재위치 이후로 요소검사
// 따라서 배열크기가 n 이라면 n* (n-1_ / 2 번의 비교를 수행한다.


function solution (numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        let now = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            count ++;
            if(now > numbers[j]) {
                numbers[i] = numbers[j];
                numbers[j] = now;
                now = numbers[i];
            }
        }
    }

    console.log(count)
    return numbers;
}

console.log(solution([13,5,11,7,23,15]))
console.log(solution2([13,5,11,7,23,15]))

function solution2 (numbers) {
    const len = numbers.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        let idx = i;

        for (let j = i + 1; j < len; j++) {
            if(numbers[idx] > numbers[j]) idx = j;
            count ++
        }
        [numbers[i], numbers[idx]] = [numbers[idx], numbers[i]]
    }
    console.log(count)
    return numbers;
}