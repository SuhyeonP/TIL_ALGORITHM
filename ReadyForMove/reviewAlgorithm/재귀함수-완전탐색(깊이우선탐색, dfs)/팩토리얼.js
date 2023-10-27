function solution (n) {
    function DFS(l) {
        // 1을 해주지 않으면 맥시멈 콜이 됨
        if(l === 1) return 1;
        else {
            return n * DFS(l - 1);
        }
    }

    return DFS(n);
}
