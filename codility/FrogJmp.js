function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}
function solution2(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(X === Y) return 0;
    return Math.ceil((Y - X) / D);
}
