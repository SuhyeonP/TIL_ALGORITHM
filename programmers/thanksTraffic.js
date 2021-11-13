
const solution = (arr) => {
    let timeCalculate = [];
    let logTime = [];

    arr.forEach((time) => {
        let end = (Number(time.substring(11,13)) * 3600) + (Number(time.substring(14,16)) * 60) + (Number(time.substring(17, 23)));
        let during = Number(time.substring(24, time.length - 1));
        let start = Number((end - during + 0.001).toFixed(3));
        timeCalculate.push([start, end])
        logTime.push(end);
        logTime.push(start)
    })
    logTime.sort();

    let max = 0;

    logTime.forEach((time) => {
        let begin = time;
        let end = time + 1;
        let cnt = 0;

        timeCalculate.forEach((range) => {
            let start = range[0];
            let last = range[1];

            if ( (start>=begin && start<end) ||
                (last>=begin && last<end) ||
                (start<=begin && last>=end) ) {
                cnt ++;
            }
        })
        max = Math.max(cnt, max)
    })


    return max
}

//
// const solution = (arr) => {
//     let calculate = [];
//     let counting = [];
//     arr.forEach((ele)=>{
//         calculate.push(ele.substring(ele.lastIndexOf(':') + 1, ele.length))
//     });
//
//     let trafficZone = [];
//
//     calculate.forEach((ele, idx) => {
//         let temp = ele.split(' ').map((time) => Number(time.replace('s','')));
//         temp.reverse();
//         let start = (temp[1] - temp[0] + 0.001).toFixed(3);
//         temp[0] = start >= 0 ? Number(start)   : Number(start) + 60;
//         let h = temp.map((value) => value >= 30 ? (value-30).toFixed(3) : (value +30).toFixed(3))
//         trafficZone.push(h.map((value) => Number(value)))
//     })
//     // console.log(trafficZone.sort((a,b) => a[0] - b[0]))
//     console.log(trafficZone)
//
//     return 0
// }
// let b = [
//     "2016-09-15 01:00:04.002 2.0s",
//     "2016-09-15 01:00:07.000 2s"
// ]
// let a =  [
//     "2016-09-15 20:59:57.421 0.351s",
//     "2016-09-15 20:59:58.233 1.181s",
//     "2016-09-15 20:59:58.299 0.8s",
//     "2016-09-15 20:59:58.688 1.041s",
//     "2016-09-15 20:59:59.591 1.412s",
//     "2016-09-15 21:00:00.464 1.466s",
//     "2016-09-15 21:00:00.741 1.581s",
//     "2016-09-15 21:00:00.748 2.31s",
//     "2016-09-15 21:00:00.966 0.381s",
//     "2016-09-15 21:00:02.066 2.62s"
// ]
// solution(a)
// 틀린거