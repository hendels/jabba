# Arrays
Collections of everything:
* functions, objects, primitives, arrays

```javascript
var arr = new Array;
var arr2 = [];

var arr3 = [
    1,
    false,
    {
        name: 'przemy',
        address: '111',
    },
    function(name){
        var greeting = 'hello';
        console.log(greeting + name);
    },
    'hello'
]

console.log(arr); // < valid JS code
arr[3](arr[2].name); //<< call the function return 'greeting przemy'

```