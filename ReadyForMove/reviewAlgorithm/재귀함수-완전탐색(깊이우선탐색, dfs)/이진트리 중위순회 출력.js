//   1
//  2 3
// 4 5 6 7

// 전위순회
// 4 2 5 1 6 3 7

// 왼쪽은 부모노드 *2
// 오른쪽은 부모노트 * 2 + 1


// 깊이우선은 일단 들어가고
// 방문 시 왼 -> 부모 -> 오
//

function solution(max) {
    let answer = '';

    function DFS(ele) {
        if(ele > max) return;
        else {
            DFS(ele * 2);
            answer += ele.toString() + ' ';
            DFS(ele * 2 + 1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(7))
