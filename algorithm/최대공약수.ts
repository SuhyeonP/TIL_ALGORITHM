
// 최대공약수
function getGCD(a: number, b: number): number {
    while (b > 0) {
        let r = a % b;
        a = b;
        b =r;
    }

    return a;
}

console.log(getGCD(8, 4))

// 최소공배수
function getLCM(a: number, b: number) {
    let lcm = 1;

    while (true) {
        if ((lcm % a === 0) && (lcm % b === 0)) {
            break;
        }
        lcm += 1;
    }

    return lcm;
}

console.log(getLCM(4, 8))