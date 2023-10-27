//자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을
// 모두 출력하는 프로그램 을 작성하세요.

function solution(n) {
    const answer = [];
    const temp = Array.from({length: n + 1}, () => 0);
    function DFS(v) {
        if(v === n + 1) {
            let tmp = '';
            for(let i = 1; i <= n; i++) {
                if(temp[i] === 1) tmp+= i + ' ';
            }
            // trim 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
            answer.push(tmp.trim());
        } else {
            temp[v] = 1;
            DFS(v + 1);
            temp[v] = 0;
            DFS(v + 1);

        }
    }
    DFS(1)
    return answer.filter(Boolean);
}

console.log(solution(3))

//function solution(n) {
//     const answer = [];
//
//     const temp = Array.from({length : n  +1}, () => 0);
//
//     function DFS(v) {
//         if (v === n + 1) {
//             let tmp = '';
//             for (let i = 1; i <= n; i++) if(temp[i]) tmp += i + ' ';
//             answer.push(tmp.trim());
//         } else {
//             temp[v] = 1;
//             DFS(v + 1);
//             temp[v] = 0;
//             DFS(v + 1);
//         }
//     }
//
//     DFS(1)
//     return answer.filter(Boolean);
// }
//
// console.log(solution(3))
