

function solution(d, budget) {
    d = d.sort((a,b) => a - b);

    while(d.reduce((a, b) => (a+b),0) > budget) {
        d.pop();
    }

    return d.length;
}

console.log(solution([1,3,2,5,4],9))
