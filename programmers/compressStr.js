// https://programmers.co.kr/learn/courses/30/lessons/60057
// 프로그래머스 문자열 압축하기
// lv2
// 완전 탐색 , 완전탐색


function solution(str){
    const repeat = str.length;
    const tempArr = [];

    // 가능한 수  = 1 ~ 문자열길이 /2 이하
    // 각 단위에서 압축된 문자열 구하기
    for (let i = 0; i < repeat; i++) {
        let num = i + 1;
        let count = 1;
        let newStr = '';

        for(let j = 0; j < str.length; j = j+ num) {
            let currentSub = str.substring(j, j + num);
            let nextSub = str.substring(j + num, j + num + num);
            console.log('j: ', j, currentSub, nextSub)
            if (currentSub === nextSub) {
                count += 1;
            } else if (count !== 1){
                newStr = newStr + count + currentSub;
                count = 1;
            } else {
                newStr = newStr + currentSub;
                count = 1;
            }
            console.log('j: ', j, currentSub, nextSub)
        }
        tempArr.push(newStr.length)
    }
    console.log(tempArr);
    // 각 문자열 개수중 젤 짧은거
    return Math.min(...tempArr);
}

const ex1 = "aabbaccc";
const ex2 = "ababcdcdababcdcd";
const ex3 = "abcabcdede";
const ex4 = "abcabcabcabcdededededede";
const ex5 = "xababcdcdababcdcd"


/**
 * 1. 문자열.substring(시작위치, 종료위치);
 * 시작위치부터 종료위치전까지 문자열을 추출한다.
 * 문자열 길이를 초과해도 자동 보정된다고한다..?
 *
 *
 * 문풀법:
 * 문자열은 문자열길이의 반을 잘라야 압축된다.
 * 1부터 문자열길이/2 만큼 반복하며 문자열을 압축한다.
 */

console.log(solution(ex1))
// 7
// console.log(solution(ex2))
// // 9
// console.log(solution(ex3))
// // 8
// console.log(solution(ex4))
// // 14
// console.log(solution(ex5))
// 17


