// function checkPow(n, now, check) {
//     const temp = Math.floor(now/n);
//     if (temp) {
//         check = checkPow(n, temp, check +1);
//     }
//     return check;
// }
//
// function solution(n, t, m, p) {
//     let answer = new Array(t).fill(0).map((_, idx) => idx * m + p - 1);
//     console.log(answer);
//
//     answer.forEach((talk, idx) => {
//         const check = Math.floor(talk/n);
//         const power = checkPow(n, talk, 0);
//         let where = talk % n;
//         if(n <= power) {
//             if(talk % power === 0) {
//                 answer[idx] = 1;
//             }
//             console.log(check, talk, power)
//         } else {
//             answer[idx] = where % 2 === 0 ? check : where;
//         }
//     })
//
//     return answer;
// }

function checkPow(n, now, check) {
    const temp = Math.floor(now/n);
    if (temp) {
        check = checkPow(n, temp, check +1);
    }
    return check;
}

function solution(n, t, m, p) {
    let answer = new Array(t).fill(0).map((_, idx) => idx * m + p - 1);

    let getString = '';

    for(let i = 0; i < m*(t-1) + p; i ++) {
        getString += i.toString(n);
    }

    return answer.map((ele) => getString[ele]).join('').toUpperCase();
}

// 진수, 알아야하는 개수, 사람수, 순서
console.log(solution(2,4,2,1));
console.log(solution(2,4,3,2));
// console.log(solution(16,16,2,1));
// console.log(solution(16,16,2,2));




// 진수, 알아야하는 개수, 사람수, 순서
console.log(solution(2,4,2,1));
console.log(solution(2,4,3,2));
// console.log(solution(16,16,2,1));
// console.log(solution(16,16,2,2));

