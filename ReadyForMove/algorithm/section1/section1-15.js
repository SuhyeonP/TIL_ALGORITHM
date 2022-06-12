//소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요.
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.


function solution(str) {
    const length = str.length;
    const half = Math.floor(length / 2);

    if (length % 2 === 0) {
        return str.slice(half - 1, half + 1);
    }

    return str.slice(half, half + 1)
}

function solution2(str) {
    const length = str.length;
    const half = Math.floor(length / 2);

    if (half % 2 === 1) {
        return str.substring(half, half + 1);
    } else {
        return str.substring(half - 1, half + 1)
    }

}

