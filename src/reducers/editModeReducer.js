import { EDIT_MODE } from "../actions/type";

export default (state=false, action) => {
    switch (action.type) {
        case EDIT_MODE:
            let newState = state;
            return newState = !newState;
        default:
            return state;
    };
};