// section 1-2
// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// mine
function solution (a, b, c) {
    const sum = a + b + c;
    const max = Math.max(...[a, b, c]);

    return sum - 2 * max >= 0 ? 'Yes' : 'No'
}

// him
function solution2 (a, b, c) {
    let answer = 'Yes', max;
    let tot = a + b + c;

    if (a > b) max = a;
    else max = b;

    if (c > max) max = c;

    if (tot - max <= max) return 'No'

    return answer;
}

console.log(solution(6,7,11))
console.log(solution(13,33,17))
console.log(solution2(6,7,11))
console.log(solution2(13,33,17))

