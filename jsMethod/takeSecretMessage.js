function solution(m, k) {
    let answer = '';
    m = m.split('');
    k = k.split('');
    while(m.length > 0) {
        const key = k[0];
        const message = m.shift();

        if(key !== message) {
            answer += message;
        } else {
            k.shift();
        }
    }
    return answer;
}

console.log(solution('kkaxbycyz','abc'))
console.log(solution('acbbcdc','abc'))
