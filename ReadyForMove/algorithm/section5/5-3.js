//N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

function solution(n, nums) {
    const length = nums.length;
    let answer = 0;
    for (let i = 0; i < length; i++) {
        let add = nums[i];
        const copy = nums.slice(i + 1, length);

        for (let j = 0; j < copy.length; j++) {
            add += copy[j];
            if(add > n) break;
            if(add === n) {
                answer++;
                break;
            }
        }
    }
    return answer;
}

console.log(solution(6, [1,2,1,3,1,1,1,2]))
console.log(solution2(6, [1,2,1,3,1,1,1,2]))


function solution2(value, arr) {
    let answer = 0;
    let sum = 0;
    let lt = 0;

    for(let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];

        if (sum === value) {
            answer ++;
        }
        while (sum >= value) {
            sum -= arr[lt++];
            // 여기서 값 계산하니까 중복 안들어간다
            if(sum === value) {
                answer++;
            }
        }
    }

    return answer;
}
console.log(solR(6, [1,2,1,3,1,1,1,2]))

function solR(amount, arr) {
    const size = arr.length;
    let lt = 0;
    let answer = 0;
    let sum = 0;
    for (let rt = 0; rt < size; rt++) {
        sum += arr[rt];

        if (sum === amount) answer ++;

        while (sum >= amount) {
            sum -= arr[lt++];
            if(sum === amount) answer++;
        }
    }

    return answer;
}
