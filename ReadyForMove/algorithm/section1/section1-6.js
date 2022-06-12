// section 1-6
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
//85이므로 그 합은
// 이 되고,
// 77 + 41 + 53 + 85 = 256
// 41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.

function getSum(nums) {
    return nums.reduce((before, now) => before + now, 0);
}

function solution(a, b, c, d, e, f, g) {
    const odd = [a,b,c,d,e,f,g].filter((ele) => ele % 2 !== 0).sort((x, y) => x - y);
    console.log(getSum(odd))
    console.log(odd[0]);
}

function solution2(nums) {
    let sum = 0, min = 10000;

    for (let ele of nums) {
        if (ele % 2 === 1) {
            sum += ele;
            if (ele < min) min = ele;
        }
    }

    return [sum, min]
}

solution(12, 77, 38, 41, 53, 92, 85)
solution2(12, 77, 38, 41, 53, 92, 85)
