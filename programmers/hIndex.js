function solution(citations) {
    const copy = citations.sort((a, b) => b - a);

    let i = 0;

    while (i + 1 <= copy[i]) {
        i ++;
    }

    return i;
}


console.log(solution([3,0,6,1,5]))
