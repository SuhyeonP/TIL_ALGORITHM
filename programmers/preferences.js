// https://programmers.co.kr/learn/courses/30/lessons/84325
const a = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
const b = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]

function solution(table, languages, preference) {
    let partTable = table.map((ele) => ele.split(' '));
    let part = partTable.map((ele) => ele[0]);
    let rank = partTable.map((ele) => ele.filter((ele2, ind) => ind !== 0));
    let length = rank[0].length;
    let score = [];
    let answer =  [];

    for (let i = 0; i < languages.length; i++) {
        let tempScore = [];
        for (let j = 0; j < rank.length; j++) {
            let userScore = rank[j].indexOf(languages[i]);
            if (userScore !== -1) {
                tempScore.push(length - userScore)
            } else {
                tempScore.push(0)
            }
        }
        score.push(tempScore.map((ele) => ele * preference[i]))
    }

    for (let i = 0; i < score[0].length; i++) {
        let temp = 0;
        for(let j = 0; j < score.length; j++){
            temp += score[j][i]
        }
        answer.push(temp)
    }

    const findIndex = answer.map((ele, ind) => ele === Math.max.apply(null, answer) ? ind : null).filter((ele) => ele !== null).map((ele) => part[ele]);

    return findIndex.sort()[0];
}

// console.log(solution(a, ["PYTHON", "C++", "SQL"], [7,5,5]))
console.log(solution(b, ["JAVA", "JAVASCRIPT"], [7,5]))

// 다른사람 풀이
function solution2(table, languages, preference) {
    return table.map((r) => r.split(' '))
        .map((t) => [...t.splice(0, 1), t])
        .map(([t, arr]) => [t,
            languages.reduce((acc, l, i)=> {
                acc += (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l)))
                    * preference[i];
                return acc;
            }, 0)])
        .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0]
}
