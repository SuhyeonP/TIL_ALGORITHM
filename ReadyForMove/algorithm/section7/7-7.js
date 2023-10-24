//N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요.
// 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

// function solution(arr) {
//     const len = arr.length;
//     for (let i = 1; i < len; i++) {
//         let j = 0;
//         const temp = arr[i];
//
//         for(j = i - 1; j >= 0; j--) {
//             if(arr[j][0] > temp[0]) {
//                 arr[j+1] = arr[j];
//             } else if(arr[j][0] === temp[0]) {
//                 if(arr[j][1] > temp[1]) {
//                     arr[j+1] = arr[j];
//                 }
//             } else break;
//         }
//         arr[j + 1] = temp;
//     }
//     return arr;
// }
//
// console.log(solution([[2,7], [1,3], [1,2], [2,5], [3,6]]))
// console.log(solution([[9,2],[9,1],[8,1],[3,8]]))

console.log(solution2([[2,7], [1,3], [1,2], [2,5], [3,6]]))
console.log(solution2([[9,2],[9,1],[8,1],[3,8]]))
function solution2(arr) {
    arr.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0]
    })

    return arr;
}
