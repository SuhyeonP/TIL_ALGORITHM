// N개의 마구간이 수직선상에 있습니다.
// 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며,
// 마 구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데,
// 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고,
// 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때
// 가장 가까운 두 말의 거리가 최대가 되는
// 그 최대 값을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=200,000)과
// C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
// 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

// ▣ 입력예제 1
// 5 3
// 1 2 8 4 9

// ▣ 출력예제 1
// 3

// 먼저 좌표 순서대로 말이 있는거라서
// 이 순서를 소트 해야함

function checkInput(where, distance) {
    let before = where[0];
    // 첫칸에 말 넣고 시작하니 한마리는 들어감
    let answer = 1;

    for(let i = 0; i < where.length; i++) {
        // 거리가 주어진거보다 크거나 같을때 말을 넣을거니까 말 넣어서 ++ , 말 넣은 위치로 바꿈
        if (where[i] - before >= distance) {
            answer ++;
            before = where[i];
        }
    }

    return answer;
}

function solution (where, horses) {
    where.sort((a, b) => a - b);

    // 거리를 구해야하는거라 배열의 0번째를 쓰는게 아니라 거리로 생각해야해서 1을 사용
    let left = 1;
    let right = where[where.length - 1];

    if(horses === 2) return right - left;

    let answer = 0;
    // mid로 거리를 선정하고 그렇게 했을때 말 마리 수에 맡게 배치가 가능한지 체크해야함
    // 말은 무조건 왼쪽부터 넣어야함(그냥 그럼!)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // mid거리로 했을때 마리수 보다 적게 나왔다는건 그 값 이상인 거리는 더 안됨
        if (checkInput(where, mid) < horses) {
            right = mid - 1;
        } else {
            left = mid + 1;
            answer = mid;
        }
    }
    return answer;
}

console.log(solution([1,2,8,4,9], 3))

