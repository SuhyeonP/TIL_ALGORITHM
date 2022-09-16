### Flat
> depth 가 여러개인 배열을 그 깊이를 없애주는? 거

```
    const test = ['a', ['b', ['c', ['d']]]];
    console.log(test.flat(1)) // [ 'a', 'b', [ 'c', [ 'd' ] ] ]
    console.log(test.flat(2)) // [ 'a', 'b', 'c', [ 'd' ] ]
    console.log(test.flat(Infinity)) // [ 'a', 'b', 'c', 'd' ]
```

### FlatMap
> flat한 배열에 map을 해주는거
