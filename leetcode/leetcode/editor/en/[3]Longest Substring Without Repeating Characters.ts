////Given a string s, find the length of the longest substring without
//repeating
////characters.
////
////
//// Example 1:
////
////
////Input: s = "abcabcbb"
////Output: 3
////Explanation: The answer is "abc", with the length of 3.
////
////
//// Example 2:
////
////
////Input: s = "bbbbb"
////Output: 1
////Explanation: The answer is "b", with the length of 1.
////
////
//// Example 3:
////
////
////Input: s = "pwwkew"
////Output: 3
////Explanation: The answer is "wke", with the length of 3.
////Notice that the answer must be a substring, "pwke" is a subsequence and not
//a
////substring.
////
////
////
//// Constraints:
////
////
//// 0 <= s.length <= 5 * 10⁴
//// s consists of English letters, digits, symbols and spaces.
////
//// Related Topics Hash Table String Sliding Window 👍 23540 👎 1057
//


//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) {
        return s.length;
    }

    const answer: string[] = [];
    let temp: string[] = [];

    for(let i = 0; i < s.length; i++) {
        const now = s[i];
        if (temp.indexOf(now) !== -1) {
            temp.splice(0, temp.indexOf(now) + 1);
            temp.push(now);
        } else {
            temp.push(now);
            answer.push(temp.join(''))
        }
    }
    console.log(answer);

    answer.sort((a, b) => b.length - a.length)
    return answer[0].length;
};
//leetcode submit region end(Prohibit modification and deletion)
