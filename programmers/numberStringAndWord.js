// https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

const ex1 = '2three45sixseven';

function solution (str) {
    let answer = '';
    let word = '';
    for(let i = 0; i < str.length; i++) {
        let temp = str[i];

        if (isNaN(temp)) {
            word += temp;
        } else {
            if(word !== ''){
                answer += checkNumber(word);
                word = '';
            }
            answer += temp;
        }
    }

    return answer;
}


function checkNumber(str){
    console.log(str)
    switch (str){
        case 'zero':
            return 0;
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        default:
            return 0;
    }
}

console.log(solution(ex1));

// todo 문자로 이루어진 숫자가 두개일때에 대한걸 해결 못함

// 다른사람들은 정규식으로 변환하는 방법
// 또 다른사람들은 아래방법

function solution2 (str) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = str;

    for(let i = 0; i < 10; i++ ){
        let arr = answer.split(numbers[i]);
        answer = arr.join([i]);
        // 몇번째자리의 join인지 i 번째에 들어가서 Join됨
    }
    return Number(answer);
}

console.log(solution2(ex1))
