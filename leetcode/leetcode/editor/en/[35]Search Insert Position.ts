//leetcode submit region begin(Prohibit modification and deletion)
function searchInsert(nums: number[], target: number): number {
    const answer: number[] = nums.slice();
    answer.push(target);
    return answer.sort((a, b) => a - b).indexOf(target);
};
//leetcode submit region end(Prohibit modification and deletion)
