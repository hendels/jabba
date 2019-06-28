# Object - a collection of name value pairs

Object sits in memory f.e. as [0x001]

The Object consists of:
* primitive "property" [0x002]
* object "property" [0x003] --- `PROPERTIES` has `VALUES`
* function "method" [0x004]
* it has property: _proto_: `Object` because it was created from class `new Object()`
* all objects has `proto` property
```javascript
// [in object.js]
var person = new Object(); // << there a better ways to do this
// Computed Member Access 'object[propertyName]'
person['name'] = 'przemy' // is like >>> person.name = "przemy"

var firstNameProperty = "name";
console.log(person);
console.log(person[firstNameProperty]);
// Member Access mr dot 'object.something'

person.address = new Object();
person.address.street = "111 main st.";
person.address.city = "new york";
person.address.state = "NY";
console.log(person["address"]["city"]) // > returns "new york"

//////////////////////////////
var quoteObject = {
  "quote1": "elo1",
  "quote2": "elo2",
  "quote3": "elo3",
}
// its parsed by JS engine to
var quoteObject2 = {
  quote1: "elo1",
  quote2: "elo2",
  quote3: "elo3"
}

```

