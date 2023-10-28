### 9-1
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 <br/>
모든 경로의 가지 수를 출력하는 프 로그램을 작성하세요.  <br/>
아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 <br/>
* 1 2 3 4 5
* 1 2 5
* 1 2 5
* 1 3 4 2 5
* 1 3 4 5
* 1 4 2 5
* 1 4 5
총 6 가지입니다.

### 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 
그 다음부터 M줄에 걸쳐 연 결정보가 주어진다.
### 출력설명
총 가지수를 출력한다.


### 입력예제 1
5 9 

1 2 

1 3 

1 4 

2 1 

2 3 

2 5 

3 4 

4 2 

4 5
### 출력예제 1 
6


```javascript
function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({length: n + 1}, () => 0);
    path = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }

    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path);
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }

    path.push(1);
    ch[1] = 1;
    DFS(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
```
function solution(arr, n) {
const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
const check = Array.from({length: n + 1}, () => 0);
let answer = 0;

    for (const [start, end] of arr) {
        graph[start][end] = 1;
    }
    
    function DFS(ind) {
        if (ind === n) {
            answer ++;
        } else {
            for (let i = 1; i < n + 1; i++) {
                if (graph[ind][i] === 1 && check[i] === 0) {
                    check[i] = 1;
                    // i에 방문해서 i에서 가는 지점을 찾아야함 그래서 갓던델 방문하면 안돼서 check에 방문정보 새김
                    DFS(i);
                    check[i] = 0;
                }
            }
        }
    }
    
    check[1] = 1;
    DFS(1);
    
    return answer;
}

const arr1=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution( arr1, 5))
