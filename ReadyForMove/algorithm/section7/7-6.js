//현수네 반에는 N명의 학생들이 있습니다.
// 선생님은 반 학생들에게 반 번호를 정해 주기 위해
// 운동장에 반 학생들을 키가 가장 작은 학 생부터 일렬로 키순으로 세웠습니다.
// 제일 앞에 가장 작은 학생부터 반 번호를 1번부터 N번까 지 부여합니다.
// 현수는 짝꿍보다 키가 큽니다.
// 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자 리를 바꿨습니다.
// 선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했습니 다.
// 현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때
// 현수가 받은 번 호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램을 작성하세요.

//120 125 152 130 135 135 143 127 160 -> 3, 8

// 120 130 150 150 130 150 -> 3, 5
function solution(heights) {
    for(let i = 0; i < heights.length; i++) {
        const min = heights[i];
        for(let j = heights.length - 1; j > i; j--) {
            if (min > heights[j]) {
                return [i + 1, j + 1]
            }
        }
    }
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]))
console.log(solution([120, 130, 150, 150, 130, 150]))
console.log(solution2([120, 125, 152, 130, 135, 135, 143, 127, 160]))
console.log(solution2([120, 130, 150, 150, 130, 150]))


function solution2(arr) {
    const copy = arr.slice().sort((a, b) => a - b);
    const answer = [];

    for(let idx in arr) {
        if(copy[idx] !== arr[idx]) answer.push(Number(idx) + 1);
    }

    return answer;
}
