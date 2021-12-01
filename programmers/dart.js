// function solution(darts) {
//     let answer = 0;
//
//     const gameMap = {}
//     const point = darts.match(/[0-9]{1,2}/g);
//     const tool = darts.match(/[DST*#]{1,2}/g).filter((ele) => ele !== '');
//     const scoreBoard = {S: 1, D: 2, T: 3};
//     const bonus = {'*':2, '#': -1};
//
//     for(let i = 0; i < 3; i++) {
//         const tempTool = tool[i].split('');
//         gameMap[i] = [Number(point[i]), ...tempTool];
//         if(i !== 0 && gameMap[i][2] && gameMap[i][2] === '*') {
//             gameMap[i-1] = [...gameMap[i-1], gameMap[i][2]]
//         }
//     }
//
//     for(const key in gameMap) {
//         let temp = Math.pow(gameMap[key][0], scoreBoard[gameMap[key][1]]);
//         if(gameMap[key][2]) {
//             temp *= bonus[gameMap[key][2]]
//         }
//         if(gameMap[key][3]){
//             temp *= bonus[gameMap[key][3]]
//         }
//         answer += temp;
//     }
//
//     return answer;
// }
//
// // console.log(solution('1S2D*3T'))
// // console.log(solution('1S*2T*3S'))
// // console.log(solution('1S*2T*3S'))
// // console.log(solution('1D#2S*3S'))
// console.log(solution(	"1D2S#10S"))

function solution(darts) {
    const scoreBoard = {S: 1, D: 2, T: 3};
    const bonus = {'*':2, '#': -1};
    let score = darts.match(/\d+\D{1,2}/g);
    let scores = [0,0,0];

    for (let i = 0; i < 3; i++) {
        const temp = Math.pow()
        scores[i] = 0;
    }

    score.forEach((ele, idx) => {
        let temp = 0;
        temp += Math.pow(Number(ele.match(/[0-9]{1,2}/g)), scoreBoard[ele.match(/\D/g)[0]])
        if((/\W/g).test(ele)){
            temp *= bonus[ele.match(/\W/g)[0]];
            if(ele.match(/\W/g)[0] === '*' && idx > 0) {
                scores[idx - 1] *= 2;
            }
        }
        scores[idx] = temp;
    })
    return scores.reduce((before, now) => before + now);
}


console.log(solution('1S2D*3T'))
console.log(solution('1S*2T*3S'))
console.log(solution('1D#2S*3S'))
