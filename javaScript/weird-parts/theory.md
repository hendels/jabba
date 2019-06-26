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

const odpalTo = "hello przemix";

function b(){
    console.log('siema from function')
}