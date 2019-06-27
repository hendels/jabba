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