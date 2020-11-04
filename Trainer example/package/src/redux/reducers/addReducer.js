
const { ADD_PURCHASE } = require("../actions/addAction")


export const purchaseReducer = (state = [], action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_PURCHASE:
            console.log("State",state)
            return [...state,payload]

        default:
            return state
    }
}