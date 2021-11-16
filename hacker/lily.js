function checkTimes(arr, type) {
    const sorted = arr.slice().sort((a, b) => a - b);
    if (type) {
        // 내림차순 감안
        sorted.reverse();
    }
    let savedIndex = {};
    let answer = 0;

    for(const [index, element] of arr.entries()) {
        savedIndex[element] = index;
    }

    for (const [index, element] of arr.entries()) {
        const normalElement = sorted[index];
        const wrongIdx = savedIndex[normalElement];

        if (index !== wrongIdx) {
            arr[wrongIdx] = element;
            arr[index] = normalElement;
            savedIndex[element] = wrongIdx;
            answer ++;
        }
    }


    return answer;
}
function lilysHomework(arr) {
    return Math.min(checkTimes(arr.slice(), true), checkTimes(arr.slice(), false));
}


console.log(lilysHomework([7,15,12,3]));

