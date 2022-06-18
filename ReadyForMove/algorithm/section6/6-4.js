// 352+*9-        12
//후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(str) {
    const numbers = str.match(/\d/g);
    const origin = str.match(/\D/g);
    const solve = origin.slice().sort();
    console.log(numbers)
    console.log(origin)
    console.log(solve)
    const bucket = [];
    let p = 0;
    let q = 0;

    let flag = 'open';
    while (p < numbers.length && q < solve.length) {
        bucket.push(Number(numbers[p++]));
        bucket.push(solve[q++]);
    }
    while (p < numbers.length) bucket.push(Number(numbers[p++]));
    while (q < solve.length) bucket.push(solve[q++]);
    console.log(bucket)


}

console.log(solution("352+*9-"))
console.log(solution2("352+*9-"))

function solution2(str) {
    const stack = [];

    let lt = 0;
    let rt = 0;
    for(let ele of str) {
        if(!isNaN(Number(ele))) {
            stack.push(Number(ele))
        } else {
            rt = stack.pop();
            lt = stack.pop();
            if(ele === '*') {
                lt *= rt;
                stack.push(lt);
            } else if (ele === '/') {
                lt /= rt;
                stack.push(lt);
            } else if(ele === '+') {
                lt += rt;
                stack.push(lt);
            } else {
                lt-= rt;
                stack.push(lt);
            }
        }
    }

    return stack[0];
}
