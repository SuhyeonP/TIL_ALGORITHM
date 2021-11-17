function sliceWord(word, idx) {
    const splitWord = word.split('');
    splitWord.splice(idx, 1);
    return splitWord.join('');
}

function solution(begin, target, words) {
    if(words.indexOf(target) === -1) return 0;

    let answer = 0;

    const visited = new Set();

    let temp = [];
    const queue = [];

    queue.push(begin);

    while (queue.length) {
        const now = queue.shift();
        visited.add(now);
        console.log(now);

        if (now === target) {
            return answer;
        }

        for (let i = 0; i < now.length; i ++) {
            const letter = sliceWord(now, i);
            const filtering = words.filter((word) => !visited.has(word) && sliceWord(word, i) === letter);
            temp.push(...filtering);
        }

        if (queue.length < 1) {
            answer ++;
            queue.push(...temp);
            temp = [];
        }
    }
    return answer;
}

console.log(solution('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));
