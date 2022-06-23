function solution() {
    const answer = [];
    const queue = [];

    queue.push(1)

    while (queue.length) {
        console.log(queue)
        let temp = queue.shift();
        answer.push(temp);
        for(let ele of [temp * 2, temp * 2 + 1]) {
            if(ele > 7) continue;
            queue.push(ele);
        }
    }

    return answer;
}

console.log(solution())
function BFS() {
    const answer = [];
    const queue = [];
    queue.push(1);

    while (queue.length) {
        const temp = queue.shift();
        answer.push(temp);
        for(let ele of [temp * 2, temp * 2 + 1]) {
            if(ele > 7) break;
            queue.push(ele)
        }
    }
    return answer;
}

console.log(BFS())
