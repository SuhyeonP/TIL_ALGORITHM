function solution(k, arr) {
    const length = arr.length;
    function isValid(arr) {
        const [start, end] = arr;

        return 0 <= start && 0 <= end && start < length && end < length;
    }

    let max = 0;

    for (let i = 0; i <= length - k; i++) {
        for(let j = 0; j <= length - k; j++) {
            let count = 0;
            for(let x = 0; x < k; x++) {
                for(let y = 0; y < k; y++) {
                    if (isValid([i + x, j + y]) && arr[i + x][j + y]) {
                        console.log(arr[i + x][j + y], [i + x, j + y], [i, j])
                        count++;
                    }
                }
            }

            max = Math.max(count, max);
        }
    }

    return max;
}

// ks
console.log(solution(2,[[1,0,0,0],[0,0,0,1],[0,1,1,0],[0,1,1,0]]))
// [1,0,0,0]
// [0,0,0,1]
// [0,1,1,0]
// [0,1,1,0]
