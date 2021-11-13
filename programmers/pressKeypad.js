
const getDistance = (key, hand, nowLeft, nowRight) => {
    const keyPad = {
        1: [3, 0], 2: [3, 1], 3: [3, 2],
        4: [2, 0], 5: [2, 1], 6: [2, 2],
        7: [1, 0], 8: [1, 1], 9: [1, 2],
        '*': [0, 0], 0: [0, 1], '#': [0, 2]
    }
    const leftGap = Math.abs(keyPad[key][0] - keyPad[nowLeft][0]) + Math.abs(keyPad[key][1] - keyPad[nowLeft][1]);
    const rightGap = Math.abs(keyPad[key][0] - keyPad[nowRight][0]) + Math.abs(keyPad[key][1] - keyPad[nowRight][1]);

    if (leftGap === rightGap) return hand === 'left' ? 'L' : 'R'
    return leftGap > rightGap ? 'R' : 'L'
}


const solution = (number, hand) => {
    let answer = ''


    let nowLeft = '*';
    let nowRight = '#';

    number.forEach((key) => {
        if (key % 3 === 1) {
            answer += 'L';
            nowLeft = key;
        } else if(key % 3 === 0 && key !== 0) {
            answer += 'R';
            nowRight = key;
        } else {
            let check = getDistance(key, hand, nowLeft, nowRight);
            answer += check;
            if (check === 'R') {
                nowRight = key;
            } else {
                nowLeft = key;
            }
        }
    })

    return answer;
}

//2 5 8 0
let ex1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let ans1 = 'LRLLLRLLRRL'
let ex2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let ans2 = 'LRLLRRLLLRR';
let left = 'left';
let right = 'right';

console.log(solution(ex2, left))


