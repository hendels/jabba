# THIS
* whenever you create a function, `this` will point to the `global` object
```javascript
function a(){
    console.log(this); // < returning window
}

var b = function() {
    console.log(this); // < returning window
}

a();
b();
```
IN CASE when you set function inside a function in an object, `this` word in that function still will be refering to global object 

```javascript
var c = {
    name: 'the c object',
    log: function(){
        this.name = 'Updated c object'; // << this is normaly used and originates from object
        console.log(this); // returning object with updated .name value

        var setName = function(newName){
            this.name = newName;
        }
        setName('updated again!');
        console.log(this); //< this will remain the same the GLOBAL (window) object will have new property name with 'updated again!' value
    }
}

// # solution

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

```