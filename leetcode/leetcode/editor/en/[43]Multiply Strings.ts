//Given two non-negative integers num1 and num2 represented as strings, return
//the product of num1 and num2, also represented as a string.
//
// Note: You must not use any built-in BigInteger library or convert the inputs
//to integer directly.
//
//
// Example 1:
// Input: num1 = "2", num2 = "3"
//Output: "6"
// Example 2:
// Input: num1 = "123", num2 = "456"
//Output: "56088"
//
//
// Constraints:
//
//
// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0
//itself.
//
// Related Topics Math String Simulation 👍 4423 👎 1767


//leetcode submit region begin(Prohibit modification and deletion)
function multiply(num1: string, num2: string): string {
    if ([num1, num2].indexOf('0') !== -1) {
        return '0'
    }

    const length1 = num1.length;
    const length2 = num2.length;
    let answer = '';

    for(let i = 0; i < length1; i ++) {
        const temp = [];
        let carry = 0;

        for (let j = 0; j < length2; j++) {
            const tempValue = Number(num2[length2 - j - 1]) * Number(num1[length1 - i -1]) + carry;
            carry = Math.floor(tempValue / 10);
            temp.unshift(tempValue % 10);
        }

        if(carry !== 0) {
            temp.unshift(carry);
        }
        for (let k = 0; k < i; k++) {
            temp.push(0);
        }

        const nowLength = answer.length;
        const valueLength = temp.length;
        let tempCarry = 0;
        let add = [];

        for (let l = 0; l < Math.max(nowLength, valueLength); l++) {
            const value = Number(temp[valueLength - 1 - l] || 0) + Number(answer[nowLength - 1 - l] || 0) + tempCarry;
            tempCarry = Math.floor(value / 10);
            add.unshift(value % 10);
        }
        if (tempCarry !== 0) {
            add.unshift(tempCarry);
        }
        answer = add.join('');
        add = [];
    }
    return answer;
};
//leetcode submit region end(Prohibit modification and deletion)
