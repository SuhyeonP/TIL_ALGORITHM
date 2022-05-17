//Given an array nums of n integers, return an array of all the unique
//quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
//
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
//
//
// You may return the answer in any order.
//
//
// Example 1:
//
//
//Input: nums = [1,0,-1,0,-2,2], target = 0
//Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
//
//
// Example 2:
//
//
//Input: nums = [2,2,2,2,2], target = 8
//Output: [[2,2,2,2]]
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 200
// -10⁹ <= nums[i] <= 10⁹
// -10⁹ <= target <= 10⁹
//
// Related Topics Array Two Pointers Sorting 👍 6239 👎 704


//leetcode submit region begin(Prohibit modification and deletion)
function fourSum(nums: number[], target: number): number[][] {
    const len = nums.length;

    if (len < 4) {
        return [];
    }

    nums.sort((a, b) => a - b);

    let sum = 0;
    let goLeft = 0;
    let goRight = 0;

    const answer: number[][] = [];

    for (let i = 0; i < len  - 3; i ++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) continue;

        const next = i + 1;

        for (let j = next; j < len - 2; j ++) {
            if (j > next && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[len - 2] + nums[len -1] < target) continue;

            goLeft = len  - 1;
            goRight = j + 1;

            while (goRight < goLeft) {
                sum = nums[i] + nums[j] + nums[goLeft] + nums[goRight];

                if (sum < target) {
                   goRight ++;
                } else if (sum > target) {
                    goLeft --;
                } else {
                    answer.push([nums[i], nums[j], nums[goRight], nums[goLeft]]);
                    while (goRight < goLeft && nums[goRight + 1] === nums[goRight]) goRight ++;
                    while (goRight < goLeft && nums[goLeft - 1] === nums[goLeft]) goLeft--;
                    goRight ++;
                    goLeft --;
                }
            }
        }
    }

    return answer;
};
//leetcode submit region end(Prohibit modification and deletion)
