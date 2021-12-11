function solution(w, h) {
    const g = gcd(w,h); // 최대공약수

    return (w*h)-(w+h-g); // 공식적용
}

function gcd(a, b){    // 유클리드 호제법
    const tmp = a % b;
    if(tmp === 0){
        return b;
    }
    else return gcd(b, tmp);
}

console.log(solution(3,2))
