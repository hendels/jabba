# FUNCTIONS ARE OBJECTS!!!
* has `name` property : function.name = yourfunctionname;
* has `code` property : function.code = yourcode;
* has `arguments` property: arguments.length;
# Functions execution flow
its created on initializing JS

* when you create or execute a function, the new execution context is created for this function
so we have a execution stack:
1) `Global Execution Context` 
2) function a()
3) function b()

every function has own space for variables

## scope
where are we able to see the variables

* every function has the reference to the outer environment

```javascript
function b(){
    console.log(myVar);
}

const myVar = 1;
b();
```
console will return 1 not error, because function has `reference` to `outer environment`
if variable cannot be found , JS goes down through the `SCOPE CHAIN` and search in it, in this case in `global execution context`
# First class functions
Everything you can do with other types you can do with functions.
Assign them to variables, pass them around, create them on the fly.

JavaScript treats functions as first-class citizens. That’s because in JavaScript or any other functional programming languages functions are objects.

```javascript
// you can add property to a function
function greet(){
    console.log('hi');
}
greet.language = 'english';

```
## Callback function
A function you give to another function, to be run when the other function is finished.

`I give you a function and execute you - function - and you executes function which i gave you` - it's called callback.

### examples
`functions.js`

# Function Expression
A unit of code that results in a value
```javascript
1 + 3; // expression
2 + 1; // expression
1 === 3 // expression
```
# Function Statement
IF is a statment in IF you have Expression 
```javascript
var a
if (a === 3){ // statement(expression){}

}
// normal function as function statement
function greet(name){
    console.log('hello' + name);
}
```
#Anonymous functions (arrow functions also)
doesn't have a name property, but we can point it to a variable, which reffers to a memory
`ARROW FUNCTIONS ARE ANONYMOUS`

```javascript
anonymousGreet();

// using a function expression
var anonymousGreet = function(){
    console.log('przemy')
}

```
above returns `error` because function is assigned to variable, variable is setting in memory as undefined, so we have to call this function in code order execution after assignement to a variable.

When JS Engine hits line with the function - at that time it loads it to the memory
#### spread operator
```javascript
function spreadParameters(param1, param2, param3, ...other){
    console.log(arguments) // returns  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    console.log(other); // returns 4,5,6 < other
}
spreadParameters(1,2,3,4,5,6); 
```

#### function overloading
just create another function and pass required parameters to root function
you did that a lot of times
# Immediately Invoked Function Expressions (IIFE)S
immediately runs function, its just that.
JS Engine creates and runs the function on the fly.
```javascript

var greeting = function(name) {
    console.log('hello ' + name)
}('przemy'); // << this brackets  invokes the function

console.log(greeting); // returns variable with assigned value from function execution = "hello przemy" - it holds the `string`
```
## Factory Functions with Closures
```javascript
// function which returns a function and gets one parameter << this is a FACTORY FUNCTION
function makeGreeting(language){
    // using the fact of Closure, we can store language, and call second function later
    return function(firstname, lastname){
        if (language === 'en'){
            console.log('hello ' + firstname + ' ' + lastname)
        }
        if (language === 'es'){
            console.log('hola ' + firstname + ' ' + lastname)
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
// calling returned by makeGreeting function using Closures
greetEnglish('przemy', 'hendels')
greetSpanish('przemix', 'hendels')

```
