console.log('======to JSON======');
function arrToJson(){ 
    return '{"elo":           "object js"}'
};
console.log(arrToJson());
const convert = JSON.parse(arrToJson());
console.log(convert);
const toString = JSON.stringify(convert);
console.log('TOSTRING JSON:::', toString);
