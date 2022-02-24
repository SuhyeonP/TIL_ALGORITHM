function solution(S) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    const openQueue = [];

    for(const ele of S) {
        // 배열로 split 해서 하니 시간 복잡도가 커짐
        if (close.includes(ele)) {
            if(openQueue.length === 0) {
                return 0;
            } else {
                if(close.indexOf(ele) !== open.indexOf(openQueue.pop())) {
                    return 0;
                }
            }
        } else {
            openQueue.push(ele)
        }
    }


    return openQueue.length > 0 ? 0 : 1;
}

console.log(solution( "{[()()]}"))
console.log(solution(  "([)()]" ))
