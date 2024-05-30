const redux = require('redux')

const createStore = redux.createStore;
const CAKE_ORDER = "CAKE_ORDER"  //here we difine the action constant string

// {
//     type:CAKE_ORDER,
//     quantity:1,     --this i the simple action object
// }


//now we will define an action creator function which will return the action

function orderCake() {
    return {
        type: CAKE_ORDER,
        quantity: 1
    }
}


const initialStatec = {
    numberOfCakes: 10,     //initial value must be wrap in an object like this
    anotherProperty: 0
}

//here we are going to define the reducer
const reducer = (state = initialStatec, action) => {
    switch (action.type) {
        case CAKE_ORDER:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}


//ceating store
const store = createStore(reducer);   //here redux store holing the application state bcz reducer we passed it have the intial state.
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => console.log('update state',store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
