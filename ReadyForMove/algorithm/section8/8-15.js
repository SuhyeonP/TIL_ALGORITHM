function solution(arr, k, b) {
    const answer = new Set();
    const temp = Array.from({length: arr.length}, () => 0);

    function DFS(idx, sum) {
        if (idx === arr.length) return;
        if (sum/b === Math.floor(sum / b) && sum !== 0) {
            answer.add(sum)
        } else {
            temp[idx] = 1;
            DFS(idx + 1, sum + arr[idx]);
            temp[idx] = 0;
            DFS(idx + 1, sum);
        }
    }
    DFS(0,0);
    return answer.size;
}

console.log(solution([2,4,5,8,12], 3, 6))
console.log(solution2([2,4,5,8,12], 3, 6))
console.log(solution2sub([2,4,5,8,12], 3, 6))


function solution2(arr, k, b) {
    let answer = 0;
    function DFS(idx, s, sum) {
        if (idx === k) {
            if (sum % b === 0) {
                answer ++;
            }
        } else {
            for(let i = s; i < arr.length; i++) {
                DFS(idx + 1, i + 1, sum + arr[i])
            }
        }
    }
    DFS(0,0,0);

    return answer;
}

function solution2sub(arr, k, b) {
    let answer = 0;

    function DFS(idx, s, sum) {
        if (idx === k) {
            if(sum % b === 0) answer ++;
        } else {
            for (let i = s; i < arr.length; i++) {
                DFS(idx + 1, i + 1, sum + arr[i])
            }
        }
    }
    DFS(0,0,0)
    return answer;
}
