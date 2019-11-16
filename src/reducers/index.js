import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import { ADD_TASK } from '../actions/type';
import menuReducer from './menuReducer';

export default combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    menu: menuReducer,
    form: formReducer.plugin({
        inputForm: (state, action) => {
            switch (action.type) {
                case ADD_TASK:
                    return undefined;
                default:
                    return state;
            };
        }
    })
});
