var addition = function(a, b) {
    return a + b
}

addition(5, 7)

setTimeout(function(){
    console.log('i will call after 5 second')
}, 5000)

var another = addition
console.log(another(10, 6))