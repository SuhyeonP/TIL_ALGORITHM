//한 개의 문자열 s와 문자 t가 주어지면
// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를
// 출력하는 프로그램을 작성하세요

//teachermode e
//10121012210

// 틀림
// function solution(str, s) {
//     const split = str.split(s);
//     const bucket = []
//
//     for (let i = 0; i < split.length; i++) {
//         const part = split[i];
//         if (part === '') {
//             bucket.push(0);
//         } else {
//             const len = part.length;
//             for(let j = 0; j < len; j++) {
//                 const min = Math.min(j + 1, len - j);
//                 bucket.push(min);
//             }
//             bucket.push(0);
//         }
//     }
//
//     return bucket;
// }

function solution2(str, s) {
    const answer = [];
    let temp = 0;
    for (let v of str) {
        if (v === s) {
            temp = 0;
            answer.push(0)
        } else {
            temp ++;
            answer.push(temp)
        }
    }
    console.log(answer)
    temp = 0
    for (let idx in str) {
        const reverse = str.length - 1 -idx;
        if(str[reverse] === s) temp = 0;
        else {
            temp ++;
            answer[reverse] = Math.min(answer[reverse], temp);
        }
    }
    return answer;
}

console.log(solution2('teachermode', 'e'))
// console.log(solution('teachermode', 'e'))
console.log(solution2('eaeabe', 'e'))
