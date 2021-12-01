function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for(let i = 0; i < n.length; i++) {
        for(let j = i + 1; j <n.length; j++) {
            for (let k = j + 1; k < n.length; k ++) {
                const temp = n[i] + n[j] + n[k];
                if(isPrime(temp)) {
                    answer ++;
                }
            }
        }
    }
    return answer;
}
console.log(solution([1,2,3,4,5,6]))
