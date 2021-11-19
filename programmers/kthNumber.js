function solution(array, commands) {
    let answer = [];

    for(const value of commands) {
        const copy = array.slice();
        const temp = copy.slice(value[0] - 1, value[1]).sort((a, b) => a - b);
        answer.push(temp[value[2] - 1]);
    }

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4]	, [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	))
