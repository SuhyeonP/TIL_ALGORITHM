// 조이스틱
// https://programmers.co.kr/learn/courses/30/lessons/42860

// 아래는 틀린해답 : 반대로 가는 경우를 생각 못함
const solutionWrong = (str) => {
    let answer = 0;
    const splitData = str.split('').map((ele) => Number(ele.charCodeAt(0) - 65));
    const splitData2 = splitData.map(ele => Math.abs(ele - 26));
    for (let i = 0; i < str.length; i++) {
        answer += Math.min(splitData[i], splitData2[i]);
    }

    return answer + str.length - 1;
}

console.log(solutionWrong('JEROEN'))
// console.log(solution('JEROEN'))

function solution (str) {
    const splitData = str.split('').map((ele) => Number(ele.charCodeAt(0) - 65));
    const splitData2 = splitData.map(ele => Math.abs(ele - 26));
    let answer = 0;

    for (let i = 0; i < str.length; i++) {
        answer += Math.min(splitData[i], splitData2[i]);
    }
    let minMove = str.length - 1;

    for (let i = 1; i < str.length; i ++) {
        if (str[i]==='A') {
            for (var j = i + 1; j < str.length; j ++) {
                if (str[j]!=='A') {
                    break;
                }
            }
            const left = i - 1;
            const right = str.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);
            i = j;
        }
    }
    return answer + minMove;
}

console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('ABBABABBA'));
