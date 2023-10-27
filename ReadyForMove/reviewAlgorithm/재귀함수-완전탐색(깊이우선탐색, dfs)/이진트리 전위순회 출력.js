//   1
//  2 3
// 4 5 6 7

// 전위순회
// 1 2 4 5 3 6 7

// 왼쪽은 부모노드 *2
// 오른쪽은 부모노트 * 2 + 1


// 깊이우선은 일단 들어가고
// 방문 시 부모 -> 왼 -> 오
//

function solution(n) {
    let answer = '';

    function DFS(v) {
        if(v > 7) {
            return;
        } else {
            // 부모 먼저 찍고
            answer += v,toString();
            // console.log(v); // 1 2 4 5 3 6 7
            // 전위순외

            // 왼쪽자식 하고
            DFS(v * 2);
            // 오른쪽 자식 하는거임
            DFS(v * 2 + 1)
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));
