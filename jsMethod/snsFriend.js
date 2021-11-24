function solution(n, relation) {
    const check = new Map();

    const copy = relation.slice().map((ele) => ele.sort((a,b) => a - b));

    for(const value of copy) {
        check.set(value[0], check.has(value[0]) ? [...check.get(value[0]), value[1]] : [value[1]])
        check.set(value[1], check.has(value[1]) ? [...check.get(value[1]), value[0]] : [value[0]])
    }

    function getMoreFriend (me, friends) {
        let myFriend = 0;
        for(const friend of friends) {
            if(check.has(friend)) {
                myFriend += check.get(friend).length;
            }
        }
        return myFriend
    }
    let answer = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        answer[i] = getMoreFriend(i+1, check.get(i+1))
    }


    return answer;
}

console.log(solution(5, [[1,2], [4,2], [3,1], [4,5]]))
console.log(solution(7, [[1,2], [4,2], [3,1], [4,5], [6,7]]))
