/*
Object - a collection of name value pairs
*/

/////////////////////////////////////////////////////
const someObject = {
  magicValue: 42,
};
const hugeObject = {
  ...someObject,
  someValue: 37,
  deepObject: {
    foo: [11, 11],
  }
}
const overridenObject = {
  ...hugeObject,
  someValue: 24,
  deepObject: {
    someArray: [22, 22], // foo[] will be overridden
  }
}
const notOverridenObject = {
  ...hugeObject,
  anotherValue: 37,
  deepObject: {
    ...hugeObject.deepObject, // extend nested object
    someArray: [33, 33],
  }
}

console.log(overridenObject);
console.log(notOverridenObject);
/////////////////////////////////////////////////////
// RUN in BROWSER
const counter1 = {
  cnt: 0,
  inc: function() {
      this.cnt++;
      console.log(`FROM counter1 - assign to THIS = ${this.cnt}`);
  }
}

counter1.inc();

const counter2 = {
  cnt: 0,
  inc: function() {
    counter2.cnt++;
      console.log(`FROM counter2 - assign directly to object = ${counter2.cnt}`);
  }
}
counter2.inc();
/////////////////////////////////////////////////////