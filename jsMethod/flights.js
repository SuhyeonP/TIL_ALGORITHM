function solution(heights, speeds) {
    let flights = [];

    for(let i = 0; i < heights.length; i++) {
        let temp = (heights[i] % speeds[i]) > 0 ? 1 : 0;
        temp += Math.floor(heights[i] / speeds[i]);
        flights.push(temp)
    }
    flights.sort((a, b) => a - b);

    let answer = new Set();

    for(let i = 0; i < flights.length; i++) {
        answer.add(flights[i])
    }

    return answer.size;
}
