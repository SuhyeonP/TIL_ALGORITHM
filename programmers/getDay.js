function solution(a, b) {
    const week=['THU','FRI','SAT','SUN', 'MON','TUE','WED'];

    const basic = new Date(20160001);
    let compare = new Date();
    compare.setFullYear(2016);
    compare.setMonth(a-1);
    compare.setDate(b);
    const basicTime = Math.ceil(basic.getTime() / (1000 * 60 * 60 * 24));
    const compareTime = Math.ceil(compare.getTime() / (1000*60*60*24));
    return week[(compareTime - basicTime) % 7];
}

console.log(solution(5, 24))
