function solution(N, roads, K) {
    let answer = 0;

    const dist = Array(N + 1).fill(Infinity);
    const adj = Array.from({length: N + 1}, () => []);


    roads.forEach(([a,b,c]) => {
        adj[a].push({to: b, time: c});
        adj[b].push({to: a, time: c});
    });

    console.log(adj)


    const pq = [{to: 1, time: 0}];

    dist[1] = 0;

    while (pq.length) {
        let {to, time} = pq.pop();

        adj[to].forEach((next) =>{
            if(dist[next.to] > dist[to] + next.time) {
                dist[next.to] = dist[to] + next.time;
                pq.push(next);
            }
        })
    }


    return dist.filter((item) => item <= K).length;
}

//노드별 거리를 무한으로 하는 배열 생성(1붜 사용하기 위해 N+1의 배열 생성)
// 인접한 노드별 시간(가중치)의 정보를 담고 있는 배열 생성
// 인접한 노드별 시간(가중치)의 정보를 담고 있는 배열에 데이터 추가
// 1번 마을에서부터 우선순위 큐 시작 및 초기값 0 할당(시작점이기 때문에)
// 우선순위 큐 배열에 값이 없을 때까지 반복
// 연결된 노드에서의 값이 현재의 값 + 해당 노드의 시간(가중치) 보다 클 경우, 값을 대체하고 우선순위 큐에
// 데이터 추가
// K이하의 시간에 배달되는 값 filter

let ex1 = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
let ex2 = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];

console.log(solution(5, ex1, 3))
// 4
// console.log(solution(6, ex2, 4))
// 4
