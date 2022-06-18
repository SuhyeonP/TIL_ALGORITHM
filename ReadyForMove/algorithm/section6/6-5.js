// ()(((()())(())()))(()) -  17
// (((()(()()))(())()))(()())  -24

console.log(solution('()(((()())(())()))(())'))
console.log(solution('(((()(()()))(())()))(()())'))
console.log(solution2('()(((()())(())()))(())'))
console.log(solution2('(((()(()()))(())()))(()())'))

function solution2(str) {
    let answer = 0;
    const stack = [];

    for(let i = 0;i < str.length; i++) {
        const value = str[i];

        if(value === '(') stack.push(value);
        else {
            stack.pop();
            if(str[i - 1] === '(') {
                answer += stack.length;
            } else {
                // 막대기 끝이라서
                answer ++;
            }
        }
    }
    return answer;
}

//이해하고 풀어본거
function solution(str) {
    let answer = 0;
    const stack = [];

    for(let i = 0; i < str.length; i++) {
        const ele = str[i];

        if(ele === '(') stack.push(ele);
        else {
            stack.pop();
            if(str[i - 1] === '(') answer += stack.length;
            else answer ++;
        }
    }

    return answer;
}
