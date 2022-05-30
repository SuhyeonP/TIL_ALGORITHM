//Given an array of intervals where intervals[i] = [starti, endi], merge all
//overlapping intervals, and return an array of the non-overlapping intervals that
//cover all the intervals in the input.
//
//
// Example 1:
//
//
//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
//
//
// Example 2:
//
//
//Input: intervals = [[1,4],[4,5]]
//Output: [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.
//
//
//
// Constraints:
//
//
// 1 <= intervals.length <= 10⁴
// intervals[i].length == 2
// 0 <= starti <= endi <= 10⁴
//
// Related Topics Array Sorting 👍 13756 👎 529


//leetcode submit region begin(Prohibit modification and deletion)
function merge(intervals: number[][]): number[][] {
    const len = intervals.length;
    if (len < 2) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let previous = intervals[0];

    for (let i = 1; i < len; i += 1) {
        if (previous[1] >= intervals[i][0]) {
            // 바로 앞의 범위를 가져가기 위해서 (계속 겹치는걸 확인해야해서)
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            result.push(previous);
            // 겹치지 않는건 다음 범위로 바꿔줌
            previous = intervals[i];
        }
    }

    // 마지막 범위 넣어주기
    result.push(previous);

    return result;
};
//leetcode submit region end(Prohibit modification and deletion)
