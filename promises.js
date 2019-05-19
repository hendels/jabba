const stuff = require('./config/stuff');

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
  console.log('Do that');
})
.then(() => {
  console.log('Do this, no matter what happened before');
});