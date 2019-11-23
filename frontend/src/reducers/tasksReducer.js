import { ADD_TASK, LOAD_TASKS, EDIT_TASK, DELETE_TASK, SIGN_OUT } from "../actions/type";
import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, [action.payload._id]: action.payload };
        case LOAD_TASKS:
            return { ...state, ..._.mapKeys(action.payload, '_id')};
        case EDIT_TASK:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_TASK:
            return _.omit(state, action.payload);
        case SIGN_OUT:
            return {}
        default:
            return state;
    };
};