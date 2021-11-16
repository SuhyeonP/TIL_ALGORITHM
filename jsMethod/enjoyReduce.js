function tree(nodes) {
    const splitData = nodes.match(/[A-Z)]/g);
    let filteringData = [];
    let cache = [];
    let error = '';
    splitData.forEach((ele) => {
        if (ele === ')') {
            filteringData.push(cache);
            cache = [];
        } else {
            cache.push(ele);
        }
    });
    filteringData.sort();
    const head = filteringData[0][0];

    let newMap = new Map();

    filteringData.forEach((ele) => {
        if(ele[0]>ele[1]) {
            error = 'E3';
            return;
        }
        newMap.set(ele[0], newMap.has(ele[0]) ? [...newMap.get(ele[0]),ele[1] ] : [ele[1]])
        if(newMap.get(ele[0]).length > 2) {
            error = 'E1';
            return;
        }
    });

    if(error !== '') {
        return error;
    }


    console.log(newMap)

    let answer = loop(newMap, newMap.get(head), head, {})[head];


    return `(${head}${answer})`;
}


function loop(map, children, key, prev) {
    const temp = children.reduce((before, now, idx) => {
        const checkChildren =  map.get(now);
        if (checkChildren) {
            const temp = loop(map, checkChildren, now, before);
            const value = before[key];
            let firstText = '';
            children.forEach((child) => {
                const childTemp = temp[child];
                if(childTemp) {
                    firstText += `(${child}${childTemp})`;
                }
            })
            if(!value) {
                before[key] = firstText;
                return before;
            } else {
                before[key] = firstText;
                return before;
            }
        } else {
            const value = before[key];
            if (value) {
                before[key] = before[key] +`(${now})`;
            } else{
                before[key] = `(${now})`;
            }
            return before;
        }
    },prev);
    return temp;
}

let ex7 = '(A,B) (B,D) (A,C) (C,E)';
// console.log(tree(ex1))
// console.log(tree(ex2))

// todo check error case