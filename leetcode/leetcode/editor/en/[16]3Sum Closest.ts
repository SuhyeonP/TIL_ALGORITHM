//Given an integer array nums of length n and an integer target, find three
//integers in nums such that the sum is closest to target.
//
// Return the sum of the three integers.
//
// You may assume that each input would have exactly one solution.
//
//
// Example 1:
//
//
//Input: nums = [-1,2,1,-4], target = 1
//Output: 2
//Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//
//
// Example 2:
//
//
//Input: nums = [0,0,0], target = 1
//Output: 0
//
//
//
// Constraints:
//
//
// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -10⁴ <= target <= 10⁴
//
// Related Topics Array Two Pointers Sorting 👍 5821 👎 248



// todo 이해 못함
//leetcode submit region begin(Prohibit modification and deletion)
function threeSumClosest(nums: number[], target: number): number {
    let length = nums.length;
    let answer = 0;

    if(length === 3) {
        return nums[0] + nums[1] + nums[2];
    }

    nums.sort((a, b) => a - b);

    let closet = Infinity;

    for(let i = 0; i < length; i ++) {
        let j = i + 1;
        let k = length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            let diff = sum - target;

            if (diff === 0) {
               return sum;
            } else if (diff > 0) {
                k--;
            } else {
                diff = target - sum;
                j++;
            }

            if(diff < closet) {
                closet = diff;
                answer = sum;
            }
        }
    }

    return answer;
};
//leetcode submit region end(Prohibit modification and deletion)
