// function solution(price, money, count) {
//     let need = allAdd(count) * price;
//
//     return  money - need >= 0 ? 0 : Math.abs(money  - need);
// }
//
// function allAdd(num) {
//     return (num + 1) * (num/2)
// }

function solution(price, money, count) {
    const lost = money - (price * (count * (count + 1)) / 2);

    return lost > 0 ? 0 : Math.abs(lost);
}

console.log(solution(3,20,4))

console.log(solution(3,20,4))

// https://programmers.co.kr/learn/courses/30/lessons/82612
