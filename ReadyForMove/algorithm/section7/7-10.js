//임의의 N개의 숫자가 입력으로 주어집니다.
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중
// 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
// 단 중복값은 존재하지 않습니다.

// [23, 87, 65, 12, 57, 32, 99, 81], 32 => 3

function solution(arr, find) {
    const copy = arr.sort((a, b) => a - b);

    return copy.indexOf(find) + 1;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))
console.log(solution2([23, 87, 65, 12, 57, 32, 99, 81], 32))

// 이게 이분탐색
function solution2(arr,find) {
    arr.sort((a, b) => a - b);

    let lt = 0;
    let rt = arr.length - 1;
    let answer = 0;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        if(arr[mid] === find) return mid + 1;
        else if(arr[mid] > find) {
            rt = mid - 1;
        } else lt = mid + 1;
    }
    return answer;
}
console.log(solution2RE([23, 87, 65, 12, 57, 32, 99, 81], 32))


function solution2RE(arr, find) {
    arr.sort((a, b) => a - b);

    let lt = 0;
    let rt = arr.length - 1;
    let answer = 0;
    while (lt <= rt) {
        let mid = Math.floor((lt  + rt) / 2);

        if(arr[mid] === find) return mid + 1;
        else if(arr[mid] > find) rt = mid - 1;
        else lt = mid + 1
    }

    return answer;
}
