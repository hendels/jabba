const numbers = [0,1,2,3,4,5];
const strings = ['a','b','c','d']
let sum = 0;
for (let n of numbers)
    sum += n;

console.log(sum);

const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 1); //<< 0 to wartość startowa dla reducera


console.log(sum2);

const sumStrings = strings.reduce((accumulator, currentVal)=>{
    return accumulator + currentVal;
}, 'przemy - ');

console.log('sum strings', sumStrings);

const threeDots = ['przemy',...strings];
console.log(threeDots);

const counter = {
    cnt: 0,
    inc: function() {
        counter.cnt++;
        console.log(`my cmt = ${counter.cnt}`);
    }
}
counter.inc();

console.log('====================prototype=======================');
function Przemy(){
    this.x = 100;
    this.y = 100;

}
const p1 = new Przemy();
const p2 = new Przemy();
Przemy.prototype.show = function(){
    console.log('siema z prototype');
}

p1.show();
p2.show();
console.log('======================this=============================');
console.log(this);
const functionGlobalScope = function(table){
    console.log(this.table, table)
}
const przemekRoom = {
    table: 'przemek table',
    cleanTable: function(){
        console.log(`cleaning ${this.table}`);
    },
    cleanTableCallback: ()=>{
        console.log(`cleaning ${this.table}`);
    },
    functionInsideScope(){
        functionGlobalScope(przemekRoom.table);
    }

}
przemekRoom.cleanTable();
przemekRoom.cleanTableCallback();
const binded = functionGlobalScope.bind(przemekRoom);
przemekRoom.functionInsideScope();
binded('asd');
functionGlobalScope.call(przemekRoom, 'qwe');

const arrow1 = () => {

    console.log('elo');
    return 'czesc';
}

console.log(arrow1());