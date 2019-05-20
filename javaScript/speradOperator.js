/////////////////////////////////////////////////////
const strings = ['a','b','c','d']
const threeDots = ['przemy', ...strings];
console.log('threeDots', threeDots);


/////////////////////////////////////////////////////
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