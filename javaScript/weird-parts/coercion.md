# Coercion
converting a value from one type to another
this happens quite often in Javascript because it's dynamically typed.
```javascript
var numbers = 1 + 2;
// 3
numbers = 'hello ' + 'world';
// hello world

numbers = '1' + 2;
// 12
// 2 - was coersed by javascript engine to string

Number('3') // > return number 3
Number(false) // > return 0
Number(true) // > return 1
Number(undefined) // >return NaN - it's no way to convert it to a number
Number(null) // > return 0
Number("") // > return 0
3 == 3 // > true
'3' == 3 // > true, because it was coersed 
false == 0 // > true

null == 0 // false
"" == 0 // > true
"" == false // > true 0 = 0

Boolean(undefined) // > return false
Boolean(null) // > return false
Boolean("") // > return false

Boolean('przemy') // return true
Boolean(1) // return true
// << attention!
Boolean(0) // return false
// >>
// operators.js file:
var check;
function checkCoercionInIf(){
    if (check){
        console.log('yey')
    } else
        console.log('a converted by Boolean(undefined) to false')
}
check = 0;
if ( check || check === 0){
    console.log('something is here')
}
// associavity tells that 0 = 0 > true, 
// next in precedense index :: Boolean(0) || true
// false || true > returns true

function greet(check2){
    check2 = undefined || '<put something here>' // > return 'hello' , because it returning value that can be coersed
    console.log('hello ' + check2);

}
greet('przemy');
greet(0); //<< beware of 0
greet();

```