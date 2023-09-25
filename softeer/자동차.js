// https://softeer.ai/practice/info.do?idx=1&eid=1717
/////////////////////////////////////////////////////////////////////////////////////////////
// 일부 테스트케이스의 마지막에 개행 문자(\n)가 포함되어 있을 수 있습니다.
// 따라서, 예상치 못한 오답 처리를 방지하기 위해서
// fs모듈을 사용하여 입력을 받을 땐, **반드시** trim()을 사용하여 여백을 제거 하거나
// readline 모듈을 통해 입력을 받으시길 바랍니다.
// 해당 내용을 숙지 하셨다면, 주석을 지우고 문제풀이를 하셔도 무방합니다.
/////////////////////////////////////////////////////////////////////////////////////////////
//
// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// const input = [];
//
// rl.on("line", (line) => {
//     line ? input.push(line) : rl.close();
// }).on("close", () => {
//     const [asks, tempCars, ...tempValues] = input;
//     const cars = tempCars.split(' ').map(Number);
//     const values = [...tempValues].map(Number);
//     const answer = solution(cars, values);
//
//     answer.forEach((ele) => {
//         console.log(ele);
//     })
//
//     process.exit();
// });

// const DIVIDE = 1000000007;

// 시간초과 & 오담 왜?
function solution(cars, asks) {
    let answer = [];
    const sorting = cars.sort((a, b) => a - b);

    asks.forEach((value) => {
        if(value <= Math.min(...sorting) || value >= Math.max(...sorting) || !cars.includes(value)){
            answer.push(0)
        } else {
            const front = sorting.slice(0, sorting.indexOf(value));
            const end = sorting.slice(sorting.indexOf(value) + 1);

            answer.push(front.length * end.length);
        }
    })

    return answer;
}

console.log(solution([5,2,3,1,6],[1,3,6]))
