
function solution(food_times, k) {
    let foods = food_times.map((food, idx) => [idx+1, food]).sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i][1];
        const remain = foods.length - i;
        const loop = (food - (i === 0 ? 0 : foods[i - 1][1])) * remain;

        console.log(loop, k);
        if(k < loop) {
            console.log(foods.slice(i).sort((a, b) => a[0] - b[0]));
            return foods.slice(i).sort((a, b) => a[0] - b[0])[k % remain][0];
        }
        k -= loop;
    }


    return -1;
}

console.log(solution([3,1,2], 5));
// console.log(solution([3,3,3,5], 13));
// console.log(solution([2,3,3,5], 13));
