var sum = 0;

function num() {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
    }
    return sum
}

var a = num(5, 12, 3)
console.log(a)



function person(name, email) {
    return {
        name : name,
        email : email
    }
}

var p1 = person('Alamin Bhuiyan Afif', 'oriam5456gmail.com')
console.log(p1)