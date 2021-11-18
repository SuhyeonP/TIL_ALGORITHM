function solution (tickets) {
    let answer = [];
    const copy = [...tickets].sort();
    let visit = new Array(copy.length).fill(false);

    function dfs (start, temp, cnt) {
        temp.push(start);

        if(cnt === tickets.length) {
            answer = temp;
            return true;
        }

        for (let i = 0; i < copy.length; i++) {
            if (!visit[i] && copy[i][0] === start) {
                visit[i] = true;
                if(dfs(copy[i][1], temp, cnt + 1)) {
                    return true;
                }
                visit[i] = false;
                temp.pop()
            }
        }
        return false;
    }

    dfs('ICN', [], 0);

    return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]))
//["ICN", "JFK", "HND", "IAD"]


console.log(solution(	[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))
//["ICN","ATL","ICN","SFO","ATL","SFO"]
