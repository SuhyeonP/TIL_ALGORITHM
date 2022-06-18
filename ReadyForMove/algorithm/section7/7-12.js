//N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며,
// 마구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고,
// 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때
// 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

// [1,2,8,4,9], 3(말 수) => 3

// 문제를 더 쉽게 이해하자면 여러말 사이의 간격이 두마리 사이 간격이 먼저 1이엿으면 이후의 말 거리는 1이상이여야함
// 만약 처음부터 두 말 사이의 거리가 4라면 1, 8, 없음 모든 말 간격들이 최솟값 이상이여야한다.
function countHelp(locations, mid) {
    let cnt = 1;
    let ep = locations[0];

    for (let i = 1;  i <locations.length; i++) {
        if(locations[i] - ep >= mid) {
            ep = locations[i];
            cnt ++;
        }
    }
    return cnt;
}


function solution(locations, horseCnt) {
    locations.sort((a, b) => a - b);
    let lt = 1;
    // 좌표의 첫값이 아니라 두말 사이의 거리가 될수있는 최소값이 1인것임
    // (2-1도 아니고 그냥 같은공간 아니니까 옆에 있다고 가정하면 1이라는것임)
    let rt = Math.max(...locations);
    let answer = 0;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        if(countHelp(locations, mid) >= horseCnt) {
            lt = mid + 1;
            answer = mid;
        } else rt = mid - 1;
    }

    return answer;
}

console.log(solution([1,2,8,4,9], 3))

console.log(solution2([1,2,8,4,9], 3))

function count(locations, mid) {
    let cnt = 1;
    let endPoint = locations[0];

    for(let i = 1; i < locations.length; i++) {
        if(locations[i] - endPoint >= mid) {
            cnt ++;
            endPoint = locations[i];
        }
    }
    return cnt;
}

function solution2(locations, horseCnt) {
    let answer = 0;
    locations.sort((a, b) => a - b);
    let lt = 1;
    let rt = locations[locations.length - 1];

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);

        if(count(locations, mid) >= horseCnt) {
            answer = mid;
            lt = mid + 1;
        } else rt = mid - 1;
    }

    return answer;
}
