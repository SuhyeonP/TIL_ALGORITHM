// 1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작 업을 CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨
// 앞에위치한다. 5 2 3 1 6 (7번작업은캐시에서삭제된다.)
// 2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용
// 한다면 Cache Hit가 되고, 63번 앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으
// 로 위치하게 된다. 5 2 3 1 6 ---> 3 5 2 1 6
// 캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.

function solution(size, work) {
    const cache = Array(size).fill(0);

    for (let ele of work) {
        const idx = cache.indexOf(ele);
        if(idx === -1) {
            cache.unshift(ele);
            if(cache.length > size) {
                cache.pop();
            }
        } else {
            cache.splice(idx, 1);
            cache.shift(ele);
        }
    }


    return cache;
}

console.log(solution(5, [1,2,3,2,6,2,3,5,7]))


console.log(solution2(5, [1,2,3,2,6,2,3,5,7]))

function solution2(size, file) {
    const answer = Array.from({length: size}, () => 0);

    file.forEach((ele) => {
        let where = -1;
        for(let i=0; i < size; i++) if(ele === answer[i]) where = i;
        if (where === - 1) {
            for(let i=size-1; i>=1; i--){
                answer[i]=answer[i-1];
            }
        } else {
            for(let i = where; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = ele;
    })

    return answer;
}

console.log(solution2Re(5, [1,2,3,2,6,2,3,5,7]))

function solution2Re(size, file) {
    const answer = Array.from({length: size}, () => 0);

    for(let ele of file) {
        let where = -1;

        for(let i = 0; i < size; i++) if(ele === answer[i]) where = i;
        if (where === -1) {
            for(let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i-1];
            }
        } else {
            for(let i = where; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = ele;
    }
    return answer;
}
