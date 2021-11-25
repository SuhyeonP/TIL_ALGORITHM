function solution (numbers) {
    if(numbers.length === 1) {
        return numbers;
    }

    numbers.sort((a, b) => a - b);
    const copy = numbers.slice().map((ele, idx) => [numbers[idx], ele.toString(2).match(/1/g).length]).sort((a, b) => a[1] - b[1]);

    return copy.map((ele) => ele[0]);
}

console.log(solution([31, 15, 7, 3, 2]));
console.log(solution([1, 2, 3, 4, 5]));
