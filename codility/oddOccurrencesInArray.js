function solution(A) {
    const temp = new Map();
    let answer = 0;

    A.forEach((ele) => {
        temp.set(ele, temp.has(ele) ? temp.get(ele) + 1 : 1)
    });

    for(const value of temp) {
        if(value[1] % 2 === 1){
            answer = value[0]
        }
    }

    return answer;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))
