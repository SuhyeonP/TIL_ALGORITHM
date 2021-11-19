function checkSum (arr) {
    return arr.reduce((before, now) => {
        return before + now;
    },0)
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = new Array(bridge_length - 1).fill(0);

    let first = truck_weights.shift();
    bridge.push(first);
    time += 1;

    while (checkSum(bridge) > 0) {
        bridge.shift();
        time ++;

        if(truck_weights.length > 0) {
            const sum = checkSum(bridge);
            bridge.push(sum + truck_weights[0] <= weight ? truck_weights.shift() : 0);
        }

    }


    return time;
}

console.log(solution(2,10,[7,4,5,6]))
// 8

