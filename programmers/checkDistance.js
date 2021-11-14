const solution1 = (places) => {
    let answer = [];

    const isValid = (value) => 0 <= value && value < 5;


    for (const place of places) {
        place.map((row, idx) => place[idx] = row.split(''));

        const isPerson = (r,c) => place[r][c] === 'P';
        const isEmpty = (r,c) => place[r][c] === 'O';

        const keepDistance = place.every((row, r) =>
            row.every((seat, c) => {
                if (seat === 'P') {
                    if (isValid(r+1)) {
                        if (isPerson(r+1, c)) return false;
                        if (isEmpty(r+1, c)) {
                            if (isValid(r+2) && isPerson(r+2, c)) return false;
                            if (isValid(c+1) && isPerson(r+1, c+1)) return false;
                            if (isValid(c-1) && isPerson(r+1, c-1)) return false;
                        }
                    }
                    if (isValid(r-1)) {
                        if (isPerson(r-1, c)) return false;
                        if (isEmpty(r-1, c)) {
                            if (isValid(r-2) && isPerson(r-2, c)) return false;
                            if (isValid(c-1) && isPerson(r-1, c-1)) return false;
                            if (isValid(c-1) && isPerson(r-1, c+1)) return false;
                        }
                    }
                    if (isValid(c+1)) {
                        if (isPerson(r, c+1)) return false;
                        if (isEmpty(r, c+1) && isValid(c+2) && isPerson(r, c+2)) return false;
                    }
                    if (isValid(c-1)) {
                        if (isPerson(r, c-1)) return false;
                        if (isEmpty(r, c-1) && isValid(c-2) && isPerson(r, c-2)) return false;
                    }
                }
                return true;
            })
        )
        answer.push(keepDistance ? 1 : 0)
    }

    return answer;
}
console.log(solution1([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))


//
// // 5*5 내부가 맞는지 확인하는 함수
// const inBound = val => val >= 0 && val < 5;
//
// for(const place of places){
//     // place 는 1개의 방
//     place.map((row, idx) => {
//         place[idx] = row.split('');
//     });
//     // 배열에 바로 스플릿하는거
//
//     const isPerson = (r,c) => place[r][c] === 'P';
//     const isEmpty = (r,c) => place[r][c] === 'O';
//
//     const keepRight = place.every((row, r) =>
//         // row 는 1개의 방 에 한줄, r 은 세로
//         row.every((seat, c) => {
//             // seat 는 자리 하나 , c 는 가로
//             if(seat === 'P'){
//                 if(inBound(r+1)){
//                     // r+1 이 검사가 가능한곳이라면
//                     if(isPerson(r+1, c)) {
//                         return false;
//                         // 해당자리 바로 밑간이 사람이면 거리두기실패 , 바로 끝!
//                     }
//                     if(isEmpty(r+1, c)){
//                         // 바로 밑칸이 O (빈 자리) 일 경우
//                         // ↙️,⬇️,↘️ 세칸이 유효한지 확인 및 사람인지 확인
//                         if(inBound(c+1) && isPerson(r+1, c+1)) return false; // 해당자리의 오른쪽옆이 5*5인지 확인 후 아래, 오른쪽 간 자리가 사람이면 false
//                         if(inBound(c-1) && isPerson(r+1, c-1)) return false; // 해당자리의 왼쪽자리가 5*5인지 확인 후 아래, 왼쪽 간 자리가 사람이면 false
//                         if(inBound(r+2) && isPerson(r+2, c)) return false;
//                     }
//                 }
//                 if(inBound(r-1)){
//                     // ↖️, ⬆️, ↗️ 유효한지 확인후 사람인지 체크 ️
//                     if(isPerson(r-1, c)) return false; // 사람이면 바로 땡
//                     if(isEmpty(r-1, c)){ // 빈자리있으면 그칸 옆위 로 사람인지 체크
//                         if(inBound(c+1) && isPerson(r-1, c+1)) return false;
//                         if(inBound(c-1) && isPerson(r-1, c-1)) return false;
//                         if(inBound(r-2) && isPerson(r-2, c)) return false;
//                     }
//                 }
//                 if(inBound(c+1)){
//                     // 바로옆자리
//                     if(isPerson(r, c+1)) return false;
//                     if(isEmpty(r, c+1) && inBound(c+2) && isPerson(r, c+2)) return false;
//                 }
//                 if(inBound(c-1)){
//                     if(isPerson(r, c-1)) return false;
//                     if(isEmpty(r, c-1) && inBound(c-2) && isPerson(r, c-2)) return false;
//                 }
//             }
//             return true;
//         })
//     )
//     answer.push(keepRight ? 1 : 0);
// }
