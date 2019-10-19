import React from 'react';
import moment from 'moment';
import InputBar from './InputBar';
import TaskList from './TaskList';


let taskId = null;


class App extends React.Component {
    state = { tasks: [] };

    onNewTaskSubmit = (term) => {
        taskId = taskId + 1;

        const newTask = {
            id: taskId,
            content: term,
            date_created: moment(new Date()).format('lll')
        };

        let temp = this.state.tasks;
        temp.push(newTask);
        this.setState({tasks: temp});
        console.log(this.state);
    };

    onClickDelete = (id)=> {
        const oldTasks = this.state.tasks;
        const newTasks = oldTasks.filter(task => task.id !== id);
        this.setState({ tasks: newTasks });
    };

    render() {
        return (
            <div>
                <InputBar onSubmit={this.onNewTaskSubmit} />
                <TaskList tasks={this.state.tasks} onClick={this.onClickDelete} />
            </div>
        );
    };
};

export default App;
