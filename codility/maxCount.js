// function solution(N, A) {
//     let answer = new Array(N).fill(0);
//
//     A.forEach((ele) => {
//         if(ele <= N) {
//             answer[ele - 1] += 1;
//         } else {
//             answer = Array(N).fill(Math.max(...answer))
//         }
//     })
//
//     return answer;
// }

function solution(N, A) {
    let last = 0;
    let max = 0;
    const answer = Array(N).fill(0);

    A.forEach((ele) => {
        if (ele <= N) {
            if (answer[ele - 1] < last) {
                answer[ele - 1] = last;
            }
            answer[ele - 1]++;
            if (max < answer[ele - 1]) {
                max = answer[ele - 1];
            }
        } else {
            last = max;
        }
    });

    return answer.map((ele) => ele < last ? last : ele);
}

console.log(solution(5,[3,4,4,6,1,4,4]))
