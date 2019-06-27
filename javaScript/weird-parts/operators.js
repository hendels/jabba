var a = +(4, 3);
console.log(a);


// operator associativity
var b=2, c=3, d=4;

// in this case we have right-to-left associativity
// d=d > c=d > b=c >> result for all = 4
b=c=d;
console.log(b);
console.log(c);
console.log(d);
// coersion
var stringNumbers = '1' + 2 + 3;
console.log(stringNumbers); // 123
var check;

function checkCoercionInIf(){
    if (check){
        console.log('yey')
    } else
        console.log('a converted by Boolean(undefined) to false')
}
checkCoercionInIf();

function greet(check2){
    check2 = check2 || '<put something here>' // > return 'hello' , because it returning value that can be coersed
    console.log('hello ' + check2);

}
greet('przemy');
greet(0); //<< beware of 0
greet();