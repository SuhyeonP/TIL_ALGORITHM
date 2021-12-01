
function solution(blocks) {
    let answer = [];
    let blockArr = new Array(blocks.length).fill();

    for(let i = 0; i < blocks.length; i++) {
        blockArr[i] = new Array(i + 1).fill(null);
        blockArr[i][blocks[i][0]] = blocks[i][1]
    }

    for(let i = 1; i < blocks.length; i++) {
        while(blockArr[i].some(ele => ele === null)){
            for(let j = 0; j < i + 1; j++ ) {
                if(!blockArr[i][j]) {
                    if(j - 1 >=0 && blockArr[i][j-1]) {
                        blockArr[i][j] = blockArr[i-1][j-1] - blockArr[i][j-1];
                    } else if(j + 1 <= i && blockArr[i][j+1]) {
                        blockArr[i][j] = blockArr[i-1][j] - blockArr[i][j+1];
                    }
                }
            }
        }
    }

    blockArr.forEach(ele => {
        answer.push(...ele)
    })

    return answer;
}

console.log(solution([[0,50], [0,22], [2,10],[1,4],[4,-13]]))
console.log(solution([[0,92], [1,20], [2,11],[1,-81],[3,98]]))
