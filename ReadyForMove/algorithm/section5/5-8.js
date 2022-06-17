//S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// bacaAacba abc - 3

function solution(s1, s2) {
    const split1 = s1.split('');
    const split2 = s2.split('');
    const searchLength = s2.length;
    const length = s1.length;
    let answer = 0;

    if (searchLength === length) {
        return split1.sort().join('') === split2.sort().join('') ? 1 : 0;
    }

    for(let i = 0; i <= length - searchLength; i++) {
        const compare = split1.slice(i, i + searchLength).sort().join('');
        if (compare === split2.sort().join('')) answer ++;
    }
    return answer;
}

console.log(solution('bacaAacba', 'abc'))
