//[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열 [1,5,3,5,1,2,1,4]

function solution(boards, moves) {
    const bucket = [];
    let answer = 0;
    const copy = boards.slice();
    for(let ele of moves) {
        const value = ele - 1;

        for(let i = 0; i < boards.length; i++) {
            const doll = copy[i][value];
            if(doll === 0) continue;
            copy[i][value] = 0;

            if (bucket.length > 0) {
                const pop = bucket[bucket.length - 1];
                if (pop === doll) {
                    bucket.pop();
                    answer += 2;
                    break;
                } else {
                    bucket.push(doll);
                    break;
                }
            } else {
                bucket.push(doll);
                break;
            }
        }
    }

    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))
console.log([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]])
