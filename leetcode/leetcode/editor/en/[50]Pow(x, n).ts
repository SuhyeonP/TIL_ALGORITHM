//Implement pow(x, n), which calculates x raised to the power n (i.e., xⁿ).
//
//
// Example 1:
//
//
//Input: x = 2.00000, n = 10
//Output: 1024.00000
//
//
// Example 2:
//
//
//Input: x = 2.10000, n = 3
//Output: 9.26100
//
//
// Example 3:
//
//
//Input: x = 2.00000, n = -2
//Output: 0.25000
//Explanation: 2⁻² = 1/2² = 1/4 = 0.25
//
//
//
// Constraints:
//
//
// -100.0 < x < 100.0
// -2³¹ <= n <= 2³¹-1
// -10⁴ <= xⁿ <= 10⁴
//
// Related Topics Math Recursion 👍 4570 👎 5487


//leetcode submit region begin(Prohibit modification and deletion)
function myPow(x: number, n: number): number {
    if (x === 0) {
        return 0;
    } else if(n === 0) {
        return 1;
    }

    if (n > 0) {
       return Math.pow(x, n);
    } else {
        const temp = Math.abs(n);
        return 1 / Math.pow(x, temp);
    }
};
//leetcode submit region end(Prohibit modification and deletion)
