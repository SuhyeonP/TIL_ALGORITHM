//대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

function solution(str) {
    let answer = '';

    for (let s of str) {
        answer += s.toUpperCase();
    }

    return answer;
}

function solution2(str) {
    let answer = '';

    for (let s of str) {
        const num = s.charCodeAt();

        if (97 >= num && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += s;
    }

    return answer;
}
