import { ADD_TASK, LOAD_TASKS, EDIT_TASK } from "../actions/type";
import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, [action.payload.id]: action.payload };
        case LOAD_TASKS:
            console.log(action.payload);
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case EDIT_TASK:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    };
};