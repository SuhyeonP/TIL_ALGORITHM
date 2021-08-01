/**
 * 프로그래머스 로또 (lv-1)
 *
 * @author Suhyeon_Park
 * @param lottery
 * @param https://programmers.co.kr/learn/courses/30/lessons/77484
 * @return
 */

function getRank(count) {
    switch (count){
        case 2:
            return 5;
        case 3:
            return 4;
        case 4:
            return 3;
        case 5:
            return 2;
        case 6:
            return 1;
        default:
            return 6;
    }
}

function solution(lotto, win) {
    let answer = new Array(2)

    let countZero = lotto.filter((ele) => ele === 0).length;
    let sortLottery = lotto.filter((ele) => ele !== 0).sort((a, b) => a - b);
    let sortWin = win.sort((a, b) => a - b);
    let tempJoin = sortWin.concat(sortLottery).sort((a, b) => a - b);

    let only = new Set([...tempJoin]).size;

    answer[0] = getRank(sortLottery.length + sortWin.length - only + countZero)
    answer[1] = getRank(sortLottery.length + sortWin.length - only)

    return answer;
}

// 최적화 한 풀이

function solution2(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    // switch case 가 아니라 배열 순서로,,, 대박이네

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    // includes 를 사용할것을 생각 못했
    let zeroCount = lottos.filter(v => !v).length;
    // !0 이 true 를 생각못함

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}




solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]) // [3,5]
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])  // [1,6]
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])  // [1,1]
