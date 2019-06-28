# Closures
`closure gives you access to an outer function’s scope from an inner function`. In JavaScript, closures are created every time a function is created, at function creation time.


```javascript
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(function(){
            console.log(i);
        })
    }

    return arr;
}

var fs = buildFunctions();

fs[0](); // returns 3 closure holds in memory last value of EXECUTION CONTEXT
fs[1](); // returns 3
fs[2](); // returns 3

```
## questions? 
* can you name two common uses for closures?
    - Closures are commonly used to give object data privacy