//S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// ▣ 입력예제 1
// bacaAacba abc
// ▣ 출력예제 1
// 3

//출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.


function solution (str, target) {
    let answer = 0;

    const targetSize = target.length;
    const targetBucket = new Map();
    const strBucket = new Map();

    for (let ele of target) {
        targetBucket.set(ele, targetBucket.has(ele) ? targetBucket.get(ele) + 1 : 1);
    }

    for (let i = 0; i < targetSize - 1; i++) {
        strBucket.set(str[i], strBucket.has(str[i]) ? strBucket.get(str[i]) + 1 : 1);
    }

    // let left = 0;
    for(let right = targetSize - 1; right < str.length; right++) {
        strBucket.set(str[right], strBucket.has(str[right]) ? strBucket.get(str[right]) + 1 : 1);
        if(checkBucket(targetBucket, strBucket)) answer++;
        const originLeft = str[right - targetSize + 1];
        // const originLeft = str[left ++];
        strBucket.set(originLeft, strBucket.get(originLeft) - 1);
        if(strBucket.get(originLeft) === 0) strBucket.delete(originLeft);
    }

    return answer;
}

console.log(solution('bacaAacba', 'abc'));