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
console.log(solution2('bacaAacba', 'abc'));

function compare(m1, m2) {
    if(m1.size !== m2.size) return false;
    for(let [key, value] of m1) {
        if(!m2.has(key) || m2.get(key) !== value) return false
    }
    return true;
}

function solution2(v1, v2) {
    const map1 = new Map();
    const map2 = new Map();
    let answer = 0;

    const length1 = v1.length;
    const length2 = v2.length;
    for(let i = 0; i < length2 - 1; i++) {
        const value = v2[i];
        map1.set(value, map1.has(value) ? map1.get(value) + 1 : 1);
    }

    for(let ele of v2) {
        map2.set(ele, map2.has(ele) ? map2.get(ele) + 1 : 1);
    }
    let lt = 0;

    for(let i = length2 - 1; i < length1; i++) {
        const value = v1[i];

        map1.set(value, map1.has(value) ? map1.get(value) + 1 : 1);

        if(compare(map1, map2)) answer++;
        const except = v1[lt++];
        map1.set(except, map1.get(except) - 1);
        if(map1.get(except) === 0) map1.delete(except)
    }

    return answer;
}
