//N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
// 정렬하는 방법은 선택정렬입니다.
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        const min = Math.min(...arr.slice(i + 1));

        if(arr[i] > min) {
            const idx = arr.indexOf(min);
            arr[idx] = arr[i];
            arr[i] = min;
        }
    }

    return arr;
}

console.log(solution([13,5,11,7,23,15]))
console.log(solution2([13,5,11,7,23,15]))

function solution2(arr) {
    const length = arr.length;
    for(let i = 0; i < length; i++) {
        let idx = i;
        for(let j = i + 1;  j < length; j++) {
            if(arr[idx] > arr[j]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
    return arr;
}
