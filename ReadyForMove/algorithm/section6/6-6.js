function solution(prince, k) {
    const princeQueue = Array.from({length: prince}, (ele, idx) => idx + 1);

    let c = 0;
    while (prince > 1) {
        c++;
        if(c === 3) {
            princeQueue.shift();
            prince --;
            c = 0;
        } else {
            princeQueue.push(princeQueue.shift());
        }
    }

    return princeQueue[0];
}

console.log(solution(8,3))
console.log(solution2(8,3))


function solution2(prince, k) {
    const queue = Array.from({length: prince}, (e, i) => i + 1);
    let answer = 0;
    while (queue.length) {
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
        if(queue.length === 1) answer = queue.shift();
    }
    return answer;
}
