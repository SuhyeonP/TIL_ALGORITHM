function makeWord(time, meter, direction) {
    return `Time ${time}: Go straight ${meter}m and turn ${direction}`;
}

function solution(str) {
    const answer = [];
    const lotate = {
        E_S: 'right',
        E_N: 'left',
        S_E: 'left',
        S_W: 'right',
        W_S: 'left',
        W_N: 'right',
        N_E: 'right',
        N_W: 'left',
    }
    const map = str.split('')
    const navi = [];

    let queue = [];
    queue.push(map.shift());
    while(map.length) {
        const last = queue[queue.length - 1];
        const shift = map.shift()
        if (last === shift) {
            queue.push(shift);
        } else {
            navi.push(queue);
            queue = [shift];
        }
    }
    navi.push(queue);

    let now = 0;
    for(let i = 0; i < navi.length - 1; i++) {
        let meter = 0;
        let originTime = now;
        const size = navi[i].length;
        const next = lotate[`${navi[i][0]}_${navi[i + 1][0]}`];
        now += size;
        if (size >= 5) {
            meter = 500;
            originTime = (now - 5)
        } else {
            meter = size * 100;
        }
        answer.push(makeWord(originTime, meter, next))
    }
    return answer;
}

console.log(solution('SSSE'))
console.log(solution('WWWWWWWN'))
