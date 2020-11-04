
const { ADD_USER } = require("../Actions/registeractions")

const { VERIFY_USER } = require("../Actions/registeractions")

export const registerReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return action.payload
        default:
            return state
    }
}
export const verifyReducer = (state={}, action) => {
    switch (action.type) {
        case VERIFY_USER:
            return action.payload
        default:
            return state
    }
}