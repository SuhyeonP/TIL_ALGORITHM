//가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
// 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
// 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때,
// 다음과 같은 삼각형이 그려진다.
//  3 1 2 4
//   4 3 6
//    7 9
//    16
// N과 가장 밑에 있는 숫자가 주어져 있을 때
// 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하 시오.
// 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

// ▣ 입력설명
// 첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다.
// N은 가장 윗줄에 있는 숫자의 개수를 의 미하며
// F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

// ▣ 출력설명
// 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다.
// 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다.

// ▣ 입력예제 1
// 4 16
// ▣ 출력예제 1
// 3 1 2 4

// 4인경우
// 3C0 , 3C1, 3C2, 3C3

// case 5
// 4C0, 4C1, 4C2, 4C3, 4C4

function combinaton(n, r) {
    if(n === r || r === 0)return 1;
    else {
        return combinaton(n - 1, r - 1) + combinaton(n- 1, r);
    }
}

function solution (len, target) {
    let answer;
    let flag = 0;

    // 이건 i번째에 숫자 들어갔는지 체크용 i를 1부터 N까지 잡기에 0은 비워둠
    const check = Array.from({length: len + 1}, () => 0);
    // 여긴 들어가는 숫자 [1,2,3,4] [2,1,3,4] 이런거 넣어둘 공간인듯
    const temp = Array.from({length: len}, () => 0);
    //
    const combi = Array.from({length: len}, (_, i) => combinaton(len - 1, i));

    function DFS(ind, sum) {
        if (flag) return;
        if (ind === len && sum === target) {
            answer =  temp.slice();
            flag = 1;
        } else {
            for(let i = 1; i <= len; i++) {
                if(check[i] === 0) {
                    check[i] = 1;
                    temp[ind] = i;
                    DFS(ind + 1, sum + (temp[ind] * combi[ind]));
                    check[i] = 0;
                }
            }
        }
    }

    DFS(0, 0);
    return answer;
}

console.log(solution(4, 16))
//function combination (n, r) {
//     if(n === r || r === 0) return 1;
//     else return combination(n - 1, r - 1) + combination(n - 1, r);
// }
//
// function solution (len, target) {
//     let flag = 0;
//     let answer;
//
//     const usage = Array.from({length: len + 1}, () => 0);
//     const combi = Array.from({length: len}, (_, i) => combination(len - 1, i));
//     const caseBucket = Array.from({length: len}, () => 0);
//
//     function DFS (ind, sum) {
//         if (flag) return;
//         if (ind === len && sum === target) {
//             answer = caseBucket.slice();
//             flag = 1;
//         } else {
//             for (let i = 1; i < len + 1; i++) {
//                 if (usage[i] === 0) {
//                     usage[i] = 1;
//                     caseBucket[ind] = i;
//                     DFS(ind + 1, sum + (combi[ind] * caseBucket[ind]));
//                     usage[i] = 0;
//                 }
//             }
//         }
//     }
//
//     DFS(0, 0);
//     return answer;
// }
//
// console.log(solution(4, 16))
