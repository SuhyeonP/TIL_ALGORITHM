//한 개의 문자열 s와 문자 t가 주어지면
// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를
// 출력하는 프로그램을 작성하세요

//teachermode e
//10121012210

function solution(str, s) {
    const split = str.split(s);
    const bucket = []

    for (let i = 0; i < split.length; i++) {
        const part = split[i];
        if (part === '') {
            bucket.push(0);
        } else {
            const len = part.length;
            for(let j = 0; j < len; j++) {
                const min = Math.min(j + 1, len - j);
                bucket.push(min);
            }
            bucket.push(0)
        }
    }

    return bucket;
}

console.log(solution('teachermode', 'e'))
console.log(solution('eaeabe', 'e'))
