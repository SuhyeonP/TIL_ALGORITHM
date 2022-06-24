// 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
// 현수의 위치와 송아 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지
// 다음 과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다.
// 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
// 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요.

// 5, 14 => 3
// 8, 3 => 5

function solution(now, cow) {
    const check = Array.from({length: 10001}, () => 0);
    const queue = [];
    queue.push(now);
    const go = [-1 , 1, 5];
    while (queue.length) {
        let temp = queue.shift();
        if (temp === cow) {
            break;
        } else {
            for (let i = 0; i < go.length; i++) {
                const dis = go[i] + temp;
                if (check[dis] === 0) {
                    check[dis] = check[temp] + 1;
                    queue.push(dis);
                }
            }
            check[temp] = 1;
        }
    }

    return check[cow];
}

console.log(solution(5, 14))
console.log(solution(8, 3))
console.log(solution2(5, 14))
console.log(solution2(8, 3))

function solution2(now, cow) {
    const check = Array.from({length: 10001}, () => 0);
    const dis = Array.from({length: 10001}, () => 0);
    const queue = [];

    queue.push(now);
    check[now] = 1;

    while (queue.length) {
        const temp = queue.shift();
        for (let next of [temp - 1, temp + 1, temp + 5]) {
            if (next === cow) return dis[temp] + 1;
            if(next > 0 && next <= 10000 && check[next] === 0) {
                check[next] = 1;
                queue.push(next);
                dis[next] = dis[temp] + 1;
            }
        }
    }

    return dis[cow];
}
console.log(solution2Sub(5, 14))
console.log(solution2Sub(8, 3))

function solution2Sub(now, cow) {
    const check = Array.from({length: 10001}, () => 0);
    const queue = [];
    queue.push(now);
    check[now] = 1;

    let level = 0;
    while (queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const temp = queue.shift();
            for(let next of [temp - 1, temp + 1, temp + 5]) {
                if(next === cow) return level + 1;
                if (0 <= next && next <= 10000 && check[next] === 0) {
                    check[next] = 1;
                    queue.push(next);
                }
            }
        }
        level++;
    }
}
