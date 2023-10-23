//후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면
// 352+*9- 로 표현되며 그 결과는 12입니다.
// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다.
// 연산식의 길이는 50을 넘지 않습니다.
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

// ▣ 출력설명
// 연산한 결과를 출력합니다.

// ▣ 입력예제 1
// 352+*9-
// ▣ 출력예제 1
// 12

function solution(str) {
    const stack = [];

    let lt = 0;
    let rt = 0;

    for(let ele of str) {
        if(!isNaN(Number(ele))) {
            stack.push(Number(ele))
        } else {
            rt = stack.pop()
            lt = stack.pop();
            if(ele === '*') {
                lt *= rt;
            } else if(ele === '/') {
                lt /= rt;
            } else if(ele ==='+') {
                lt += rt;
            } else {
                lt -= rt;
            }

            stack.push(lt)
        }
    }
    return stack[0];
}