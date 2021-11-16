function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++) {
        let temp = ''
        let temp1 = arr1[i].toString(2);
        let temp2 = arr2[i].toString(2);
        temp1 = temp1.length < n ? new Array(n - temp1.length).fill(0).join('') + temp1 : temp1;
        temp2 = temp2.length < n ? new Array(n - temp2.length).fill(0).join('') + temp2 : temp2;

        for (let j = 0; j < n; j++) {
            if (temp1[j] !== '1' && temp2[j] !== '1') {
                temp += ' '
            } else {
                temp += '#'
            }
        }
        answer.push(temp)
    }

    return answer;
}

function solution2(n, arr1, arr2) {
    // 다른사람풀이
    const answer = [];
    let c;
    for(let i =0;i<n;i++){
        c = (arr1[i]|arr2[i]).toString(2).replace(/1/g,"#").replace(/0/g," ");
        while(c.length != n) {
            c = " " + c;
        }
        answer.push(c);
    }
    return answer;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))