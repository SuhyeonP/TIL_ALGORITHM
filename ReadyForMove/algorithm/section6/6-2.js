//입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고
// 남은 문자만 출력하는 프로그램을 작성하세요.

// (A(BC)D)EF(G(H)(IJ)K)LM(N) = EFLM

function solution(str) {
    let answer = '';

    const bucket = [];

    for(let ele of str) {
        if(ele === '(') {
            bucket.push(ele)
        } else if (ele === ')') {
            bucket.pop();
        } else {
            if(bucket.length === 0) {
                answer += ele;
            }
        }
    }

    return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))
console.log(solution2('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))

function solution2(str) {
    const stack = [];

    for(let ele of str) {
        if(ele === ')') while(stack.pop() !== ')'){}
        else stack.push(ele)
    }
    return stack.join('')
}
