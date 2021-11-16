function solution (cacheSize, cities) {
    let cache = [];
    let time = 0;

    cities.forEach((city, idx) => {
        city = city.toLowerCase();

        const find = cache.find((ele)=>ele.name === city);

        if (!find) {
            let temp = {
                name: city,
                idx
            };
            cache.push(temp);
            time += 5;

            if (cache.length > cacheSize) {
                cache.shift();
            }
        } else {
            cache[cache.indexOf(find)].idx = idx;
            time += 1;
        }

        cache.sort((a,b) => {
            if(a.idx > b.idx) {
                return 1;
            } else if (a.idx < b.idx) {
                return -1
            }
        })
    })



    return time;
}

// console.log(solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
// console.log(solution(0,["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
// console.log(solution(2,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
console.log(solution(5,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))




