function add(a, b){
    var result = a + b
    console.log(result)
}

add(10, 20)
add(50, 70)

var x = 10
var y = 30

add(x, y)


var arr1 = [1, 3, 4]
var arr2 = [5, 3, 4]
var arr3 = [1, 7, 6]

// var sum = 0
// for(var i = 0; i < arr1.length; i++){
//     var element = arr1[i]
//     sum += element
// }
// console.log(sum)


function sumOfArray(arr1){
    var sum = 0
    for(var i = 0; i < arr1.length; i++){
        var element = arr1[i]
        sum += element
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)