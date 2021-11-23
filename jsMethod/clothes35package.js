function solution(clothes) {
    if(clothes % 5 === 0) {
        return clothes / 5;
    } else if(clothes === 7) {
        return -1;
    }

    let check = clothes % 5;
    let divide5 = Math.floor(clothes/5) - check;
    let get3 = (clothes - divide5 * 5) / 3;

    return divide5 + get3;
}

console.log(solution(26));
console.log(solution(127));
console.log(solution(15));
console.log(solution(7));
