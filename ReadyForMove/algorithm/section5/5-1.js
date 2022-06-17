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

console.log(solution([[1,3,5],[2,3,6,7,9]]))
