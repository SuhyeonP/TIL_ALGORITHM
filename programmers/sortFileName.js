function solution (files) {
    return files.sort((a, b) => {
        const headerA = a.match(/\D+/)[0].toLowerCase();
        const headerB = b.match(/\D+/)[0].toLowerCase();

        // /\D+/ 이거하면 딱 그부분까지만 선택됨(foo010bar020.zip 의 경우에 foo(arr 의 0번째 요소) 만 , /\d+/ 는 010(arr 의 0번째 요소)

        if (headerA < headerB) {
            return -1;
        } else if (headerB < headerA) {
            return 1;
        }

        const numberA = a.match(/\d+/)[0].replace(/^0+/,"");
        const numberB = b.match(/\d+/)[0].replace(/^0+/,"");

        return numberA - numberB;
    })
}


console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))
console.log(solution(["foo010bar020.zip"]))
