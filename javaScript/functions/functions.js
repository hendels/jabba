// get variable from outer environment in this case 1

function a(){
    console.log('from function a:::', myVar);
    b();
}
function b(){
    console.log('from function b:::', myVar);
}
const myVar = 1;
a();

function c(){
    function d(){
        console.log('from function d:::', myVar);
    }
    var myVar = 'im in C var'
    // d();
    console.log('from function c:::', myVar);
}
c();
//////////////////////////////////////////////////////////
// spread parameters
function spreadParameters(param1, param2, param3, ...other){
    console.log(arguments)
    console.log(other);
}
spreadParameters(1,2,3,4,5,6);

//////////////////////////////////////////////////////////
// imediately invoked functions IIFE
const name = 'przemy';
(function(name) {
    return console.log(`hello ${name} from immediately`);
}(name));
// you can run inside parentesis and outside parentesis
(function(name) {
    return console.log(`hello ${name} from immediately`);
})(name);
// calback functions
function callbackFunction(callback){
    const a = 2;
    const b = 3;
    console.log('in callbackFunction')
    callback(a + b);
}

const otherFunction = callbackFunction(function(param){
    console.log('its finished:::' + param)
})
const otherArrowFunction = callbackFunction((param)=>{
    console.log('finished arrow function:::', param)
})
console.log('callback result:::', otherFunction, otherArrowFunction);