//괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

function solution(str) {
    if(str[0] === ')' || str[str.length - 1] === '(' || str.length % 2 === 1) return 'NO';
    const copy = str.split('')
    const bucket = [];
    bucket.push(copy.shift());


    while(copy.length > 0) {
        const temp = copy.shift();
        if(temp === ')') {
            if(bucket.length === 0) return 'NO';
            bucket.pop();
        } else {
            bucket.push(temp);
        }
    }

    return bucket.length > 0 ? 'NO' : 'YES';
}

console.log(solution('(()(()))(()'))
console.log(solution('(()()))'))
console.log(solution('(())()'))

function solution2(str) {
    let answer = 'YES';

    const stack = [];

    for(let ele of str) {
        if(ele === '(') stack.push(ele);
        else {
            if(stack.length === 0) return 'NO';
            stack.pop();
        }
    }
    if(stack.length > 0) return 'NO';
    return answer;
}

console.log(solution2('(()(()))(()'))
console.log(solution2('(()()))'))
console.log(solution2('(())()'))

