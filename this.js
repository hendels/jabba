const colors = require('./config/colors');

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
var binded = obj1.sayHello.bind(obj2, 'bind: ');
binded();
// TODO - THIS w funkcjach tablicowych:


// jeżeli występuje w funkcji callback to odwołuje się do window (this globalnego), podstawowy THIS to WINDOW, czyli zakres globalny
// BROWSER USAGE
console.log('============this in callback=================');
thisInCallback = () => {
    console.log(this); 
}
thisInCallback();

/////////////////////////////////////////////////////
var cat = {
    lives: 9,
    jumps: function(){
        this.lives--;
        console.log(this.lives) // << odwołanie do obiektu
    }
}
cat.jumps();
/////////////////////////////////////////////////////