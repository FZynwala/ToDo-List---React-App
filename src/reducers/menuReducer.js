import { TOGGLE_MENU } from "../actions/type";

export default (state=false, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            let newState = state;
            return !newState;
        default:
            return state;
    };
};