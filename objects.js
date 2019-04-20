const someObject = {
    magicValue: 42,
  };
  const hugeObject = {
    ...someObject,
    someValue: 37,
    deepObject: {
      foo: [42, 43],
    }
  }
  const overridenObject = {
    ...hugeObject,
    someValue: 24,
    deepObject: {
      someArray: [91, 21], // foo[] will be overridden
    }
  }
  const notOverridenObject = {
    ...hugeObject,
    anotherValue: 37,
    deepObject: {
      ...hugeObject.deepObject, // extend nested object
      someArray: [42, 43],
    }
  }

  console.log(overridenObject);
  console.log(notOverridenObject);

// iterate through value and key
const desiredMetadataElements = {
    Album: "album=",
    AlbumArtist: "albumartist=",
    Artist: "artist=",
    Date: "date=",
    Genre: "genre=",
    IndexTrack: "indextrack=",
    IndexAlbum: "indexalbum=",
    Label: "label=",
    Rating: "rating=",
    Title: "title=",
    Style: "style=",
  }
Object.keys(desiredMetadataElements).forEach(e => console.log(`key=${e} value=${desiredMetadataElements[e]}`));

let metatagsArray = [];
  
  Object.keys(desiredMetadataElements).forEach(e => {
    for(let i=0; i < cleanedList.length ; i++){
      let searchText = cleanedList[i].search(desiredMetadataElements[e]);

      if (searchText !== -1) {
        console.log(searchText, desiredMetadataElements[e], cleanedList[i]);
        let searchEqual = cleanedList[i].search('=');
        if (searchEqual !== -1){
          let value = cleanedList[i].substr(searchEqual + 1, cleanedList[i].length)
          console.log(value);
          
          let newObj = {
            [e]: value
          };
          metatagsArray.push(newObj);
        }
      }
    } 
    })
    

var foo = { 'bar' : 'baz' }
//To get bar, use:

Object.keys(foo)[0]
//To get baz, use:

foo[Object.keys(foo)[0]]