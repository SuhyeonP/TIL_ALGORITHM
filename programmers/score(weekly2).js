function solution(scores) {
    let averageArr = [];

    for (let i = 0; i < scores.length; i++) {
        let myScore = scores[i][i];
        let tempArr = [];
        let length = scores.length;
        for (let j = 0; j < scores.length; j++) {
            tempArr.push(scores[j][i])
        }
        let checkDup = tempArr.filter((ele) => ele === myScore);
        let average = 0;

        if (Math.max.apply(null, tempArr) === myScore || Math.min.apply(null, tempArr) === myScore) {
            if(checkDup.length === 1){
                tempArr[i] = 0;
                length--;
            }
        }
        average = tempArr.reduce((p, c) => p + c, 0);
        averageArr.push(average / length);
    }
    const answer = averageArr.map((ele) => checkScore(ele))
    return answer.join('');
}

function checkScore (num) {
    if (num >= 90) {
        return 'A';
    } else if (90 > num && num >= 80) {
        return 'B';
    } else if (80 > num && num >= 70) {
        return 'C';
    } else if (70 > num && num >=50) {
        return 'D';
    } else {
        return 'F';
    }
}

const a = [[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];
console.log(solution(a));

// https://programmers.co.kr/learn/courses/30/lessons/83201
