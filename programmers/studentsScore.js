function solution(answer) {
    const s1 = [1, 2, 3, 4, 5];
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];


    let s1Score = 0;
    let s2Score = 0;
    let s3Score = 0;

    answer.forEach((ele, idx) => {
        if (ele === s1[idx % s1.length]) {
            s1Score += 1;
        }
        if (ele === s2[idx % s2.length]) {
            s2Score += 1;
        }
        if (ele === s3[idx % s3.length]) {
            s3Score += 1;
        }
    })
    let answers = [];
    const max = Math.max(s1Score, s2Score, s3Score);

    if (s1Score === max) {
        answers.push(1);
    }
    if (s2Score === max) {
        answers.push(2);
    }
    if (s3Score === max) {
        answers.push(3);
    }

    return answers;
}

console.log(solution([1,2,3,4,5]	));


console.log(5 % 5)
