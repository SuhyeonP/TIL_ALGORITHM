/**
 * 프로그래머스 짝지어 제거하기 (lv-2)
 *
 * @author Suhyeon_Park
 * @param couple
 * @param https://programmers.co.kr/learn/courses/30/lessons/12973
 * @return
 */

function solution(s) {
    let bucket = [];

    for(let i = 0; i < s.length; i++) {
        if (bucket.length === 0 || bucket[bucket.length - 1] !== s[i]) {
            bucket.push(s[i])
        } else if (bucket[bucket.length - 1] === s[i]) {
            bucket.pop();
        }
    }
    return bucket.length > 0 ? 0 : 1;
}

console.log(solution('baabaa'))
