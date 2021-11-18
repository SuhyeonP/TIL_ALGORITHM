function solution (run, complete ){
    run.sort();
    complete.sort();

    for(let i = 0; i < run.length; i++) {
        if(run[i] !== complete[i]){
            return run[i]
        }
    }
}

//function solution(arr1,arr2){
//     var arr=arr1.concat(arr2);
//     arr.sort();
//     var arr3=[]
//     for(var i=0;i<arr.length-1;i+=2){
//         if(arr[i]==arr[i+1]){
//             arr3.push(0)
//         }else{
//             arr3.push(arr[i])
//             arr3.push(arr[i+1])
//         }
//     }
//     arr3.push(arr[arr.length-1])
//     var arr4=arr3.filter(x=>x!=0)
//     if(arr4[0]==arr4[1]){
//         var answer=arr4[2]
//     }else{
//         var answer=arr4[0]
//     }
//     return answer;
// }


console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
