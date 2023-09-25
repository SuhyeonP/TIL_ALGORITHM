// this: 함수를 호출하는 객체 (자동으로 자신을 호출하는 객체가 this에 할당하게됨 - 지정하지 않으먄)
// 존재하는 이유?

function menuGlobal() {
    console.log('todays dinner is', this.name);
}

const myDinner = {
    name: 'mandu',
    menu: menuGlobal
}

myDinner.menu() // todays dinner is mandu

// 일반적으로 this 값은 자동으로 할당되지만, 상황에 따라 제어할 수 있어야한다.


// call()
// call 메서드는 this의 값을 바꿀수도 있고, 함수를 실행할 때 사용할 인수도 전달이 가능하다.

function skinGlobal(item) {
    console.log('this skin is', item, this.name);
}

const joy = {
    name: 'joy'
}

const izreal = {
    name: 'izreal'
}

skinGlobal.call(joy, 'edg') // this skin is edg joy
// joy객체를 바라보게 만들어줌(this 는 joy객체를 바라봄)


// apply()
// apply 메서드는 함수를 실행할 때 인수를 배열로 묶어 한번에 전달한다.

function factory(item1, item2) {
    // [item1, item2].forEach(ele => {
    //     console.log(this) // bind한 객체 {name: ''}
    //     console.log('this is ', ele, this.name)
    // }, this)

    // [item1, item2].forEach((ele) => {
    //     console.log(this) // 이건 this를 안넣어도 객체 잘 나옴
    // })

    // [item1, item2].forEach(function (el) {
    //     console.log(this) // this를 안넣어주면 상위객체가 window로 잡힘, function (함수) 을 실행하는 객체를 바라보게됨.( => this 안넣으면)
    // })
    [item1, item2].forEach(function (el) {
        // console.log(this) // this를 넣어주면 apply한 객체로 잘 잡힘
        console.log('this is ', el, this.name)
    }, this) // 해당부분의 this는 상위스코프의 this를 바라보게함
}

const joy = {
    name: 'joy'
}
const lux = {
    name: 'lux'
}

factory.apply(joy, ['edg', 'prestige'])

// call() 과 apply()의 차이
// call은 함수를 실행 할 때 전달할 인수를 하나하나 전달한다면
// apply는 전달할 인수를 배열로 묶어 한번에 전달한다. 그래서 인수를 두개만 사용한다. 인수를 두개만 사용한다. (this를 지정할 객체와, 전달할 인수)
// 인수를 배열로 보낸다는 점 빼고는 call과 apply는 동일한 기능을 수행한다.
function test(a, b) {
    console.log(a, b)
}

const abc = {
    name: 'test'
}


test.call(abc, [1,2,3], 4) // [1,2,3] 4
test.apply(abc, ['a','b','c','d']) // a b


// bind()
// bind메서드는 es5에서 추가되었다.
// this의 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시킨다.


// bind()
// bind메서드는 es5에서 추가되었다.
// this의 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시킨다.

// bind()
// bind메서드는 es5에서 추가되었다.
// this의 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시킨다.

// bind()
// bind메서드는 es5에서 추가되었다.
// this의 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시킨다.

function restaurant(item) {
    console.log("this restaurant is ", this.name, 'and best is ', item)
}

const mine = {
    name: '몽탄'
}

const yours = {
    name: '몽중헌'
}

const recommendForMe = restaurant.bind(mine); // this가 mine이 됨
recommendForMe('우대갈비') //this restaurant is  몽탄 and best is  우대갈비
const recommendForYou = restaurant.bind(yours);
recommendForMe('짜장면') //this restaurant is  몽탄 and best is  짜장면

recommendForMe.menuMine = recommendForMe;
recommendForMe.menuMine('백김치'); // this restaurant is  몽탄 and best is  백김치

// 화살표 함수와 this
// 화살표 함수의 this는 일반적인 this처럼 함수를 호출한 객체를 할당하지 않고, 바로 상위 스코프의 this를 할당한다.
// 화살표함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

// this는 함수를 호출하는 객체를 의미한다.
// call과 apply는 this에 할당되는 객체를 지정할 수 있다.
// Bind메서드는 this에 할당되는 객체가 고정된 새로운 함수를 생성한다.
// 화살표 함수에서 this는 상위스코프의 객체를 할당받는다.
