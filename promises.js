const fetchFood = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('food'), 1000); 
});
const fetchWater = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('water'), 300); 
});
const fetchBread = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('bread'), 500); 
});
const main = async () => {
  console.time('time');
  const food = await fetchFood;
  const water = await fetchWater;
  const bread = await fetchBread;
  console.timeEnd('time'); // ~1000ms
  
  // equivalent
  // const [food, water, bread] = await Promise.all([fetchFood,   fetchWater, fetchBread]);
}
main();