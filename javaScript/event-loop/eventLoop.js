// # JavaScript Engine Run Order

console.log('elo przemix');
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler(){
    console.log('click event');
    
}

// listen for the click event
document.addEventListener('click', clickHandler);

// * Execution Stack (global, functions)
waitThreeSeconds();
console.log('finished execution');
// * Event Queue
// while you clicks on page, console log with CLICK EVENT LOG will show after everything is processed
// - in this case after 3 seconds