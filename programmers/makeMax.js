function solution(str) {
    const steps = [
        ['*','+','-'],
        ['*','-','+'],
        ['+','*','-'],
        ['+','-','*'],
        ['-','+','*'],
        ['-','*','+']
    ];
    const computation = {
        '+': (a, b) => a + b + "",
        '-': (a, b) => a - b + "",
        '*': (a, b) => a * b + "",
    }

    return steps.reduce((max, ops) => {
        // max는 처음 비교하는 숫자 , ops 는 현재 해당 하는 element
        let temp = str;
        ops.forEach(op => {

            // /\w 는 \\w 로 바꿔술수있다 (정규표현식에서)
            //   /\d+\d 이건 숫자 + 숫자 패턴의 문자열과 매칭된다. => 123+123 => [123,123]
            // 여기서 생각해야할것은 음수가 잇는데 \-?/\d+\+-?\d+  -? 는 -가 0또는 1회 등장하는 부분과 대응한다.
            // (?<!y)x 는 x 앞에 y가 없는 경우에만 x 에 일치한다. (?<!\d)- 로 앞숫자가 아닌 - 에만 대응 하도록 햇다.
            const regex = new RegExp('(?<!\\d)(-?\\d+)\\' + op + '(-?\\d+)');
            while(regex.test(temp)) {
                // 설정한 정규식에 대응하는 문자열을 모두 찾을 때까지 반복
                // 일치시 replace 를 통해 수식을 계산한 결과값으로 바꿔줌
                temp = temp.replace(regex, (match, p1, p2) => {
                    // match 는 정규식에 해당해서 매칭되는 string p1은 첫숫자, p2 는 두번째숫자
                    return computation[op](Number(p1), Number(p2))
                });

                // p1, p2 는 /(\a+)(\b+)/ 이 주어진다면 p1 은 \a+ 와 ,   p2 는 \b+ 와 매치된다.
            }
        })
        return Math.abs(temp) > max ? Math.abs(temp) : max;
    }, 0)
}

console.log(solution("100-200*300-500+20"))
let t = "100-200*300-500+20";
t.split('')
console.log('123+-132'.match(/(?<!\d)(-?\d+)/g))
console.log('123+-132'.match( /\d+\d+/g))
//https://after-newmoon.tistory.com/97