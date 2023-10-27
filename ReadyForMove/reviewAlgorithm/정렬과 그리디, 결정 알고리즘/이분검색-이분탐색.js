//임의의 N개의 숫자가 입력으로 주어집니다.
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
// 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
// 단 중복값은 존재하지 않습니다.


// ▣ 입력설명
// 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
// 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

// ▣ 출력설명
// 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

// ▣ 입력예제 1
// 8 32
// 23 87 65 12 57 32 99 81
// ▣ 출력예제 1
// 3

// 시간 복잡도 logn 나와야함
// 이분검색은 무조건 자료가 정렬되어있어야함(오름이든 내림이든)
// 이분검색의 요점은 left, right변수가 필요함
// mid도 있음 (left + right) / 2 의 몫
// if로 arr[mid]가 target 인지 보고 맞으면 끝
// 아니면 left 나 right중에 하나를 값을 올리거나 내려야하는데
// arr[mid]값이 타겟보다 크면 당연히 mid부터 right쪽엔 없다는 뜻
// right를 미드로 낮춰야함
// left도 반대로 하면 같음
//

function solution(arr, target) {
    let answer = 0;
    const length = arr.length;
    let left = 0;
    let right = length - 1;
    arr.sort((a, b) => a - b);

    // left가 right보다 커지면 조건이 안맞고 이미 검사한곳이 됨
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(target === arr[mid]) {
            // 이건 0번째부터 답이 쳐지는게 아니라 1부터 첫번째로 쳐져서
            answer = mid + 1;
            break;
        }

        if (target < arr[mid]) {
            // -1 하는 이유는 검색한곳(arr[mid]보다 값이 작으니까 그부분도 빼도 됨!
            right = mid - 1;
        } else {
            // + 1 이유는 arr[mid]보다 값이 크니까 그 담부터 검사하면 됨
            left = mid + 1;
        }
    }

    return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))
