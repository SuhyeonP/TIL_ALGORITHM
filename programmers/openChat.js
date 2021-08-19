// https://programmers.co.kr/learn/courses/30/lessons/42888
// 오픈 채팅방

let ex1 = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

function solution (record) {
    const splitData = record.map((ele)=>ele.split(' '));
    const filterData = splitData.filter(ele=>ele[0]!=='Change');
    const length = filterData.length;
    let setData = new Map();
    let answer = new Array(length);
    splitData.forEach((ele)=>{
        if (ele[2] !== undefined){
            setData.set(ele[1],ele[2]);
        }
    });

    for(let i = 0; i < length; i++){
        answer[i] = [setData.get(filterData[i][1]),'님이',filterData[i][0]==='Enter'?' 들어왔습니다.':' 나갔습니다.']
    }
    return answer.map(ele=>ele.join(''));
}

console.log(solution(ex1));
