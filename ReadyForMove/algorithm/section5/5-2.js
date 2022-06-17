//A, B 두 개의 집합이 주어지면
// 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.
// [[1,3,9,5,2],[3,2,5,7,8]]

function solution(arr) {
    const answer = [];

    for(let i = 0; i < arr[0].length; i++) {
        const idx = arr[1].indexOf(arr[0][i]);
        if(idx !== -1) {
            answer.push(arr[0][i])
        }
    }

    return answer.sort((a, b) => a - b);
}

function solutionSub(arr) {
    const merge = arr[0].concat(arr[1]).sort((a, b) => a - b);

    return merge.filter((ele, idx) => ele === merge[idx + 1]);
}

console.log(solution([[1,3,9,5,2],[3,2,5,7,8]]))
console.log(solutionSub([[1,3,9,5,2],[3,2,5,7,8]]))
