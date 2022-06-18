//N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
// 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
//1 2 3 -3 -2 5 6 -6 => -3 -2 -6 1 2 3 5 6
function solution2(arr) {
    const length = arr.length;

    for(let i = 0; i < length - 1; i++) {
        for(let j = 0; j < length - 1 - i; j++) {
            if(arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr;
}

console.log(solution2([1, 2, 3, -3, -2, 5, 6, -6]))
console.log(solution2sub([1, 2, 3, -3, -2, 5, 6, -6]))
function solution2sub(arr) {
    const answer = [];

    for(let ele of arr) {
        if(ele < 0) {
            answer.push(ele);
        }
    }
    for(let ele of arr) {
        if(ele > 0) {
            answer.push(ele)
        }
    }
    return answer;
}

console.log(solution2([1,2,3,-3,-2,5,6,-6]))
