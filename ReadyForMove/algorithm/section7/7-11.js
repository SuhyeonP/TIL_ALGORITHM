//DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다.
// 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.
// 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
// 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
// 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
// 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다.
// 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
// 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

// 결정 알고리즘  결정알고리즘

//[1,2,3,4,5,6,7,8,9] , 3 => 17

function count (songs, mid) {
    //필요한 장수

    let cnt = 1; //장수
    let sum = 0; //용량

    for (let song of songs) {
        if (sum + song > mid) {
            cnt ++;
            sum = song;
        } else {
            sum += song;
        }
    }
    return cnt;
}

function solution2(size, arr) {
    let lt = Math.max(...arr); // 1개만 들어갓을때 젤 크기의 용량
    let rt = arr.reduce((before, now) => before + now, 0) // 다들어갓을때 합
    let answer = 0;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        if(count(arr, mid) <= size) {
            answer = mid;
            rt = mid - 1;
        } else lt = mid + 1;
    }

    return answer;
}


console.log(solution2(3, [1,2,3,4,5,6,7,8,9]))
console.log(solution2Re(3, [1,2,3,4,5,6,7,8,9]))

function count2(songs, mid) {
    let cnt = 1;
    let sum = 0;

    for(let song of songs) {
        if(sum + song > mid) {
            cnt ++;
            sum = song;
        } else {
            sum += song;
        }
    }

    return cnt;
}

function solution2Re(cd, songs) {
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a + b , 0);

    let answer = 0;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (count2(songs, mid) <= cd) {
            rt = mid - 1;
            answer = mid;
        }else lt = mid + 1;
    }

    return answer;
}
