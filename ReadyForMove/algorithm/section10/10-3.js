//N개의 자연수로 이루어진 수열이 주어졌을 때,
// 그 중에서 가장 길게 증가하는(작은 수에서 큰 수로) 원소들의 집합을 찾는 프로그램을 작성하라.
// 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면
// 2, 5, 6, 7, 12를 뽑아내어 길 이가 5인 최대 부분 증가수열을 만들 수 있다.

//[5,3,7,8,6,2,9,4] => 4

function solution2(arr) {
    const size = arr.length;
    const dynamic = Array.from({length: size}, () => 1);

    for (let i = 1; i < size; i++) {
        const max = []
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                max.push(dynamic[j]);
            }
        }
        if(max.length > 0) dynamic[i] += Math.max(...max);
    }
    return Math.max(...dynamic)
}

console.log(solution2([5,3,7,8,6,2,9,4]))
console.log(solution2([2,7,5,8,6,4,7,12,3]))



console.log(solution([5,3,7,8,6,2,9,4]))
console.log(solution([2,7,5,8,6,4,7,12,3]))

function solution(arr) {
    const size = arr.length;
    const dynamic = Array.from({length: size}, () => 1);

    for (let i = 1; i < size; i++) {
        const max = []
        for (let j = i - 1; j >= 0; j--) {
            if(arr[j] < arr[i]) max.push(dynamic[j]);
        }
        if(max.length > 0) dynamic[i] += Math.max(...max);
    }

    return Math.max(...dynamic);
}

console.log(solution2Real([5,3,7,8,6,2,9,4]))
console.log(solution2Real([2,7,5,8,6,4,7,12,3]))

function solution2Real(arr) {
    const size = arr.length;
    const dynamic = Array.from({length: size}, () => 0);
    let answer = 0;
    dynamic[0] = 1;

    for(let i = 1; i < size; i++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if(arr[j] < arr[i] && dynamic[j] > max) max = dynamic[j];
        }
        dynamic[i] = max + 1;
        answer = Math.max(answer, dynamic[i]);
    }
    return answer;
}
