
const { ADD_PURCHASE } = require("../actions/action")


export const purchaseReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PURCHASE:
            return action.payload

        default:
            return state
    }
}