//N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(strs) {
    const checkLength = strs.map((str) => str.length);

    return strs[checkLength.indexOf(Math.max(...checkLength))];
}

function solution2(strs) {
    let answer = '', max = -Infinity;

    for (let s of strs) {
        if (max < s.length) {
            answer = s;
            max = s.length;
        }
    }

    return answer;
}
