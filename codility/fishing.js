function solution (A, B) {
    const alive = [];

    alive.push(0);

    let i = 1;

    while (i < A.length) {
        if(B[i] === 0 && B[alive[alive.length - 1]] === 1) {
            if(A[i] > A[alive[alive.length - 1]]) {
                alive.pop();
            } else {
                i++;
            }
        } else {
            alive.push(i);
            i ++;
        }
    }

    return alive.length;
}

// todo study again
