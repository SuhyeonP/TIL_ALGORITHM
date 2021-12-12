function solution(gems) {
    const kind = new Set(gems).size;

    const indexes = [];
    const gemMap = new Map();

    gems.forEach((gem, idx) => {
        gemMap.delete(gem);
        gemMap.set(gem, idx + 1);
        if (gemMap.size === kind) {
            indexes.push([gemMap.values().next().value, idx + 1]);
        }
    })

    return indexes.sort((a, b) => {
        if ((a[1] - a[0]) === (b[1] - b[0])) {
            return a[1] - b[1];
        } else {
            return (a[1] - a[0]) - (b[1] - b[0]);
        }
    })[0]

}


// console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))
console.log(solution(["AA", "AB", "AC", "AA", "AC"]))
