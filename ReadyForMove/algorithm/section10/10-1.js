//철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다. 만약 총 4계단을 오른다면 그 방법의 수는
// 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 로 5가지이다.
// 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?

// 7 -> 21

function solution (height) {
    if (height === 1) {
        return 1;
    } else if(height === 2) {
        return 2;
    }

    return solution(height - 1) + solution(height - 2);
}

console.log(solution(4))
console.log(solution(7))
console.log(solution2(4))
console.log(solution2(7))

function solution2(height) {
    const dy = Array.from({length: height + 1}, () => 0);
    dy[1] = 1;
    dy[2] = 2;

    for(let i = 3; i <= height; i++) {
        dy[i] = dy[i  - 1] + dy[i - 2];
    }

    return dy[height];
}
