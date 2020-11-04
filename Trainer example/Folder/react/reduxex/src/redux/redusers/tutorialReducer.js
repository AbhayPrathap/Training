import { SETTOUTORIALDATA } from "../action/tutorial";

export const tutorialReducer =(state = [], action) => {
    switch (action.type) {
        case SETTOUTORIALDATA:
            return action.payload;
        default:
            return state
    }
}
