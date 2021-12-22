function solution(str) {
    let answer = 0;
    const strSplit = str.split("");

    if (strSplit.length % 2 !== 0) {
        return 0;
    }

    for (let i = 0; i < str.length; i++) {
        const copy = strSplit.slice();
        const cut = copy.splice(i);
        const change = (cut.join("") + copy.join("")).split("");
        if (check(change)) {
            answer ++;
        }
    }


    return answer;
}

function check(strSplit) {
    const queue = [];
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];

    while (strSplit.length) {
        const temp = strSplit.shift();
        if (open.indexOf(temp) !== -1) {
            queue.push(temp);
        } else {
            if (queue.length > 0) {
                if (close[open.indexOf(queue.pop())] !== temp) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}


console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));