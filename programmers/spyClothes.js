function solution (clothes) {
    let answer = 0;
    let multi = 1;
    const clothesMap = new Map();

    clothes.forEach((ele) => {
        clothesMap.set(ele[1], clothesMap.has(ele[1]) ? clothesMap.get(ele[1]) + 1: 1);
    });

    for(const [key, value] of [...clothesMap]){
        answer += value;
        multi *= (value + 1);
    }

    // 하나씩 안입는경우도 있음

    return clothesMap.size === 1 ? answer : multi - 1;
}


console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]))


//function solution(clothes) {
//     for(var i=0;i<clothes.length;i++){
//         var temp=clothes[i][0]
//         clothes[i][0]=clothes[i][1];
//         clothes[i][1]=temp;
//     }
//     clothes.sort()
//     var count=clothes.length;//하나씩 입는경우
//     var arr1=clothes[0].filter((ele,ind)=>{
//         return ele!=clothes(ind+1)
//     })//종류counting
//     if(arr1.length==1){
//         return count;
//     }else{
//
//     }
//
// }
