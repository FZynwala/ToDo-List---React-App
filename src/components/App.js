import React from 'react';
import moment from 'moment';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Header from './Header';


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

    onSubmitUpdate = (id, newContent) => {
        const tasks = this.state.tasks;
        tasks.forEach(task => { if(task.id === id) { 
            task.content = newContent;
        }} );
        console.log(tasks);
        
        this.setState({ tasks: tasks }); 
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Header />
                <InputBar onSubmit={this.onNewTaskSubmit} />
                <TaskList tasks={this.state.tasks} onClick={this.onClickDelete} onSubmit={this.onSubmitUpdate} />
            </div>
        );
    };
};

export default App;
