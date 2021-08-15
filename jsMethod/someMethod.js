// some 함수는 배열내에서 제시하는 함수에 조건이 하나라도 일치하면 true, 하나도 안 만족하면 false 를 return 한다.

function isNegative(element, index, array) {
    return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50, 19]);
const int7 = new Int8Array([-10, 20, -30, 40, -50]);
const positives = new Int8Array([10, 20, 30, 40, 50, -2]);
const positives2 = new Int8Array([10, 20, 30, 40, 50]);

console.log(int8.some(isNegative));
// true
console.log(int7.some(isNegative));
// expected output: true

console.log(positives.some(isNegative));
// true
console.log(positives2.some(isNegative));
// false

