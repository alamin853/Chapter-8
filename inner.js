function somthing(greet, name) {
    function getFirstName() {
        if(name){
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}
somthing('Good Morning', "Md Alamin Bhuiyan Afif")