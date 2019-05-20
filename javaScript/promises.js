const stuff = require('../config/stuff');

/////////////////////////////////////////////////////
const fetchFood = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('food'), 2000); 
});
const fetchWater = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('water'), 4000); 
});
const fetchBread = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('bread'), 6000); 
});
const main = async () => {
  console.time('time');
  const food = await fetchFood;
  console.log(food)
  const water = await fetchWater;
  console.log(water)
  const bread = await fetchBread;
  console.log(bread)
  console.timeEnd('time'); // ~1000ms
  
  // EQUIVALENT
  /* 
    const [food, water, bread] = await Promise.all([fetchFood,   fetchWater, fetchBread]);
  */
}
main();
/////////////////////////////////////////////////////
new Promise((resolve, reject) => {
  console.log('Initial');
  throw new Error('Something failed');
  resolve();
})
.then(() => {
  console.log('Do this');
})
.catch(() => {
  console.log('Do that - because error');
})
.then(() => {
  console.log('Do this, no matter what happened before');
});
/////////////////////////////////////////////////////
const doFirstThing = new Promise((resolve, reject) => {
  setTimeout(()=> resolve(
    console.log('Promise in variable 1 - launch when declared, after 2 seconds resolve')
  ), 2000);
})

const doSecondThing = new Promise((resolve, reject) => {
  console.log('Promise in variable 2 - launch when declared');
  
  resolve();
})
/////////////////////////////////////////////////////
initFunction = () => {
  console.log('INIT function');
  return Promise.resolve(555);
}
secondFunction = () => {
  console.log('SECOND function');
  // throw new Error('ERROR in second function') // << zatrzyma się na drugiej funkcji
  return Promise.resolve();
}
function thirdFunction(){
  console.log('FOURTH function');
  return Promise.resolve();
}

initFunction()
  .then(firstResult => {
    console.log(`FIRST RESULT::: ${firstResult}`)
    secondFunction()
  })
  .then(secondResult => thirdFunction())
  .catch(error => console.log('ERROR in chain functions'))
/////////////////////////////////////////////////////

function asyncOperation() {
  return new Promise(function (resolve, reject) {
      // success << RANDOMIZED czasami sukces
      setTimeout(function(){
          resolve("It's OK"); 
      }, 1000 + Math.random() * 1000);

      // error << RANDOMIZED czasami błąd
      setTimeout(function(){
          reject(Error("Error message from RANDOMIZED")); 
      }, 1000 + Math.random() * 1000);
  });
}
asyncOperation().then(function(result) {
    console.log(result);
 
}).catch(function(error) {
    console.log(error);
});
/////////////////////////////////////////////////////