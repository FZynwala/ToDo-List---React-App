import './TaskList.css';
import React from 'react';
import TaskItem from './TaskItem';


const TaskList = props => {
    const tasks = props.tasks.map((task) => {
        return <TaskItem task={task} key={task.id} onClick={props.onClick} />
    });

    return (
        <div className="task-list ui inverted segment" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="ui inverted relaxed divided list">
                {tasks}
            </div>
        </div>
    );
};

export default TaskList;
