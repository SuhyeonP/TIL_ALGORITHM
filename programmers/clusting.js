function solution (str1, str2) {
    const str1Map = new Map();
    const str2Map = new Map();

    let min = 0;
    let max = 0;

    let same = [];

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for(let i = 0; i<str1.length -1; i++) {
        const checkReg = str1.substring(i, i+2);
        if(!/[^a-z]/g.test(checkReg)){
            str1Map.set(checkReg, str1Map.has(checkReg) ? str1Map.get(checkReg) + 1 : 1);
            same.push(checkReg);
        }
    }

    for(let i = 0; i<str2.length -1; i++) {
        let checkReg = str2.substring(i, i+2);
        if(!/[^a-z]/g.test(checkReg)){
            str2Map.set(checkReg, str2Map.has(checkReg) ? str2Map.get(checkReg) + 1 : 1);
            same.push(checkReg);
        }
    }

    let temp = same.sort();
    let dif = same.filter((ele, idx) => ele !== temp[idx+1]);

    if([...str1Map].length === 0 && [...str2Map].length === 0) {
        return 65536;
    }

    let copy1 = [...str1Map];

    copy1.forEach((ele, idx) => {
        if (str2Map.has(ele[0])) {
            min += Math.min(ele[1], str2Map.get(ele[0]));
        }
    })

    dif.map((ele) => {
        if (str1Map.has(ele) && str2Map.has(ele)) {
            max += Math.max(str1Map.get(ele), str2Map.get(ele));
        } else {
            max += str1Map.has(ele) ? str1Map.get(ele) : str2Map.get(ele);
        }
    });

    return Math.floor(65536 * (min/max));
}

console.log(solution('FRANCE', 'french'))
console.log(solution('handshake', 'shake hands'))
// console.log(solution('aa1+aa2', 'AAAA12'))
// console.log(solution('E=M*C^2', 'e=m*c^2'))
// console.log(Math.floor(65536 * (2/3)))