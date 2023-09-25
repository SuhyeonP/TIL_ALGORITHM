function solution(n, arr) {
    let answer = 0;
    let classRoom = 0;
    const obj = [];

    for (let i = 0; i < n; i += 1) {
        obj.push({ time: arr[i][0], start: 1 });
        obj.push({ time: arr[i][1], start: -1 });
    }

    obj.sort((a, b) => a.time === b.time ? a.start - b.start : a.time - b.time)

    obj.forEach((schedule) => {
        if (schedule.start === 1) {
            classRoom -= 1;
        } else if(schedule.start === 1) {
            classRoom += 1;
        }
        answer = classRoom > answer ? classRoom : answer;
    })

    return answer;
}

solution(3, [[1,3],[2,4],[3,5]])
