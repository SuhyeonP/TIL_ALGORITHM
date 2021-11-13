
const solution = (str) => {
    let first = str.toLowerCase();
    // 대문자 -> 소문자
    let second = first.replace(/[^\w\.\-]/g, '');
    // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
    // 다른 문자 빼주기
    let third = second.replace(/[\.]{2,}/g,'.');
    // .이 두번이상 나오면 ... -> . 이런식으로 . 하나로 줄이기
    let forth = third.replace(/^\./,'').replace(/\.$/,'');
    // 맨앞 맨뒤 . 이면 지우기
    let fifth= forth ? forth : 'a'
    // 빈문자열이면 a 넣어주기
    let sixth = fifth.substring(0, 15);
    // 15자 이상이면 자르기
    let seventh = sixth.replace(/\.$/,'');
    // 자르고 맨뒤 . 이면 지우기
    let answer = seventh;
    while (answer.length < 3) {
        // 2글자 이하면 3글자 이상으로 늘려주기
        answer += answer[answer.length -1]
    }
    return answer;
}