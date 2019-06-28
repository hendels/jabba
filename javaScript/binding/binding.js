
var person = {
    firstname: 'john',
    lastname: 'doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
// in this context THIS reffers to global context
var logName = function(lang1, lang2) {
    console.log('Logged: ', this.getFullName());
    console.log(`arguments::: ${lang1} - ${lang2}`);
    console.log('--------------');
}
// # BIND
// to get access to getFullName we have to bind logName function to PERSON object
// JS copy function with context of given object
var logPersonName = logName.bind(person);
// now we can call the new created function
logPersonName();

// # CALL
logName.call(person, 'call en', ' call es');
// # APPLY 
logName.apply(person, ['apply en', 'apply es']);
// IIFE
(function(lang1, lang2) {
    console.log('Logged: ', this.getFullName());
    console.log(`arguments::: ${lang1} - ${lang2}`);
    console.log('--------------');
}).apply(person, ['iife en', 'iife es']);
// borrowing functions
person2 = {
    firstname: 'jan',
    lastname: 'kowalski',
}
console.log(person.getFullName.apply(person2));

// Currying
function multiply(a , b){
    return a * b;
}
const multiplyByTwo = multiply.bind(this, 2) // < 2 stands for PERMANENT value for first parameter
console.log(multiplyByTwo(3)) // < second {3} stands for second GIVEN parameter 
// result will be {6}