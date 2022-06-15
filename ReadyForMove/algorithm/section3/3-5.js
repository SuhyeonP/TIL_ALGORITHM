//알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.

// KKHSSSSSSSE
// K2HS7E

// 틀림 뒤에 같은 문자 나오면 바로 틀림
// function solution(str) {
//     let answer = '';
//     const map = new Map();
//     const set = new Set();
//
//     for(let s of str) {
//         map.set(s, map.has(s) ? map.get(s) + 1 : 1);
//         set.add(s);
//     }
//     for(let value of set) {
//         answer += value;
//         if(map.get(value) > 1) {
//             answer += map.get(value);
//         }
//     }
//
//     return answer;
// }

function solution2(str) {
    let answer = '';
    let cnt = 1;
    str = str + ' ';
    // 마지막 공백을 추가함으로써 마지막 까지 돈다.

    for (let i = 0; i < str.length - 1; i ++) {
        if(str[i] === str[i+1]) cnt ++;
        else {
            answer += str[i];
            if(cnt > 1) answer += cnt.toString();
            cnt = 1;
        }
    }
    return answer;
}

console.log(solution2('KKHSSSSSSSE'))

