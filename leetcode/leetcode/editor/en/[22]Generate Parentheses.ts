//Given n pairs of parentheses, write a function to generate all combinations
//of well-formed parentheses.
//
//
// Example 1:
// Input: n = 3
//Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
//Output: ["()"]
//
//
// Constraints:
//
//
// 1 <= n <= 8
//
// Related Topics String Dynamic Programming Backtracking 👍 12823 👎 495


//leetcode submit region begin(Prohibit modification and deletion)
function backtrack(ans, cur, open, close, max) {
    if (cur.length === max * 2) {
        ans.push(cur);
        return;
    }

    if (open < max) {
        backtrack(ans, cur + '(' , open + 1, close, max);
    }
    if(close < open) {
        backtrack(ans, cur +')', open, close + 1, max);
    }
}

function generateParenthesis(n: number): string[] {
    const answer = [];

    backtrack(answer, "", 0, 0, n);

    return answer;
};
//leetcode submit region end(Prohibit modification and deletion)
