// 철수는 학교에 가는데 개울을 만났습니다.
// 개울은 N개의 돌로 다리를 만들어 놓았습니다.
// 철 수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다. 철수가 개울을 건너는 방법은 몇 가지일까요?

function solution(n) {
    const check = Array.from({length: n + 2}, () => 0);
    check[1] = 1;
    check[2] = 2;

    for(let i = 3; i <= n + 1; i++) {
        check[i] = check[i - 1] + check[i - 2];
    }

    return check[n + 1]
}

console.log(solution(7))
// 7 -> 34

// 1, 2, 3 뛴다면
//function solution(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     if(n === 3) return 4;
//
//     return solution(n - 1) + solution(n - 2) + solution(n - 3);
// }
//
// console.log(solution(6))
