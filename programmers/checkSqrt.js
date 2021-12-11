function solution (n) {
    const check = Math.sqrt(n);
    if(check === Math.floor(check)) {
        return Math.pow(check+1, 2);
    } else {
        return -1;
    }
}

console.log(solution(121))
