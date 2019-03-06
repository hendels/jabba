require('isomorphic-fetch');

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
console.log('======map======');
const arr3 = ['1', '33', '44'];
const morfed = arr3.map(x => {
    return x + ' --- przemy'
})
console.log(morfed);

console.log('======filter======');
const arr4 = [21,6,5, 1, 66, 22, 10, 11];
const filteredArr = arr4.filter((x, y) => {
    console.log(y)
    return x > 10
});
console.log(filteredArr);
console.log('======foreach======');
arr4.forEach((x, y) => {
    console.log('foreach ', x, y);
})

console.log('======fetch======');
fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    response => response.json()
).then(json => console.log(json))

console.log('======to JSON======');
function arrToJson(){ 
    return '{"elo":           "object js"}'
};
console.log(arrToJson());
const convert = JSON.parse(arrToJson());
console.log(convert);
const toString = JSON.stringify(convert);
console.log(toString);
console.log('======arrows again======');
const arrowAgain = () => {
    console.log(`return nothing`)
    return "xxx"
}
console.log(arrowAgain());
