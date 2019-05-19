/////////////////////////////////////////////////////
const errorFunction = () => {
    throw new Error('something failed');
}
try {
    errorFunction();
} catch {
    console.log('ERROR CATCHED');
}
// second call, without try / catch block
errorFunction();
/////////////////////////////////////////////////////