// 입력된 괄호가 올바르면 "yes" 아니면 "no"를 출력하시오.
function solution (bucket) {
    const open = [];

    for(let ele of bucket) {
        if(ele === "(") {
            open.push(ele);
        } else {
            if(open.length === 0) {
                return "NO";
            }
            open.pop();
        }
    }
    if(open.length > 0) return "NO";
    return 'YES'
}

console.log(solution('(()(()))(()'))
console.log(solution('(()()))'))
console.log(solution('(())()'))
