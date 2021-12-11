function getDivide(n) {
    const answer = [];
    for(let i = 2; i <= n; i++) {
        if(n%i === 0) {
            answer.push(i)
        }
    }
    return answer;
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    let divisor = 3;
    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        }
        divisor += 2;
    }
    return true;
}

function solution(n) {
    const divide = getDivide(n);
    let answer = 0;

    if (divide.some(ele => isPrime(ele))) {
        for(let i = 0; i < divide.length; i++) {
            if(isPrime(divide[i])){
                answer = divide[i];
                break;
            }
        }
        return answer !== n ? answer : 1;
    } else {
        return 1;
    }
}

console.log(solution(24))
console.log(solution(2))
console.log(solution(4))
