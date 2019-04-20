console.log('reducers...');
const numbers = [1,23,4,5];
console.log([...numbers, 6]);

//REDUCER bierze wartosc z ACTION i zwraca zmodyfikowana tablice, ktora tez jest jego parametrem - EASY

module.exports = claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        //we care about this action (FORM!)
        //ZAWSZE ZWRACAJ NOWEGO ARRAYA jak nizej, inaczej poprzez .push modyfikujesz poprzedniego arraya 'oldListOfClaims'
        return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
    //we dont care the action (form!!)
}

module.exports = accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM'){
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
}

module.exports =  policies = (listOfPolicies = [], action) => {
    if (action, type === 'CREATE_POLICY'){
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
}