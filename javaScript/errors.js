/////////////////////////////////////////////////////
const errorFunction = () => {
    throw new Error('something failed - from THROW');
}
try {
    errorFunction();
} catch {
    console.log('ERROR CATCHED');
}
// second call, without try / catch block UNCOMMENT
// errorFunction();

/////////////////////////////////////////////////////
const errorInPromise = new Promise((resolve, reject) => {
    reject();
})

errorInPromise.then(()=>{
    console.log('promise without error...')
}).catch(()=>{
    console.log('promise error...')
})
const errorInPromiseFromThrow = new Promise((resolve, reject) => {
    throw new Error('ERROR originated from THROW')
    resolve();

})

errorInPromiseFromThrow.then(()=>{
    console.log('promise without error...')
}).catch(()=>{
    console.log('promise error from THROW...')
})
// second call without CATCH block > shows ERROR from throw
errorInPromiseFromThrow.then(()=>{}); 
/////////////////////////////////////////////////////