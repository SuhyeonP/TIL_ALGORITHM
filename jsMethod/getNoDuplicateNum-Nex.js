function solution(start, end) {
    let answer = end - start + 1;
    let arrays = new Array(end - start + 1).fill(start);
    arrays = arrays.map((ele, idx) => (ele + idx).toString().split('').sort((a, b) => a - b));

    arrays.forEach((ele) => {
        ele = ele.filter((arr, idx) => arr === ele[idx + 1]);
        if(ele.length > 0) {
            answer --;
        }
    });

    return answer;
}

console.log(solution(80, 120))
console.log(solution(9, 19))
console.log(solution(1,20))
