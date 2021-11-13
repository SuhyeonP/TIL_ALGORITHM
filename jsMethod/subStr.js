
/**
 * 1. 문자열.substring(시작위치, 종료위치);
 * 시작위치부터 종료위치 전 까지 문자열을 추출한다.
 * 문자열 길이를 초과해도 자동 보정된다고한다..?
 * 시작위치부터(index기준) 부터 종료위치 전!!!! 전!!
 *
 * 문풀법:
 * 문자열은 문자열길이의 반을 잘라야 압축된다.
 * 1부터 문자열길이/2 만큼 반복하며 문자열을 압축한다.
 */


const ex1 = "aabbaccc";
console.log(ex1.substring(1,3))
// ab
console.log(ex1.substring(0,2))
// aa
const ex2 = "ababcdcdababcdcd";

console.log(ex1.substring(0,1))
