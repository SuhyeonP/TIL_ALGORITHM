function solution(foods) {
    if(foods.length < 3) {
        return 0;
    }

    function getSum(arr) {
        return arr.reduce((before, now) => { return before + now}, 0);
    }

    const sum = foods.slice().sort((a,b) => a-b).filter((ele) => ele).reduce((before, now) => { return before + now}, 0);

    if(Math.floor(sum/3) !== sum/3) {
        return 0;
    }
    const combination = [];
    let temp = [];
    let answer = 1;
    foods.reduce((_, now) => {
        if(temp.length > 0) {
            if(getSum([...temp, now]) === sum / 3) {
                combination.push([...temp, now]);
                temp = [];
            } else {
                temp.push(now);
            }
        }else {
            if(now === sum/3) {
                combination.push([now])
            } else {
                temp.push(now)
            }
        }
    },0)
    console.log(combination)

    for(let i = 0; i < combination.length - 1; i++) {
        if(combination[i + 1][0] === 0) {
            answer *= 2;
        }
    }

    return answer;
}

console.log(solution([5,0,4,0,1,0,2,3]))
console.log(solution([1,2,3,0,3]))
console.log(solution([4,1]))
