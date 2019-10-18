import React from 'react';
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
            date_created: new Date()
        };

        let temp = this.state.tasks;
        temp.push(newTask);
        this.setState({tasks: temp});
        console.log(this.state);
    };

    /*isDoneUpdate = {

    }*/

    render() {
        return (
            <div>
                <InputBar onSubmit={this.onNewTaskSubmit} />
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    };
};

export default App;
