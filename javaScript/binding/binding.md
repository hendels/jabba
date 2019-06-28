# BINDING
in `Function Execution Context` we have:
* Variable environment
* this
* Outer environment

because Functions are objects, they have acces to `CALL`, `APPLY` and `BIND` methods

## BIND

bind copies given function and provide new one (`copy of a function`) with binded this context
* first parameter are `this`
* second and further are `arguments`

the difference between `apply` and `call` is that `bind` don't run the function, it just bind.

```javascript
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
    
}
// to get access to getFullName we have to bind logName function to PERSON object
// JS copy function with context of given object
var logPersonName = logName.bind(person);
// now we can call the new created function
logPersonName();
```
## Function Currying
Creating a copy of a function but with some preset parameters, very useful in mathematical situations.

```javascript
function multiply(a , b){
    return a * b;
}
const multiplyByTwo = multiply.bind(this, 2) // < 2 stands for PERMANENT value for first parameter
console.log(multiplyByTwo(2)) // < second {2} stands for second GIVEN parameter 

```

## CALL
it's the same as calling the function by brackets <function>(), but you can give additional arguments by calling function by `.call()`
* first argument let us decide which `this` we can use
* rest parameters are arguments to a given function
* `.call` also executes the function
```javascript
logName.call(person, 'en', 'es')

```

## APPLY
the only difference between `call` and `apply` is that apply takes as parameters an `array` type, the rest is the same
```javascript
logName.apply(person, ['en', 'es'])

```
### Borrowing functions
you can borrow function from other object and bind other object to be used in that borrowed function:
```javascript
person2 = {
    firstname: 'jan',
    lastname: 'kowalski',
}
console.log(person.getFullName.apply(person2)); // < the same as call
console.log(person.getFullName.call(person2)); //< the same as apply
```