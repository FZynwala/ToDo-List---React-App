import { SIGN_IN, SIGN_OUT, ADD_TASK, LOAD_TASKS, EDIT_TASK } from "./type"
import tasks from "../apis/tasks";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const editTask = (taskId, editedTask) => async (dispatch) => {
    const response = await tasks.put(`/tasks/${taskId}`, editedTask)
    
    dispatch({
        type: EDIT_TASK,
        payload: response.data
    });
};

export const addTask = (task) => async (dispatch) => {
    const response = await tasks.post('/tasks', task);

    dispatch({
        type: ADD_TASK,
        payload: response.data
    });
};

export const fetchTasks = () => async (dispatch) => {
    const response = await tasks.get('/tasks');
    console.log(response.data);

    dispatch({
        type: LOAD_TASKS,
        payload: response.data
    });
};

