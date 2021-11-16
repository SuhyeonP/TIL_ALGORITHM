function getMode(array) {
    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv) => {
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});
    // 2. 최빈값 구하기
    const keys = Object.keys(counts);
    let mode = keys[0];
    keys.forEach((val, idx) => {
        if (counts[val] > counts[mode]) {
            mode = val;
        }
    });
    return mode;
}
