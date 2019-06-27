console.clear();
console.log('============arrow functions=================');
/* 
*/
/////////////////////////////////////////////////////

returnFunction = () => {
    return 'return test string';
}

const arrowFunctionTest = () => {
    console.log(this); // << zwróci Window
    return returnFunction()
};
console.log(arrowFunctionTest());
/////////////////////////////////////////////////////
const arrowFunctionTest2 = params => console.log(params * 2);
arrowFunctionTest2(33);
/////////////////////////////////////////////////////
(()=> {console.log('przemy immediate arrow function!')})
/////////////////////////////////////////////////////
const asyncFunction = async () => {
    await new Promise((resolve, reject)=>{
        
        timer = setTimeout(()=>{
            resolve(console.log('Promise return ::: przemek')); 
        }, 3000);
    });
    
    console.log(`after SETTIMEOUT - ${timer}`);
    
};
asyncFunction();
/////////////////////////////////////////////////////
// jeżeli występuje w funkcji callback to odwołuje się do window (this globalnego), podstawowy THIS to WINDOW, czyli zakres globalny
// BROWSER USAGE
console.log('============this in callback=================');
thisInCallback = () => {
    console.log(this); 
}
thisInCallback();
/////////////////////////////////////////////////////
console.log('======arrows again======');
const arrowAgain = () => {
    console.log(`return nothing`)
    // return "xxx"
}
console.log(`returning from arrowFunction`, arrowAgain());
