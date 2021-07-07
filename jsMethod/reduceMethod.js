const testArr = ['test', 'adsf', 'test', 'aas', 'asfd', 'asdf', 'test', 'asdf'];

const test1 = [...new Set(testArr)];
// console.log(test1);

const test2 = testArr.filter((ele, ind) => testArr.indexOf(ele) === ind);
// console.log(test2);

const test3 = testArr.reduce((nu, cur, ind) => nu.includes(cur) ? nu : [...nu, cur], [])
// console.log(test3)

testArr.reduce((unique, current, index) => {
    // console.log(unique, current, index);
    return unique.includes(current) ? unique : [...unique, current]
}, [])
// 중복제거


const t = [1, 3, 52, 5, 32, 1, 2, 34, 6, 6, 7, 82, 1];

const votes = ['kim', 'lee', 'park', 'hong', 'cha', 'park', 'lee', 'jung'];

const arrayObject = [
    {name: 'kim', age: 12},
    {name: 'park', age: 112},
    {name: 'lee', age: 12},
    {name: 'jung', age: 312},
    {name: 'cho', age: 132},
    {name: 'park', age: 12},
    {name: 'lee', age: 122},
    {name: 'hong', age: 72},
    {name: 'jung', age: 5},
    {name: 'sin', age: 7},
    {name: 'park', age: 17},
    {name: 'hong', age: 72},
]

const reducer = (accumulator, value, index, array) => {
    if(accumulator.hasOwnProperty(value)){
        accumulator[value] = accumulator[value] + 1;
    }else{
        accumulator[value] = 1
    }
    return accumulator
}

const initialValue = {};

// 같은요소 개수
const result = votes.reduce(reducer, initialValue)

// console.log(result)