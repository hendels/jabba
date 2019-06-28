const colors = require('../../config/colors');

console.log('============this=================');
// THIS jest ODWOŁANIEM DO OBIEKTU, (obiektem może być np. window)
console.log('>>>zmiana kontekstu wywolania funkcji>>>');
var obj1 = {
    name: 'OBJECT 1',
    sayHello: function(value) {
        console.log(`${value} to ${this.name}`);
    }
};
var obj2 = {
    name: 'OBJECT 2',
};
// BINDOWANIE funkcji
obj1.sayHello('without change');
// call
obj1.sayHello.call(obj2, 'call: ');
// apply
obj1.sayHello.apply(obj2, ['apply: ']);
// bind
var bindedFunction = obj1.sayHello.bind(obj2, 'bind: ');
bindedFunction();
// TODO - THIS w funkcjach tablicowych:


// jeżeli występuje w funkcji callback to odwołuje się do window (this globalnego), podstawowy THIS to WINDOW, czyli zakres globalny
// BROWSER USAGE
console.log('============this in callback=================');
thisInCallback = () => {
    console.log('THIS for callback :::', this); 
}
thisInCallback();

/////////////////////////////////////////////////////
var cat = {
    lives: 9,
    jumps: function(){
        this.lives--;
        console.log('THIS FOR CAT:::', this) // << odwołanie do obiektu
        console.log(this.lives) // << odwołanie do obiektu
    }
}
cat.jumps();
/////////////////////////////////////////////////////
const functionGlobalScope = function(table){
    console.log('GLOBAL SCOPE :::', this.tableInObject, table)
}
const przemekRoom = {
    tableInObject: 'RAW table',
    cleanTable: function(){
        console.log(`cleaning [${this.tableInObject}]`); // zwraca przemek table bo to funkcja czysta
        console.log(this);
    },
    cleanTableCallback: () => {
        console.log(`cleaning callback [${this.tableInObject}]`); // zwraca undefined BO TO CALLBACK
        console.log(this);
    },
    functionInsideScope(){
        functionGlobalScope(`[${przemekRoom.tableInObject}]`);
    }

}
przemekRoom.cleanTable();
przemekRoom.cleanTableCallback();
przemekRoom.functionInsideScope();

const binded = functionGlobalScope.bind(przemekRoom);

binded('[BINDED table]');
/////////////////////////////////////////////////////
var b = function() {
    // console.log(`B this:::`, this);
}
b();
/////////////////////////////////////////////////////
var d = {
    name: 'the d object',
    log: function(){
        var self = this; // < point variable to THIS OBJECT
        self.name = 'Updated d object'; 
        console.log(self); 

        var setName = function(newName){
            self.name = newName;
        }
        setName('updated again!');
        console.log(self); 
    }
}
d.log();
/////////////////////////////////////////////////////
function anotherThis(){
    // console.log('another this:::', this); // < returns WINDOW.this

}

anotherThis();
/////////////////////////////////////////////////////
const arrowThis = (param) => {
    console.log(param)
    console.log('another arrow this:::', this);
}
arrowThis('przemy');