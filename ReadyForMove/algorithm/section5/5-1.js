//오름차순으로 정렬이 된 두 배열이 주어지면
// 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
// [[1,3,5],[2,3,6,7,9]]

function solution(arr) {
    const merge = [];

    arr.forEach((ele) => {
        ele.forEach((a) => {
            merge.push((a))
        })
    })

    return merge.sort((a, b) => a - b);
}

function solution2(arr1, arr2) {
    const l1 = arr1.length;
    const l2 = arr2.length;

    const answer = [];

    const c1 = arr1.sort((a, b) => a - b);
    const c2 = arr2.sort((a, b) => a - b);

    let x = 0;
    let y = 0;

    while (x < l1 && y < l2) {
        if (c1[x] <= c2[y]) answer.push(c1[x++]);
        else answer.push(c2[y++]);
    }

    while (x < l1) answer.push(c1[x++]);
    while (y < l2) answer.push(c2[y++]);

    return answer;
}

console.log(solution([[1,3,5],[2,3,6,7,9]]))
console.log(solution2([1,3,5],[2,3,6,7,9]))
