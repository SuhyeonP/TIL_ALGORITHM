function solution(nums) {
    const max = nums.length / 2;
    nums.sort((a, b) => a - b);
    nums = nums.filter((ele, idx) => ele !== nums[idx + 1])

    return max > nums.length ? nums.length : max;
}

console.log(solution([3,1,2,3]))
// console.log(solution([3,3,3,2,2,4]))
