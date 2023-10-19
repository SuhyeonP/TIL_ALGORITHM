function First() {
    console.log(1)

    useEffect(() => {
        console.log('mount')
    },[])

    console.log(2)

    return (
        <div></div>
    )
}

// First 실행사 로그는 1, 2, mount 순으로 찍힌다.

function Second() {
    const [input, setInput] = useState('')
    console.log(1)

    useEffect(() => {
        console.log('mount')
        return () => {
            console.log('unmount')
        }
    },[input])

    console.log(2)

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
        </div>
    )
}

// Second 실행사 로그는 1, 2, mount 순으로 찍히고 , input 값 입력시 1, 2, unmount, mount 순으로 찍힌다.


function Third() {
    const [input, setInput] = useState('')
    console.log(1)

    useEffect(() => {
        console.log('mount')
        return () => {
            console.log('unmount')
        }
    },[])

    console.log(2)

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
        </div>
    )
}
// Third 실행사 로그는 1, 2, mount 순으로 찍히고 , input 값 입력시 1, 2 만 찍힌다.


function Child1() {
    useEffect(() => {
        console.log('child1');
    },[])

    return (
        <div></div>
    )
}
function Child2() {
    useEffect(() => {
        console.log('child1');
    },[])

    return (
        <div></div>
    )
}
function Parent() {
    useEffect(() => {
        console.log('Parent');
    },[])

    return (
        <div>
            <Child1 />
            <Child2 />
        </div>
    )
}

// parent 실행시 child1, child2, parent 순으로 실행된다.