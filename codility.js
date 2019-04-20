function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const array = [1,3,6,4,2,1];
    //const A = [1,2,3];
    let output = [];
    //for(i=0;i<array.length;i++){
    if (!range(A.length, 1, 100000)) return;
    //}

    output = A.filter(e => {
        if (range(e, -1000000, 1000000) && e > 0 && array.indexOf(e) === -1) return e;
    })
    const minVal = Math.min.apply(null, output);
    return parseInt(minVal);
}
function range(x, min, max){
    return x >= min && x <= max;
}
const A = [1, 2, 3, 7, 6, 5, -1] ;

console.log(solution(A));