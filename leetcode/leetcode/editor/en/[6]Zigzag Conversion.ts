//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
//of rows like this: (you may want to display this pattern in a fixed font for
//better legibility)
//
//
//P   A   H   N
//A P L S I I G
//Y   I   R
//
//
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a
//number of rows:
//
//
//string convert(string s, int numRows);
//
//
//
// Example 1:
//
//
//Input: s = "PAYPALISHIRING", numRows = 3
//Output: "PAHNAPLSIIGYIR"
//
//
// Example 2:
//
//
//Input: s = "PAYPALISHIRING", numRows = 4
//Output: "PINALSIGYAHRPI"
//Explanation:
//P     I    N
//A   L S  I G
//Y A   H R
//P     I
//
//
// Example 3:
//
//
//Input: s = "A", numRows = 1
//Output: "A"
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
//
// Related Topics String 👍 3671 👎 8458


//leetcode submit region begin(Prohibit modification and deletion)
function convert(s: string, numRows: number): string {
    let len = s.length;
    if (len === 1 || len <= numRows || numRows === 1) {
        return s;
    }
    let answer = '';


    let temp: string[][] = [];

    let split = s.split('');
    let i = 0;

    while (split.length > 0) {
        const divide = i % (numRows - 1);
        let push = [];
        let where: string[] = [];
        for(let i = 0; i < numRows; i++) {
            where.push('');
        }
        if(divide === 0) {
            push = split.splice(0, numRows);
            where = [...push];
        } else {
            push = split.splice(0, 1);
            where[numRows - divide - 1] = push[0];
        }
        temp.push(where)
        i++;
    }

    for(let i = 0; i < numRows; i++) {
        const word = [];
        for(let j = 0; j < temp.length; j++) {
            word.push(temp[j][i]);
        }
        answer += word.join('');
    }

    return answer;
};
//leetcode submit region end(Prohibit modification and deletion)
