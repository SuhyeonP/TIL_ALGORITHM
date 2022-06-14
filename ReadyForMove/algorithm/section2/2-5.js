//N(1<=N<=100)명의 학생의 국어점수가 입력되면
// 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
function solution(scores) {
    const newScore = scores.map((ele, idx) => {
        return [ele, idx + 1]
    }).sort((a, b) => b[0] - a[0]);

    return newScore.map((ele) => ele[1]);
}

// suggest
function solution2(scores) {
    const answer = Array(scores.length).fill(1);

    for(let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores.length; j++) {
            if(i !== j) {
                if(scores[i] < scores[j]) {
                    answer[i]++;
                }
            }
        }
    }
    return answer;
}

console.log(solution([87,89,92,100,76]))
console.log(solution2([87,89,92,100,76]))
