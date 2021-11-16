function solution(dolls, move) {
    let stack = [];
    let counting = 0;

    move = move.map((ele)=>ele-1);

    move.forEach((pick) => {
        for (let i = 0; i < dolls.length; i++) {
            let temp = dolls[i][pick];
            if(temp === 0) {
                continue;
            } else {
                if (stack.length > 0) {
                    const pop = stack.pop();
                    if (pop !== temp) {
                        stack.push(pop);
                        stack.push(temp);
                    } else {
                        counting +=2;
                    }
                } else {
                    stack.push(temp);
                }
                dolls[i][pick] = 0;
                break;
            }
        }
    })

    return counting;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))
