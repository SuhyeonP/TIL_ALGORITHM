// abcabcdefabc -> def

function solution(str) {
    const check = new Map();
    const size = str.length;

    for(let i = 0; i < size; i++) {
        let now = str[i];
        check.set(now, check.has(now) ? check.get(now) + 1 : 1);
        for (let j = i + 1; j < size; j++) {
            now += str[j];
            check.set(now, check.has(now) ? check.get(now) + 1 : 1);
        }
    }
    const copy = [...check];
    copy.sort((a, b) => b[1] - a[1])
    let maxCount = copy[0][1];
    const maxDup = copy.filter((ele) => ele[1] === maxCount).map((ele) => ele[0]).sort((a, b) => b.length - a.length);
    const maxLength = maxDup[0].length;
    const checkWord = maxDup.filter((ele) => ele.length === maxLength);

    for(let word of checkWord) {
        for(let i = 0; i < maxCount; i++) {
            str = str.replace(word, '');
        }
    }
    return str;
}

console.log(solution('abcabcdefabc'))
console.log(solution('abxdeydeabz'))
