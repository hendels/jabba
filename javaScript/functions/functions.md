# FUNCTIONS ARE OBJECTS!!!
* has name property : function.name = yourfunctionname;
* has code property : function.code = yourcode;
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

```
#Anonymous functions
doesn't have a name property, but we can point it to a variable, which reffers to a memory
`ARROW FUNCTIONS ARE ANONYMOUS`

```javascript
anonymousGreet();

var anonymousGreet = function(){
    console.log('przemy')
}

```
above returns `error` because function is assigned to variable, variable is setting in memory as undefined, so we have to
call this function in code order execution after assignement to a variable