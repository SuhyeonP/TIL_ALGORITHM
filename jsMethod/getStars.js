function solution(stars, start, end) {
    let slice = stars.substring(start - 1, end);

    if(slice[0] !== '|') {
        slice = slice.substring(slice.indexOf('|'), slice.length + 1);
    }
    console.log(slice);

    if(slice.match(/^[^*]+.+[^*]/g)) {
        return slice.match(/^[^*]+.+[^*]/g)[0].match(/[*]/g).length;
    }

    return 0;
}

console.log(solution('*|*|*|',1, 3))
console.log(solution('|**|*|*',1, 5))
console.log(solution('|**|*|*',1, 6))

console.log('*|**|*|*'.split(/^[^*]+/g))
