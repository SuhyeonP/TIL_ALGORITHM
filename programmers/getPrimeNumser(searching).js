function isPrime (num) {
    if(num < 2) return false;
    if(num === 2) return true;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0)return false;
    }
    return true;
}

function solution(nums) {
    const splitNumbers = nums.split('');
    const answer = new Set();

    function checking (numbers, current) {
        if (numbers.length) {
            for (let i = 0; i < numbers.length; i++) {
                const temp = [...numbers];
                temp.splice(i, 1);
                const compare = Number(current + numbers[i]);
                if (isPrime(compare)) {
                    answer.add(compare);
                }
                checking(temp, compare.toString());
            }
        }
    }


    checking(splitNumbers, '');
    return answer.size;
}

console.log(solution('17'))
console.log(solution('011'))
