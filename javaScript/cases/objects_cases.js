
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

//example
const key = Object.keys(result.metadata[i])[0];
const value = result.metadata[i][key];

//In order to check if a specific key exists within a JavaScript object, you can use the Object.prototype.hasOwnProperty() method
foo.hasOwnProperty('bar')
