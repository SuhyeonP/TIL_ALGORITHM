function counting (n) {
    return Math.pow(2, n) - 1;
}

function solution (num) {
    const binaryNum = num.toString(2);
    const length = binaryNum.length;

    if (length === 0) {
        return 0;
    } else if (length === 1) {
        return binaryNum === '0' ? 0 : 1;
    }

    let check = true;
    let answer = counting(length);

    for (let i = 1; i < length; i++) {
        if(binaryNum[i] === '1') {
            if (check) {
                answer -= counting(length - i);
            } else {
                answer += counting(length - i);
            }
            check = !check;
        }
    }

    return answer;
}
