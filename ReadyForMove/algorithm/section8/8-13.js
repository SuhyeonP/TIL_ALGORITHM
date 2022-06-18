function combination(n, r) {
    if (n === r || r === 0) return 1;
    else return combination(n - 1, r) + combination(n - 1, r - 1);
}

function solution2(height, under) {
    let answer;
    let flag = 0;

    const ch = Array.from({length: height + 1}, () => 0);

    const p = Array.from({length: height}, () => 0);
    const b = Array.from({length: height}, () => 0);

    function DFS(idx, sum) {
        if (flag) return;
        if (idx === height && sum === under) {
            answer = p.slice();
            flag = 1;
        } else {
            for(let i = 1; i <= height; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    p[idx] = i;
                    DFS(idx + 1, sum + (b[idx] * p[idx]));
                    ch[i] = 0;
                }
            }
        }
    }

    for(let i = 0; i < height; i++) {
        b[i] = combination(height - 1, i);
    }

    // 0,1,2,3 위치에 잇을경우 0에 해당하는 숫자의 개수들이 배열이 됨

    DFS(0,0);
    return answer;
}

console.log(solution2(4,16))
console.log(solution(4,16))

function solution(height, under) {
    let answer;
    let flag = 0;

    const check = Array.from({length: height + 1}, () => 0);
    const bucket = Array.from({length: height}, () => 0);
    let time = Array.from({length: height}, () => 0);

    for(let i = 0; i < height; i++) {
        time[i] = combination(height - 1, i);
    }

    function DFS(idx, sum) {
        if (flag) return;
        if(sum === under && idx === height) {
            answer = bucket.slice();
            flag = 1;
        } else {
            for (let i = 1; i <= height; i++) {
                if(check[i] === 0) {
                    check[i] = 1;
                    bucket[idx] = i;
                    DFS(idx + 1, sum + (time[idx] * bucket[idx]));
                    check[i] = 0;
                }
            }
        }
    }

    DFS(0,0)
    return answer;
}
