// section 1-3
// 연필 다스수 구하기
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// mine
function solution(student) {
    if (student < 12) {
        return 1;
    }

    return Math.round(student / 12);
}


console.log(solution(35))
console.log(solution(178))
