//A, B 두 사람이 가위바위보 게임을 합니다.
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
function solution(a, b) {
    const answer = [];
    for(let i = 0; i < a.length; i++) {
        const compare = a[i] - b[i];

        switch (compare) {
            case 0:
                answer.push('D');
                break;
            case 1:
            case -1:
                answer.push('A');
                break;
            default:
                answer.push('B')

        }
    }

    return answer;
}

console.log(solution([2,3,3,1,3],[1,1,2,2,3]))
