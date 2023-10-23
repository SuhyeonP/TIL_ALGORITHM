
// 1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한,
// 모든 ‘( ) ’는 반 드시 레이저를 표현한다.
// 2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다.
// 쇠막대기는 레이저에 의해 몇 개의 조각으로 잘려지는데,
// 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘려지고,
// 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘려진다.
//     쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때,
//     잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램을 작성하시오.

// input:  ()(((()())(())()))(()), output: 17
// input: (((()(()()))(())()))(()()), output: 24

function solution(str) {
    let answer = 0;
    const stack = [];

    for(let i = 1; i < str.length; i++) {
        const now = str[i];
        if (str[i] === ')') {
            stack.pop();
            if (str[i - 1] === '(') {
                answer += stack.length;
            } else {
                answer += 1;
            }
        } else {
            stack.push(now);
        }
    }


    return answer;
}

console.log(solution('()(((()())(())()))(())'))
console.log(solution(' (((()(()()))(())()))(()())'))