console.clear();
console.log('this is redux');
const Redux = require('redux');
const {createStore, combineReducers, applyMiddleware} = Redux;
// const {createPolicy} = require('./actions');
// const {accounting, claimsHistory, policies} = require('./reducers');
//Action Creator > Action > dispatch > Reducers > State
const thunk = require('redux-thunk');
//actions
const createPolicy = (name, amount) => {
    return {
        //action
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name,
        }
    }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}
//>>
//reducers
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        //we care about this action (FORM!)
        //ZAWSZE ZWRACAJ NOWEGO ARRAYA jak nizej, inaczej poprzez .push modyfikujesz poprzedniego arraya 'oldListOfClaims'
        // console.log('CLAIMS = ', oldListOfClaims, oldListOfClaims.indexOf(action.payload.name));
        // const existArray = oldListOfClaims.map(oldClaim => {
        //     if (oldClaim.name === action.payload.name)
        //         return oldClaim;
        // });

        const existArray2 = oldListOfClaims.find((oldClaim, i) => {
            if(oldClaim.name === action.payload.name){
                oldListOfClaims[i].amountOfMoneyToCollect += action.payload.amountOfMoneyToCollect;
                return true;
            }
        });

        if (existArray2){
            // console.log('oldListOfClaims', oldListOfClaims);
            // console.log(`${action.payload.name} - already exist`, existArray2); 
            // existArray2[0].amountOfMoneyToCollect += action.payload.amountOfMoneyToCollect;
            // return existArray2;
            return oldListOfClaims;
        } else 
            return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
    //we dont care the action (form!!)
}
const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY'){
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
}
const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM'){
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
}
//>>
const ourDepartmentsReducer = combineReducers({ //REDUCERS
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies,
});

// const store = createStore(ourDepartmentsReducer, applyMiddleware(thunk)); //STORE
const store = createStore(ourDepartmentsReducer); //STORE

const action = createPolicy('Przemy', 1);
console.log('ACTION = ', action);


store.dispatch( action); //DISPATCHER
store.dispatch(createPolicy('Przemy 2', 1)); //DISPATCHER 1.1
store.dispatch(createPolicy('Przemy 3', 1)); //DISPATCHER 1.2
store.dispatch(createPolicy('Przemy 4', 1)); //DISPATCHER 1.3
store.dispatch(createClaim('Przemy 4', 50)); //DISPATCHER 2.1
store.dispatch(createClaim('Przemy 4', 50)); //DISPATCHER 2.2
store.dispatch(createClaim('Przemy 4', 50)); //DISPATCHER 2.3
store.dispatch(createClaim('Przemy 3', 50)); //DISPATCHER 2.4
store.dispatch(createClaim('Przemy 3', 65)); //DISPATCHER 2.5
store.dispatch(createClaim('Przemy 5', 65)); //DISPATCHER 2.6
store.dispatch(createClaim('Przemy 5', 65)); //DISPATCHER 2.7
store.dispatch(createClaim('Przemy 1', 33)); //DISPATCHER 2.8
store.dispatch(deletePolicy('Przemy 2')); //DISPATCHER 3.1

console.log('STORE = ', store.getState());
//const action = createPolicy('Przemy', 20);






console.log(Redux);

