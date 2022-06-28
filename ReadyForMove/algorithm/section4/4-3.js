//현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다.
// 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
// A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는
// 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

//
// 3412
// 4321
// 3142

// 4명의 학생 3번의 시험 , 순서대로 1234등이고 학생번호
function solution(nums) {
    const checkOrder = new Map();

    for(let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[1].length; j++) {
            checkOrder.set(j + 1, checkOrder.has(j + 1) ? [...checkOrder.get(j + 1), nums[i][j]] : [nums[i][j]]);
        }
    }

    return checkOrder// 이 이후로 모르겟다...
}


function solution2Prev(nums) {
    let answer = 0;

    const possible = []

    for (let i = 0; i < nums[0].length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            if (i !== j) possible.push([i + 1,j + 1]);
        }
    }

    for(let ele of possible) {
        let flag = true;
        for (let i = 0; i < nums.length; i++) {
            let mento = 0;
            let menti = 0;
            for (let j = 0; j < nums[0].length; j++) {
                if(nums[i][j] === ele[0]) mento = j;
                if(nums[i][j] === ele[1]) menti = j;
            }
            if(mento > menti) {
                flag = false;
                break;
            }
        }
        if (flag) {
            answer ++;
        }
    }
    return answer;
}

console.log(solution2Prev([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]))


console.log(solution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]))

function solution2(students) {
    let answer = 0;
    const testCount = students.length;
    const studentsCount = students[0].length;

    for (let i = 1; i <=studentsCount; i++) {
        for (let j = 1; j <= studentsCount; j++) {
            if(i === j) continue; // 이건 내가 추가한거
            let cnt = 0;

            for (let k = 0; k < testCount; k++) {
                let mento = 0;
                let menti = 0;

                for(let s = 0; s < studentsCount; s++) {
                    if (students[k][s] === i) mento = s;
                    if (students[k][s] === j) menti = s;
                }
                if(mento < menti) cnt++;
            }
            if (cnt === testCount) answer ++;
        }
    }
    return answer;
}


function solution3(students) {
    let answer = 0;

    const stdCnt = students[0].length;
    const testCnt = students.length;

    for (let i = 1; i <= stdCnt; i++) {
        for (let j = 1; j <= stdCnt; j++) {
            if(i === j) continue;
            let flag = true;
            for (let k = 0; k < testCnt; k++) {
                let mento = 0;
                let menti = 1;

                for (let s = 0; s < stdCnt; s++) {
                    if(students[k][s] === i) mento = s;
                    if(students[k][s] === j) menti = s;
                }
                if (mento > menti) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                answer ++;
            }
        }
    }


    return answer;
}

console.log(solution3([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]))
console.log(solutionRR([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]))

function solutionRR(students) {
    let answer = 0;
    const testCount = students.length;
    const studentsCount = students[0].length;
    for(let i = 1; i <= studentsCount; i++) {
        for(let j = 1; j <= studentsCount; j++) {
            // i & j 는 학생번호
            if(i === j) continue;
            let cnt = 0;

            for(let k = 0; k < testCount; k++) {
                // k번째 시험
                let mento = 0;
                let menti = 0;

                for(let s = 0; s < studentsCount; s++) {
                    // s는 등수
                    if(students[k][s] === i) mento = s;
                    if(students[k][s] === j) menti = s;
                }
                if(mento > menti) cnt ++; // 해당 시험에서는 멘토가 될수 있어서 더함
            }
            if(testCount === cnt) answer ++; // 모든 시험횟수랑 멘토가능 횟수랑 똑같아야함
        }
    }

    return answer;
}

console.log(solution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]))

function solutionRRRRR(students) {
    let answer = 0;
    const studentCount = students[0].length;
    const testTime = students.length;

    for(let mento = 1; mento <= studentCount; mento++) {
        for(let menti = 1; menti <= studentCount; menti++) {
            let count = 0;

            for(let test = 0; test < testTime; test++) {
                let std1 = 0;
                let std2 = 0;

                for(let order = 0; order < studentCount; order++) {
                    if(students[test][order] === mento) std1 = order;
                    if(students[test][order] === menti) std2 = order;
                }
                if(std1 < std2) count ++;
            }

            if(count === testTime) answer ++;
        }
    }
    return answer;
}
