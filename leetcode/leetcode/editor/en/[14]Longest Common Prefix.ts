//Write a function to find the longest common prefix string amongst an array of
//strings.
//
// If there is no common prefix, return an empty string "".
//
//
// Example 1:
//
//
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//
//
// Example 2:
//
//
//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
//
//
//
// Constraints:
//
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.
//
// Related Topics String 👍 7924 👎 2983


//leetcode submit region begin(Prohibit modification and deletion)
function longestCommonPrefix(strs: string[]): string {
    const length = strs.length;
    if (length === 0) {
        return ""
    }

    if(length === 1) {
        return strs[0];
    }

    strs.sort();

    let end = Math.min(strs[0].length, strs[length - 1].length);

    let i = 0;

    while (i < end && strs[0][i] === strs[length - 1][i]) {
        i++
    }

    return strs[0].substring(0, i);

};
//leetcode submit region end(Prohibit modification and deletion)
