globalVar = 'global Przemy';

function closures(){
    var parentVar = 'parentVar';
    closureFunction = () => {
        console.log(`on function [BEFORE define] closureVar = ${closureVar}`);
        var closureVar = 'closureVar';
        console.log(`on function [AFTER define] closureVar = ${closureVar}`);
        console.log('globalVar from closureFunction:::', globalVar);
        console.log(parentVar);
        console.log(closureVar);
    }
    function closureStandardFunction(){
        console.log('standard function [parentVar]:::', parentVar)
    }
    closureFunction();
    closureStandardFunction();
    // console.log(`on parent function [AFTER define] closureVar = ${closureVar}`);
}

closures();

/////////////////////////////////////////////////////////
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(function(){
            console.log('STANDARD closure:::', i);
        })
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// ES 6 & LET
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        let j = i; // << LET reference and create new spot in memory, so we can hold this value for each call
        arr.push(function(){
            console.log('ES6 LET closure:::', j);
        })
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // returns 0 because of LET and fact that it holds values in separate spots in memory for each call we can call 
// this spots when we call the function
fs2[1](); // returns 1
fs2[2](); // returns 2

// IIFE - immediately invoked functions expression approach
function buildFunctions3() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        // when loop runs it will execute IIFE function creating OWN execution context for each function call, then
        // we can call values which were returned with each function call
        arr.push(
            (function(j){
                return console.log('IIFE closure:::', j);
                // in older version you have to write something like below
                // in ES6 it's not necessary because of 
                return function(){
                    console.log(j)
                }
                
            })(i)
        )
    }

    return arr;
}

var fs3 = buildFunctions3();

fs3[0]; // 
fs3[1]; // returns 1
fs3[2]; // returns 2
////////////////////////////////////////////////////////////////

function makeGreeting(language){
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

greetEnglish('przemy', 'hendels')
greetSpanish('przemix', 'hendels')