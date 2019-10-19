import './TaskList.css';
import React from 'react';
import TaskItem from './TaskItem';



const TaskList = props => {
    const tasks = props.tasks.map((task) => {
        return <TaskItem task={task} key={task.id} onClick={props.onClick} onSubmit={props.onSubmit} />
    });

    const renderTasks = () => {
        console.log(props.tasks);
        if(props.tasks.length !== 0) return tasks;
        
        return 'Relax! You have nothing to do'
    }

    return (
        <div className="task-list ui inverted segment" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="ui inverted relaxed divided list">
                {renderTasks()}
            </div>
        </div>
    );
};

export default TaskList;
