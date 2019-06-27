# SYNTAX PARSERS


# LEXICAL ENVIRONMENTS



# EXECUTION CONTEXTS 
* code in JS run in Execution Context (Global)

## GLOBAL:
each tab , has each window - has own execution context, javascript engine prepare it in runtime 

at global level `this` = `global`

`GLOBAL` means not inside a function

### in browser:

* run `this` << global object of browser;
* run `window` << global object of browser
```javascript
const odpalTo = "hello przemix";

function b(){
    console.log('siema from function')
}
```
## SCOPE
* where a variable is available in your code, and if it's truly the same variable or a new copy

## NAMESPACE
* a container for variables and functions - typically to keep variables and functions with the same name separate

## By Value, By Reference
* by `value`:
each variable which get `primitive` type has own spot in memory, we can change it freely 
```javascript
    var a = 3;
    var b;

    b = a;
    a = 2;

    console.log(a); // it's 2
    console.log(b); // it's 3 
```
* by `reference`:
something is assigned to spot in memory - in JS case, object if is assigned to 2 variables it shares the same spot in memory, thats all. 