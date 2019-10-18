import './TaskList.css';
import React from 'react';
import TaskItem from './TaskItem';


const TaskList = props => {
    const tasks = props.tasks.map((task) => {
        return <TaskItem content={task.content} key={task.id} />
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
