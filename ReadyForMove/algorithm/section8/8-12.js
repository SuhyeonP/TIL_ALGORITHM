function solution2(n, r) {
    function DFS (cn, cr) {
        if (cn === cr || cr === 0) return 1;
        else return DFS(cn - 1, cr - 1) + DFS(cn - 1, cr);
    }

    return DFS(n,r)

}
console.log(solution2(5, 3))


function solution(n, r) {
    if (n === r || r === 0) return 1;
    else return solution(n - 1, r) + solution(n - 1, r - 1);
}

console.log(solution(5, 3))
