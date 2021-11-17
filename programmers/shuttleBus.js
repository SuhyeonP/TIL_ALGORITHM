function changeTime(str) {
    const [hh, mm] = str.split(':');
    return Number(hh) * 60 + Number(mm);
}

function changeString(num) {
    let hour = Math.floor(num / 60).toString();

    const minute = (num % 60).toString();

    return (hour.length <= 1 ? '0' + hour : hour) + ":" + (minute.length === 1 ? '0' + minute : minute);
}
function solution(n, t, m, timetable) {
    let answer = changeTime("9:00");

    const timeArr = timetable.map((time) => changeTime(time)).sort(((a, b) => a - b));

    for (let i = 0; i < n; i ++) {
        const filtering = timeArr.filter((ele) => ele <= 540 + i * t).length;

        if (i === n - 1) {
            if (filtering >= m) {
                answer = timeArr[m-1] - 1;
            } else {
                answer = changeTime("9:00") + i * t;
            }
        } else {
            timeArr.splice(0, filtering > m ? m : filtering);
            answer += t;
        }
    }
    return changeString(answer);
}

let ex1 = ["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"];
let ex2 = ["00:01", "00:01", "00:01", "00:01", "00:01"];
let ex4 = ["09:10", "09:09", "08:00"];
console.log(solution(10,60,45, ex1));
console.log(solution(1,1,5, ex2));
console.log(solution(2,10,2, ex4));
console.log(solution(1,1,1, ["23:59"]));
console.log(solution(2,1,2, ["09:00", "09:00", "09:00", "09:00"]));
console.log(solution(2,1,2, []));
