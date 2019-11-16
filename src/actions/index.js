import { SIGN_IN, SIGN_OUT, ADD_TASK, LOAD_TASKS, EDIT_TASK, DELETE_TASK, TOGGLE_MENU } from "./type"
import tasks from "../apis/tasks";
import history from '../history';

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

export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU
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

    dispatch({
        type: LOAD_TASKS,
        payload: response.data
    });
};

export const deleteTask = (taskId) => async (dispatch) => {
    await tasks.delete(`/tasks/${taskId}`);

    dispatch({
        type: DELETE_TASK,
        payload: taskId
    });

    history.push('/list');
};

