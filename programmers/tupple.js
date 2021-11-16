function solution (str) {
    let answer = [];
    let data = new Map();
    str = str.substring(1, str.length-1).split('},{');
    let numberArr = [];
    str.forEach((ele) => {
        ele = ele.replace(/[^0-9]/g, ' ');
        numberArr.push(ele.split(' ').filter((ele)=>ele!=='').map((item)=>Number(item)))
    })

    numberArr.forEach((num) => {
        num.forEach((ele)=>{
            data.set(ele, data.has(ele) ? data.get(ele) +  1: 1)
        })
    })
    data = [...data].sort((a,b)=>b[1]-a[1])

    data.forEach((ele)=>{
        answer.push(ele[0])
    })

    return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
console.log(solution("{{20,111},{111}}"))