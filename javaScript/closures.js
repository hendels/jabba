globalVar = 'globalVar';

function closures(){
    var parentVar = 'parentVar';
    closureFunction = () =>{
        console.log(`on function [BEFORE define] closureVar = ${closureVar}`);
        var closureVar = 'closureVar';
        console.log(`on function [AFTER define] closureVar = ${closureVar}`);
        console.log(globalVar);
        console.log(parentVar);
        console.log(closureVar);
    }
    closureFunction();
    // console.log(`on parent function [AFTER define] closureVar = ${closureVar}`);
}

closures();