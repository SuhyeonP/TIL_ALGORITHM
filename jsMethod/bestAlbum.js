function addAll(arr){
    return arr.reduce((before, now) => {
        return before + now
    }, 0);
}

function solution(genres, plays) {
    const music = new Map();
    let counting = [];
    let indexes = {};
    genres.forEach((ele, idx) => {
        music.set(ele,
            music.has(ele) ? [...music.get(ele), plays[idx]].sort((a,b)=>b-a) : [plays[idx]]);
        const value = indexes[ele+plays[idx]];
        if(value) {
            indexes[ele+plays[idx]] = [...value, idx].sort((a,b) => a - b);
        } else {
            indexes[ele+plays[idx]] = [idx];
        }
    });
    const temp = [...music].sort((now, after) => addAll(after[1]) - addAll(now[1])).map((ele) => [ele[0],ele[1].slice(0,2)]);
    for(const ele of temp) {
        const check = ele[1].map((play) => {
            const tempIndex = indexes[ele[0]+play][0];;
            indexes[ele[0]+play] = indexes[ele[0]+play].splice(1,2);
            return tempIndex;
        });
        counting.push(...check);
    }

    return counting;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop", "pop"], [500, 2500, 150, 800, 800, 2500]))

function solution2(genres, plays) {
    const count = {};
    let answer = [];
    const acc = genres.reduce((a, c, i) => {
        count[c] ? count[c].push([i, plays[i]]) : count[c] = [[i, plays[i]]];
        return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
    }, new Map());


    [...acc].sort((a, b) => b[1] - a[1]).map(v => {
        answer = answer.concat(count[v[0]].sort((c, d)=>d[1]-c[1]).slice(0,2));
    });
    return answer.map(v=>v[0]);
}

console.log(solution2(["classic", "pop", "classic", "classic", "pop", "pop"], [500, 2500, 150, 800, 800, 2500]))
