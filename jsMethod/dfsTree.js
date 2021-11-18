function solution (str) {
    let answer = [];
    const split = str.match(/[^(, )]/g);
    let makeGroup = [];
    const checkChild = new Map();
    let checkBucket = '';

    for (let i = 0; i < split.length; i+=2) {
        const prev = makeGroup.slice(makeGroup.length - 1, makeGroup.length + 1);
        const temp = [split[i], split[i+1]];
        if (prev.length > 0 && prev[0].sort().join('') === temp.sort().join('')){
            return 'error two';
        }

        makeGroup.push([split[i], split[i+1]]);
    }

    makeGroup.sort();


    for(let i = 0; i < makeGroup.length; i++) {
        checkChild.set(makeGroup[i][0], checkChild.has(makeGroup[i][0]) ? [...checkChild.get(makeGroup[i][0]), makeGroup[i][1]] : [makeGroup[i][1]]);
        if(checkChild.get(makeGroup[i][0]).length > 2) {
            return 'error one';
        }
    }


    let visited = new Array(makeGroup.length + 1).fill(false);


    function dfs(start, temp, cnt) {
        temp.push(start);
        checkBucket += start;
        if(temp.length === makeGroup.length + 1) {
            answer = temp;
            visited[makeGroup.length] = true;
            return true;
        }

        for (let i = 0; i < makeGroup.length; i++) {
            if (!visited[i] && start === makeGroup[i][0]) {
                if(temp[temp.length - 1] === makeGroup[i][0]){
                    checkBucket += '('
                }
                visited[i] = true;
                const result = dfs(makeGroup[i][1], temp, cnt + 1);
                if (result) {
                    checkBucket += ')'
                    return true;
                }
                if (temp.indexOf(start) === i){
                    const temp = checkBucket.replace(start, '(' + start);
                    checkBucket = temp;
                } else {
                    if(i === makeGroup.length - 1) {
                        checkBucket += ')'
                        console.log(i, start, checkBucket)
                        console.log(temp, makeGroup[i],  cnt)
                    }
                }
            } else if(i === makeGroup.length - 1) {
                checkBucket += ')'
            }
        }

        return false;
    }




    if(!dfs(makeGroup[0][0], [], 0)) {
        if(answer.length === 0){
            return 'error four';
        } else {
            return 'error five';
        }
    }
    const checkSort = answer.slice().sort();
    const checkDuplicate = checkSort.filter((ele, idx) => ele !== checkSort[idx + 1]).length;
    if(checkDuplicate !== answer.length) {
        return 'error three'
    }

    return answer;
}

// 검색 방지로 에러메세지 바꿈
