//오름차순으로 정렬이 된 두 배열이 주어지면
// 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
// 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.

// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
//▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.

// ▣ 입력예제 1
// 3
// 1,3,5
// 5
// 2,3,6,7,9
// ▣ 출력예제 1 12335679

function solution(arr1, arr2) {
    const answer = [];

    const l1 = arr1.length;
    const l2 = arr2.length;

    let i = 0, j = 0;

    while (i !== l1 && j !== l2) {
        if (arr1[i] < arr2[j]) {
            answer.push(arr1[i++]);
        } else {
            answer.push(arr2[j++]);
        }
    }

    while (i < l1) answer.push(arr1[i++]);
    while (j < l2) answer.push(arr2[j++]);

    return answer;
}