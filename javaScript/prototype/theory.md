

# Inheritance
One object gets access to the properties and methods of another object

Javascript has `Prototypal inheritance` called `prototype`

# Prototype

lets say we have object:
```javascript
const obj = {
    prop1: 'siema',
    _proto_: {
        ...allThingsInTheWorld,
        prop1: 'czesc', // << this will not be returned, JS will stop at obj.prop1
        prop2: 'siema2',
        _proto_: {
            ...allThingsInTheWorld,
            prop3: 'siema3'
        }
    }
}

```
if we try to call `obj.prop2`, JS engine will search through `obj` itself, if `prop2` wouldn't be found. JS will look at `proto` in that `obj`. If we'll look for `prop3` we can point it through `obj.prop3`. JS will find it in next `_proto_` of `_proto_`. It can be called:
[Prototype-Chain]

////////////////////////////////////
`_PROTO_` IS THE SAME FOR ALL OBJECTS, 
`so: obj2.prop2 will be the same as in obj1.prop2 - it's the same spot in memory.`
////////////////////////////////////