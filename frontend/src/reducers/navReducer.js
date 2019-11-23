import { NAV_PAGE } from "../actions/type";

export default (state=0, action) => {
    switch (action.type) {
        case NAV_PAGE:
            let newState = state;
            return newState = action.payload;
        default:
            return state;
    };
};