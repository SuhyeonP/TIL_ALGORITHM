//앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES",
// 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

function solution(str) {
    const length = str.length;

    if (length === 1) {
        return 'NO';
    }

    str= str.toUpperCase();
    let front = '', back = '';
    const half = Math.floor(length / 2);

    if (length % 2 === 1) {
        front = str.slice(0, half);
        back = str.slice(half + 1, length).split('').reverse().join('');
    } else {
        front = str.slice(0, half);
        back = str.slice(half, length).split('').reverse().join('');
    }

    return front === back ? 'YES' : 'NO';
}

function solutionSub(str) {
    const length = str.length;

    if (length === 1) {
        return 'NO';
    }

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if(str[i] !== str[length - 1 - i]) return 'NO';
    }

    return 'YES'
}

console.log(solutionSub('godadog'))

console.log(solution('gooG'))
console.log(solution('godoG'))

