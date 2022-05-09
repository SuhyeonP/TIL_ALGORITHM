var objOne = {one: 1}
var objTwo = {two: 2};

objTwo = objOne;

objTwo.one = 3;

console.log(objOne)
console.log(objTwo)

var name = 'bit';
console.log(name.concat('coin')); //

var name = "bit";
var temp = new String(name); // js 가 만든 임시 변수
console.log(temp.concat("coin"));
temp = null;
