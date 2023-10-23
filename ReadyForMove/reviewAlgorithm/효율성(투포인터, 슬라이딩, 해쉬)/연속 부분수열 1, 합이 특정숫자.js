// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속 부분 수열의 합이 특정숫자 M이 되는 경우가
// 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 1 2 1 3 1 1 1 2
// 합이 6이 되는 연속부분수열은
// {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
// 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.

// 입력: [1,2,1,3,1,1,1,2]
// 출력: 3



//function solution(arr, sum) {
//     let answer = 0;
//     const length = arr.length;
//
//     let left = 0;
//     let right = 0;
//
//     let nowSum = 0;
//
//     while (left !== length && right !== length) {
//         const addRight = nowSum + arr[right];
//         if (addRight < sum) {
//             nowSum  = addRight;
//             right ++;
//         } else if(addRight === sum) {
//             answer ++;
//             left += 1;
//             right = left;
//             nowSum = 0;
//         } else {
//             left +=1;
//             right = left;
//             nowSum = 0;
//         }
//     }
//     return answer;
// }
//
// console.log(solution([1,2,1,3,1,1,1,2], 6))

function solution(arr, value) {
    const length = arr.length;
    let left = 0;
    let sum = 0;
    let answer = 0;

    for(let right = 0; right < length; right++) {
        sum += arr[right];
        if (sum === value) {
            answer ++;
        }
        while (sum >= value) {
            sum -= arr[left++];
            if (sum === value) {
                answer++;
            }
        }
    }

    return answer;
}
console.log(solution([1,2,1,3,1,1,1,2], 6))
