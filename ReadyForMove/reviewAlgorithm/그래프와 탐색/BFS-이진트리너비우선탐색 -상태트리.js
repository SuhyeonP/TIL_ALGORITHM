//   1
//  2 3
// 4 5 6 7

// 넓이우선탐색: 1 2 3 4 5 6 7

// 큐 자료구조 사용함

// 먼저 1 넣고
// 1을 빼고, 1에 연결된 애들을 바로 넣어줌 => 2, 3
// 그리고 다시 2빼고 2에 연결된 애들 넣어줌
// 그렇게 반복

// 상태트리
// 출발점에서 도착점까지
// 최단거리 할때 자주 사용


function solution(deps) {
    const queue = [1];
    const answer = [];


    while (queue.length) {
        const now = queue.shift();
        answer.push(now);
        for(const ele of [now * 2, now * 2 + 1]) {
            if(ele > deps) continue;
            queue.push(ele);
        }
    }
    return answer;
}

console.log(solution(7))
