import { SETTOUTORIALDATA, PUBCHANGE } from "../action/tutorial";

export const tutorialReducer = (state = [], action) => {
    switch (action.type) {
        case SETTOUTORIALDATA:
            return action.payload
        case PUBCHANGE:
            return state.map((res) => {
                return res.id === action.payload.id ?
                    { ...res, published: res.published } : res

            })
        default:
            return state

    }
}
