import './TaskList.css';
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';



class TaskList extends React.Component {
    
   renderTasks() {
    if(this.props.tasks.length === 0) {
        return 'Relax! You have nothing to do right now.';
    } else {
        return this.props.tasks.map((task) => {
             return (
                 <TaskItem
                     task={task}
                     key={task.id}
                 />
             );
         });
    }
   }; 
    
    render() {
        return (
            <div className="task-list ui inverted segment" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <div className="ui inverted relaxed divided list">
                    {this.renderTasks()}
                </div>
            </div>
        );
    };
};

const mapStateToProps =(state) => {
    return {
        tasks: Object.values(state.tasks)
    };
};

export default connect(mapStateToProps)(TaskList);
