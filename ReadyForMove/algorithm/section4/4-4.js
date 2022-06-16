//선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라
// 그 상품의 가격과 배송비를 제출하라 고 했습니다.
// 선생님이 가지고 있는 예산은 한정되어 있습니다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
// 배송비는 할인에 포함되지 않습니다.

// 28, [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]
// 4


function solution(value, present) {
    const saleValue = present.map((ele) => ele[0] / 2 + ele[1]);
    const originValue = present.map((ele) => ele[0] + ele[1]);
    const maxGap = originValue.map((ele, idx) => ele - saleValue[idx]);
    const maxIdx = maxGap.indexOf(Math.max(...maxGap));

    present[maxIdx] = [present[maxIdx][0] / 2, present[maxIdx][1]];

    present.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    let count = 0;
    for (let i = 0; i < present.length; i++) {
        const sum = present[i][0] + present[i][1];
        const sub = value - sum;

        if(sub > 0) {
            count++;
            value -= sum;
        } else if(sub === 0) {
            count ++;
            break;
        } else break;
    }

    return count;
}


function solution2(m, product) {
    let answer = 0;
    const length = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    for(let i = 0; i < length; i++) {
        let money = m - ((product[i][0] / 2) + product[i][1]);
        let cnt = 1;

        for(let j = 0; j < length; j++) {
            if (i === j) continue;
            if (product[j][0] + product[j][1] <= money) {
                money -= product[j][0] + product[j][1];
                cnt ++;
            } else break;
        }
        answer = Math.max(cnt, answer);
    }

    return answer;
}
console.log(solution(28, [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]))
