const redux = require("redux");

const INC = "INC"
const DEC = "DEC"
const ADD = "ADD"
const MUL = "MUL"
const DIV = "DIV"

///Action

const incFun = () => {
    return {
        type: INC,
        payload: 50
    }
}
const decFun = () => {
    return {
        type: DEC,
        payload: 50
    }
}
const addFun=(a,b)=>{
    return{
        type:ADD ,
        payload: {
            first:a ,
            second:b
        }
    }
}
const mulFun=(a,b)=>{
    return{
        type:MUL ,
        payload: {
            first:a ,
            second:b
        }
    }
}
const divFun=(a,b)=>{
    return{
        type:DIV ,
        payload: {
            first:a ,
            second:b
        }
    }
}

    ///Reducer

    const reducerCounter = (state = 100, action) => {
        switch (action.type) {
            case INC:
                return state + action.payload
            case DEC:
                return state - action.payload
            default:
                return state
        }
    }
    const reducerCalc = (state = 0, action) => {
        switch (action.type) {
            case ADD:
                return state + action.payload.first + action.payload.second

            case MUL:
                return state + action.payload.first * action.payload.second

            case DIV:
                return state + action.payload.first / action.payload.second
            default:
                return state
        }

    }


    ////Combiner

    const rootReducer = redux.combineReducers({
        counter: reducerCounter,
        calculator: reducerCalc

    })
    ///Store

    const store = redux.createStore(rootReducer)

    const unsucs = store.subscribe(() => {
        console.log(store.getState())
    })

    // store.dispatch(incFun())
    // store.dispatch(decFun())
    // store.dispatch({
    //     type: INC,
    //     payload: 50

    // })

    // let bindFunc = redux.bindActionCreators(incFun, store.dispatch);

    // bindFunc()

    // store.dispatch(addFun(5,6))
    // store.dispatch(mulFun(5,6))
    // store.dispatch(divFun(11,5))
    store.dispatch(addFun(11, 5))