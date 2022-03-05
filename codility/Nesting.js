// Nesting

// 1차  - task 75, correctness 100, performance 50
// function solution(S) {
//     const open = '(';
//     const close = ')';
//
//     if(S[0] === close) {
//         return 0;
//     }
//     const queue = [];
//     const split = S.split('');
//
//     while (split.length) {
//         const temp = split.shift();
//         if (temp === open) {
//             queue.push(temp);
//         } else {
//             if(queue.length > 0) {
//                 queue.pop();
//             } else {
//                 return 0;
//             }
//         }
//     }
//
//
//     return queue.length === 0 ? 1 : 0;
// }


// 2차시도 올 100 , 반복문으로 도는것보다 for 문으로 스트링에서 하나하나 넘겨가는게 더 효율적인듯
function solution(S) {
    const open = '(';
    const close = ')';

    if(S[0] === close) {
        return 0;
    }
    const queue = [];

    for (let i = 0; i < S.length; i++) {
        const temp = S[i];
        if (temp === open) {
            queue.push(temp);
        } else {
            if(queue.length > 0) {
                queue.pop();
            } else {
                return 0;
            }
        }
    }


    return queue.length === 0 ? 1 : 0;
}

console.log(solution('(()(())())'))
