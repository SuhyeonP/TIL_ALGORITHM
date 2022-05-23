//You are given a large integer represented as an integer array digits, where
//each digits[i] is the iᵗʰ digit of the integer. The digits are ordered from most
//significant to least significant in left-to-right order. The large integer does
//not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.
//
//
//
// Example 1:
//
//
//Input: digits = [1,2,3]
//Output: [1,2,4]
//Explanation: The array represents the integer 123.
//Incrementing by one gives 123 + 1 = 124.
//Thus, the result should be [1,2,4].
//
//
// Example 2:
//
//
//Input: digits = [4,3,2,1]
//Output: [4,3,2,2]
//Explanation: The array represents the integer 4321.
//Incrementing by one gives 4321 + 1 = 4322.
//Thus, the result should be [4,3,2,2].
//
//
// Example 3:
//
//
//Input: digits = [9]
//Output: [1,0]
//Explanation: The array represents the integer 9.
//Incrementing by one gives 9 + 1 = 10.
//Thus, the result should be [1,0].
//
//
//
// Constraints:
//
//
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.
//
// Related Topics Array Math 👍 4220 👎 4153


//leetcode submit region begin(Prohibit modification and deletion)
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    // unshift 가 되려면 else 에 안걸린 애들이라서 앞에 1을 붙여주는거
    // 애초에 9를 만나면 단위가 바뀌게 될텐데 1의자리 숫자가 9일 경우만 생각하면 되기때문에 ㅇㅇㅇ
    digits.unshift(1);
    return digits;
};
//leetcode submit region end(Prohibit modification and deletion)
