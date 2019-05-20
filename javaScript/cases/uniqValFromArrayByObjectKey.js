const _ = require('lodash');

const myArray = [{myKey: 'val1'}, {myKey: 'val1'}, {myKey: 'val1'} , {myKey: 'val2'}, {myKey: 'val2'}]
//using lodash
const userIds = _.uniq(_.map(myArray), 'myKey');
console.log(userIds);