const solution = (orders, course) => {
    let menu = new Map();
    let answer = [];

    function combination (order, idx, count, prev) {
        if (prev.length === count) {
            const key = prev.sort().join('');
            menu.set(key, menu.has(key) ? (menu.get(key) + 1) : 1);
            return;
        }

        for (let i = idx; i < order.length; i++) {
            combination(order, i+1, count, [...prev, order[i]]);
        }
    }

    orders.forEach((order)=>{
        course.forEach((count)=>combination(order, 0, count, []))
    })

    menu = [...menu].filter((custom) => custom[1] > 1);

    course.forEach((count) => {
        let max = 0;
        const temp = menu.filter((custom) => {
            if (max < custom[1] && custom[0].length === count) {
                max = custom[1];
            }
            return custom[0].length === count;
        }).filter((ele) => ele[1] === max);

        temp.forEach((ele)=>answer.push(ele[0]));
    })

    return answer.sort();
}
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]))
