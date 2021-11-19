function solution(arr) {
    const copy = arr.map((ele) => ele.toString()).sort((a, b) => (b+a) - (a+b));

    if(copy[0] === '0') {
        return '0'
    }

    return copy.join('');
}

//function solution(array){
//     let answer=array.map(x=>x+'').sort((a,b)=>(b+a)-(a+b)).join('')
//     return answer[0]==='0'?'0':answer;
// }

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))
console.log(solution([0, 0, 0]))
