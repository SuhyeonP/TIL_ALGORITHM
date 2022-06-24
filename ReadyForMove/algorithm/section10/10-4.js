//다음과 같이 여러 단위의 동전들이 주어져 있을때
// 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
// 각 단위의 동전은 무한정 쓸 수 있다.

//[1,2,5] 15 => 3

console.log(solution([1,2,5],15))
console.log(solution([1,2,5],6))
function solution(arr, amount) {
    const dy = Array.from({length: amount + 1}, () => amount);

    dy[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        const now = arr[i];
        for(let j = arr[i]; j <= amount; j++) {
            dy[j] = Math.min(dy[j - now] + 1, dy[j]);
        }
    }

    return dy[amount];
}

console.log(solution2Prev([1,2,3],8))
console.log(solution2Prev([1,2,5],15))
console.log(solution2Prev([1,2,5],16))
function solution2Prev(coin, amount) {
    const dy = Array.from({length: amount + 1}, () => amount);

    dy[0] = 0;
    for (let i = 0; i < coin.length; i++) {
        const now = coin[i];
        for (let j = now; j <= amount; j++) {
            dy[j] = Math.min(dy[j - now] + 1, dy[j]);
        }
    }

    return dy[amount]
}

console.log(solution2([1,2,3],8))
console.log(solution2([1,2,5],15))
console.log(solution2([1,2,5],16))
