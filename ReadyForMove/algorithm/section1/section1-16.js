//소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

function solution(str) {
    let answer = '';
    const copy = str.slice();

    for (let s of str) {
        if(answer.indexOf(s) === -1) {
            answer += s;
        }
    }

    return answer;
}

function solution2(str) {
    let answer = '';

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) answer += str[i];
    }

    return answer;
}
