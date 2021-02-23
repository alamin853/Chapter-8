function test(a, b, c) {
    // console.log(arguments)

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element)
    }
}
// test()
test(10, 20, 30)

function addAll() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
    }
    console.log(sum)
}

addAll(15, 20, 25, 10)
addAll(3, 2, 1, 4, 6)