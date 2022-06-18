//N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬하는 방법은 삽입정렬입니다.

// 11 7 5 6 10 9 -> 5 6 7 9 10 11
console.log(solution2([11, 7, 5, 6, 10, 9]))

function solution2(arr) {
    const length = arr.length;

    for(let i = 1; i < length; i++) {
        const temp = arr[i];
        let j = 0;
        for(j = i - 1; j >= 0; j --) {
            if(arr[j] > temp) arr[j + 1] = arr[j];
            else break;
        }
        arr[j + 1] = temp;
    }

    return arr;
}

//function solution(arr) {
//     const length = arr.length;
//     for(let i = 1; i < length; i++) {
//         for(let j = 0; j < i; j++) {
//             if(arr[j] > arr[i]) {
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(solution([11,7,5,6,10,9])) 틀림
