//한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들 려고 한다.
// 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고,
// 각 회의가 겹치지 않게 하 면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라.
// 단, 회의는 한번 시작하면 중간에 중 단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

// [[1, 4], [2,3], [3,5], [4, 6], [5,7]] => 3
// [[3, 3], [1, ,3], [2, 3]] => 2

// 그리디

// 해설만 듣고 풀이한거
function solution(arr) {
    let endTime = 0;
    let answer = 0;

    arr.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1]
    });

    for(let [start, end] of arr) {
        if(start >= endTime) {
            endTime = end;
            answer++;
        }
    }


    return answer;
}

console.log(solution([[1, 4], [2,3], [3,5], [4, 6], [5,7]]))
console.log(solution([[3, 3], [1, 3], [2, 3]]))
console.log(solution2([[1, 4], [2,3], [3,5], [4, 6], [5,7]]))
console.log(solution2([[3, 3], [1, 3], [2, 3]]))

// 풀이
function solution2(arr) {
    let endTime = 0;
    let answer = 0;

    arr.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1]
    });

    for(let [start, end] of arr) {
        if(start >= endTime) {
            endTime = end;
            answer++;
        }
    }


    return answer;
}
