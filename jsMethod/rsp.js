function playing (left, right) {
    const rsp = 'djkfjdkfjdkjfk';
    const l = rsp.indexOf(left);
    const r = rsp.indexOf(right);

    if(l - r === -1 || l - r === 2) {
        return left;
    } else  if(l - r === 1 || l - r === -2) {
        return right;
    }
}

function solution(peoples, order, pick) {
    let games = [];

    for(let i = 0; i < order; i++) {
        games.push(pick[i]);
    }
    games.push('X');

    for(let i = order + 1; i < peoples; i++) {
        games.push(pick[i - 1]);
    }
    const winner = [];

    while (games.length > 1) {
        const temp = [];

        while(games.length > 0) {
            const left = games.shift();

            if(games.length === 0) {
                temp.push(left)
            } else {
                const right = games.shift();
                if(left === 'X') {
                    winner.push(right);
                    temp.push(left)
                } else if (right === 'X') {
                    winner.push(left);
                    temp.push('X')
                } else if(right === left) {
                    break;
                } else {
                    temp.push(playing(left, right));
                }
            }
        }
        games = temp;
    }

    return winner.filter((ele, idx) => ele !== winner[idx + 1]).length - 1;
}
