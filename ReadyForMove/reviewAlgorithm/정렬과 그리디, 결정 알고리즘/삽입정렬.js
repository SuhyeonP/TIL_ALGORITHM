//N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬하는 방법은 선택정렬입니다.
//
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
// 각 자연수는 정수형 범위 안에 있습니다.
//
// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.
//
// ▣ 입력예제 1
// 6
// 13 5 11 7 23 15
//
// ▣ 출력예제 1
// 5 7 11 13 15 23

// 간단하면서 효율적인 정렬 알고리즘 중 하나입니다.
// 이 알고리즘은 "적절한 위치에 삽입"하며 배열을 정렬하는 방식으로 작동합니다. 삽입 정렬은 비교적 작은 배열 또는 거의 정렬된 배열에서 효과적인 알고리즘으로 사용됩니다.
//
// 삽입 정렬의 기본 동작은 다음과 같습니다:
//
// 배열의 두 번째 요소부터 시작합니다. (첫 번째 요소는 이미 정렬된 상태로 간주합니다.)
// 현재 요소를 선택하고, 그 요소를 이미 정렬된 부분 배열과 비교합니다.
// 정렬된 부분 배열에서 현재 요소보다 큰 요소를 찾을 때까지 왼쪽으로 이동하면서 요소를 뒤로 이동시킵니다.
// 현재 요소보다 큰 요소를 찾았다면, 현재 요소를 해당 위치에 삽입합니다.
// 배열의 모든 요소가 정렬될 때까지 위의 단계를 반복합니다.
// 삽입 정렬은 이러한 단계를 반복하여 배열을 정렬합니다.
// 알고리즘의 시간 복잡도는 평균 및 최선의 경우에 O(n)이며,
// 최악의 경우에는 O(n^2)입니다. 최선의 경우는 이미 정렬된 배열이며,
// 평균 및 최악의 경우는 배열이 역순으로 정렬되어 있는 경우입니다.
//
// 삽입 정렬은 다른 정렬 알고리즘에 비해 상대적으로 간단하며,
// 작은 데이터셋에서는 효율적일 수 있습니다.
// 그러나 대규모 데이터셋에서는 다른 고급 정렬 알고리즘인 병합 정렬 또는 퀵 정렬이 더 효율적입니다.

// i가 정해지면 j가 돌아야하는데 j라는건 i-1 부터 0까지 돌아야한다. (i 바로 앞에있는 값들은 탐색한다는것)
// j는 i-1부터 0까지 돌아야한다. 즉 앞으로 간다는거고
// j가 끝난지점 j+1 지점에 값을 복사해뒀을거고 거기에 임시저장해둔 값을 넣는다.


// temp = arr[i]
// arr[j] > temp => arr[j + 1] = arr[j]

//11 7 5 6 10 9
// temp = 7      11 11 5 6 10 9 , j가 -1에서 끝나서 arr[j+1] = temp => 7 11 5 6 10 9
// temp = 5      7 11 5 6 10 9 에서 뒤로 복사해 가면서 하면 7 11 11 6 10 9 ,  7 7 11 6 10 9  => j가 -1 에서 끝나서 arr[j+1] = temp => 5 7 11 6 10 9
// temp = 6      5 7 11 6 10 9 에서 뒤로 복사해가며 5 7 11 11 10 9, 5 7 7 11 10 9,
// 여기서 0번째는 temp보다 숫자가 작아서 break 했고 그럼 j-1은 현재 0 이였음 => arr[j + 1] = temp로 하면
// 5 6 7 11 10 9 가 됨

function solution(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        const temp = arr[i];

        let j = 0;

        for (j = i - 1; j>= 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }

        arr[j + 1] = temp;
    }

    return arr;
}
console.log(solution([13,5,11,7,23,15]))
console.log(solution([11, 7, 5, 6, 10, 9]))
