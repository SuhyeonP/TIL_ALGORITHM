//Given two binary strings a and b, return their sum as a binary string.
//
//
// Example 1:
// Input: a = "11", b = "1"
//Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
//Output: "10101"
//
//
// Constraints:
//
//
// 1 <= a.length, b.length <= 10⁴
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
//
// Related Topics Math String Bit Manipulation Simulation 👍 5051 👎 553


//leetcode submit region begin(Prohibit modification and deletion)
function addBinary(a: string, b: string): string {
    let answer = '';
    const aLength = a.length;
    const bLength = b.length;

    const maxLength = Math.max(aLength, bLength);

    let carry = 0;
    for (let i = 0; i < maxLength; i++) {
        const val = Number(a[aLength - 1 - i] || 0) + Number(b[bLength - 1 - i] || 0) + carry;
        carry = Math.floor(val / 2);
        answer = (val % 2) + answer;
    }
    if (carry) answer = 1 + answer;
    return answer;
}
;
//leetcode submit region end(Prohibit modification and deletion)
