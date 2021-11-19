

function solution(numbers, target) {
    let answer = 0;
    const dfs = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) {
                answer ++;
            }
            return;
        }

        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }

    dfs(0,0);
    return answer;
}

let ex1 = [1, 1, 1, 1, 1];

// console.log(solution(ex1, 3))
console.log(solution([1,1,2,1], 3))