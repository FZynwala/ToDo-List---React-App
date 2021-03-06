import './TaskList.css';
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import Menu from './Menu';
import Header from './Header';
import InputBar from './InputBar';
import { setNavFlag } from '../actions';


class TaskListDone extends React.Component {
    componentDidMount() {
        this.props.setNavFlag(this.props.conf);
    }
    
   renderTasks() {
    if(this.props.tasks.length === 0) {
        return 'You haven not done anything yet!';
    } else {
        return this.props.tasks.map((task) => {
            if(task.isDone) {
                return (
                    <TaskItem
                        task={task}
                        key={task.id}
                    />
                );
            }
         });
    }
   }; 
    
    render() {
        
        return (
            <React.Fragment>
                <InputBar />
                <div className="task-list ui inverted segment" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <div className="ui inverted relaxed divided list">
                        {this.renderTasks()}
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

const mapStateToProps =(state) => {
    return {
        tasks: Object.values(state.tasks),
        menu: state.menu
    };
};

export default connect(mapStateToProps, { setNavFlag })(TaskListDone);
