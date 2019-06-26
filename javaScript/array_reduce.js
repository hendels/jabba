/////////////////////////////////////////////////////
const numbers = [0,1,2,3,4,5];
let sum = 0;

for (let n of numbers)
    sum += n;

console.log('BASE SUM ===', sum);

const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 5); //<< 5 to wartość startowa dla reducera

console.log('SUM2 - with initial VALUE === 5 ', sum2);

const sum3 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 'justString');
console.log(`SUM 3 - converting to string because of first string === ${sum3}`);

const sum4 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`SUM 4 - without second argument initial value - pure sum === ${sum4}`);
/////////////////////////////////////////////////////
const strings = ['a','b','c','d']

const sumStrings = strings.reduce((accumulator, currentVal)=>{
    return accumulator + currentVal;
}, 'ThisIsInitialString - ');

console.log('SUM 5 - Strings === ', sumStrings);
/////////////////////////////////////////////////////
console.log('======reducer======');

const arr = [2,6,5];

const eloReduce = arr.reduce((x , y) => {
    console.log(`x = ${x} / y = ${y}`);
    return x + y
});

console.log(eloReduce);
const arr2 = ['1', '33', '44'];

const eloReduce2 = arr2.reduce((x , y) => {
    console.log(`x = ${x} / y = ${y}`);
    return x + y
}, 'reducer2---');

console.log(eloReduce2);

/////////////////////////////////////////////////////