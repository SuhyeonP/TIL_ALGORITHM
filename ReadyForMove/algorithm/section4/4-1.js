//N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
// 128 460 603 40 521 137 123
// 137

function add(nums) {
    return nums.reduce((before, now) => before + now, 0);
}

function solution (arr) {
    const bucket = [];

    for (let i = 0; i < arr.length; i++) {
        const stringN = arr[i].toString()
        const split = stringN.split('').map((ele) => parseInt(ele));
        bucket.push([add(split), i])
    }

    const max = Math.max(...bucket.map((ele) => ele[0]));
    const maxArr = bucket.filter((ele) => ele[0] === max).map((ele) => arr[ele[1]]);

    return Math.max(...maxArr);
}

function solution2(nums) {
    let answer, max = -Infinity;

    for (let ele of nums) {
        const sum = ele.toString().split('').reduce((before, now) => before + parseInt(now), 0);
        if (max < sum) {
            answer = ele;
            max = sum
        } else if(max === sum) {
            if(ele > answer) {
                answer = ele;
            }
        }
    }
    return answer;
}

console.log(solution2([128, 460, 603, 40, 521, 137, 123]))



console.log(solution([128, 460, 603, 40, 521, 137, 123]))

function solution3(arr){
    let answer, max = -Infinity;
    for(let ele of arr){
        let sum = 0, tmp = ele;
        while (tmp) {
            sum += Math.floor(tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = ele;
        } else if(sum === max) {
            if (answer < ele) {
                answer = ele;
            }
        }

    }
    return answer;
}

console.log(solution3([128, 460, 603, 40, 521, 137, 123]))
