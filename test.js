
var1 = true;
var2 = false;
globalVar = 'globalVar';

console.log('============revealingModulePattern=================');
var revealingModulePattern = (function(name) {
    var privateVar = 'przemy';
    var privateMethod = function() {
        return privateVar;
        
    };
    var publicMethod = function() {
        return privateMethod();
    };
    return {
        publicMethod: publicMethod
    }
})();
console.log(revealingModulePattern.publicMethod());
console.log('==================functions===========');

eloFunction = () => {
    console.log('function1');
    return Promise.resolve();
}
eloFunction3 = () => {
    console.log('function3');
    return Promise.resolve();
}
function eloFunction2(){
    console.log('function2');
    return 2;
}
returnFunction = () => {
    return 'return test string';
}
(function(){
    console.log('anonymous function');
})
(()=>{console.log('anonymous function from arrow')})
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
console.log('============JABBASCRIPT=================');
const elo = var1 && var2;
console.log(elo);
eloFunction();
eloFunction2();
console.log('============closures=================');
closures();
console.log('============prototypes=================');

console.log('============recurency=================');

console.log('============classes=================');

console.log('============this=================');
console.log('>>>zmiana kontekstu wywolania funkcji>>>');
var obj1 = {
    name: 'object 1',
    sayHello: function(value) {
        console.log(`${value} to ${this.name}`);
    }
};
var obj2 = {
    name: 'object 2',
};
obj1.sayHello('without change');
obj1.sayHello.call(obj2, 'call: ');
obj1.sayHello.apply(obj2, ['apply: ']);
var binded = obj1.sayHello.bind(obj2, 'bind: ');
binded();

console.log('============callbacks=================');
console.log('============arrow functions=================');
const arrowFunctionTest = () => returnFunction();
console.log(arrowFunctionTest());
const arrowFunctionTest2 = params => console.log(params * 2);
arrowFunctionTest2(33);
var cat = {
    lives: 9,
    jumps: function(){
        this.lives--;
        console.log(this.lives)
    }
}
cat.jumps();
(()=> {console.log('przemy immediate arrow function!')})
async function asyncFunction() {
     await new Promise((resolve,reject)=>{

         timer = setTimeout(()=>{
            console.log('ticking....')
            resolve(console.log('przemek')); 
        }, 3000);
     });

     console.log(`after SETTIMEOUT - ${timer}`);
    
};
asyncFunction();
// console.log('============promises=================');

// new Promise((resolve, reject) => {
//     console.log('Initial');
//     throw new Error('Something failed');
//     resolve();
// })
// .then(() => {
    
        
//     console.log('Do this');
// })
// .catch(() => {
//     console.log('Do that');
// })
// .then(() => {
//     console.log('Do this, no matter what happened before');
// });
// console.log('============promises[2]=================');

// const doFirstThing = new Promise((resolve, reject) => {
//     console.log('there is first thing');
    
//     resolve();
// })

// const doSecondThing = new Promise((resolve, reject) => {
//     console.log('there is second thing');
    
//     resolve();
// })
// function doThirdThing(){
//     console.log('there is third thing');
// }
// function doFourthThing(){
//     console.log('there is fourth thing');
// }

// eloFunction()
// .then(firstResult => eloFunction3())
// .then(secondResult => doThirdThing())
// .catch(error => console.log('error'));
// console.log('============promises[3]=================');
// function asyncOperation() {
//     return new Promise(function (resolve, reject) {
//         // success
//         setTimeout(function(){
//             resolve("It's OK"); 
//         }, 1000 + Math.random() * 1000);
 
//         // error
//         setTimeout(function(){
//             reject(Error("Error message")); 
//         }, 1000 + Math.random() * 1000);
//     });
// }
// asyncOperation().then(function(result) {
//     console.log(result);
 
// }).catch(function(error) {
//     console.log(error);
// });
// console.log('Next operation');
console.log('==================map========================');
