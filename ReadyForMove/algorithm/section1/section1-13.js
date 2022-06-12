//대문자와 소문자가 같이 존재하는 문자열을 입력받아
// 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

function solution(str) {
    let answer = '';

    for(let s of str) {
        if(s === s.toUpperCase()) {
            answer += s.toLowerCase();
        } else {
            answer += s.toUpperCase();
        }
    }

    return answer;
}

// 동일

console.log(solution('cAd'))
