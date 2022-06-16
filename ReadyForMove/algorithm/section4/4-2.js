//N개의 자연수가 입력되면 각 자연수를 뒤집은 후
// 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다.
// 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다.
// 첫 자리부터의 연속된 0은 무시한다.

// 32 55 62 20 250 370 200 30 100
// 23 2 73 2 3 -answer

function getSosu(num) {
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }

    return num > 1;
}

function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(arr) {
    const reverse = arr.map((ele) => parseInt(ele.toString().split('').reverse().join(''))).filter((ele) => isPrime(ele));

    return reverse;
}

function solution2(arr) {
    const answer = [];

    for(let ele of arr) {
        let res = 0;
        while (ele) {
            let t = ele % 10;
            res = res * 10 + t;
            ele = Math.floor(ele / 10);
        }
        if(isPrime(res)) answer.push(res);
    }

    return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]))
