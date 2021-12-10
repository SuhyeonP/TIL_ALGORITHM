function solution(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(str.length === 1) {
        return [alphabet.indexOf(str) + 1];
    }
    const dictionary = new Map();
    const answer = [];

    for(let i = 0; i < alphabet.length; i++) {
        dictionary.set(alphabet[i], i+1);
    }

    for(let i = 0, j, len = str.length; i < len; i = j) {
        // i 가 j와 같아지는게 증감식
        let now = str[i];
        for(j = i + 1; j < len; j++) {
            let now2 = str[j];
            if(!dictionary.has(now+now2)) {
                dictionary.set(now+now2, dictionary.size + 1);
                break;
            }
            now += now2;
        }
        answer.push(dictionary.get(now));
    }
    return answer;
}



console.log(solution('KAKAO'))
// [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
//[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
