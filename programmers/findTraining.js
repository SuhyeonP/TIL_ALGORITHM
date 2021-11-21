function solution(n, lost, reserve) {
    let answer = n;
    let check = new Array(n).fill(1);
    let train = new Map();

    lost.forEach((ele) => {
        check[ele - 1]--;
    });

    reserve.forEach((ele) => {
        check[ele - 1]++;
    });

    check.forEach((ele, idx) => {
        if(ele === 0) {
            if(idx === 0) {
                if(check[idx + 1] === 2) {
                    check[idx + 1]--;
                    check[idx] = 1;
                }
            } else if (idx === n - 1){
                if(check[idx - 1] === 2) {
                    check[idx] = 1;
                    check[idx - 1] = 1;
                }
            } else if (check[idx - 1] === 2){
                check[idx] = 1;
                check[idx - 1] = 1;
            } else if (check[idx + 1] === 2){
                check[idx] = 1;
                check[idx + 1] = 1;
            }
        }
    })



    return check.filter((ele) => ele > 0).length;
}
