import React from 'react';
import moment from 'moment';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Header from './Header';
import FilterMenu from './FilterMenu';


let taskId = null;


class App extends React.Component {
    state = { 
        tasks: [],
        tasksToDisplay: []
    };

    onNewTaskSubmit = (term) => {
        taskId = taskId + 1;

        const newTask = {
            id: taskId,
            content: term,
            isDone: false,
            date_created: moment(new Date()).format('lll')
        };

        let temp = this.state.tasks;
        temp.push(newTask);
        this.setState({ tasks: temp, tasksToDisplay: temp });
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
        
        this.setState({ tasks: tasks }); 
    };

    isDoneChange = (id) => {
        const tasks = this.state.tasks;
        tasks.forEach(task => {
            if(task.id === id) {task.isDone =!task.isDone};
        });
        this.setState({ tasks: tasks });
    };

    filterTasks = (cat) => {
        switch(cat) {
            case 'all':
                this.setState({ tasksToDisplay: this.state.tasks });
                break;
            case 'pending':
                const tasks = this.state.tasks;
                const pendingTasks = tasks.filter(task => task.isDone === false);
                this.setState({ tasksToDisplay: pendingTasks });
                console.log(this.state);
                break;
            case 'done':
                const temp = this.state.tasks;
                const doneTasks = temp.filter(task => task.isDone === true);
                this.setState({ tasksToDisplay: doneTasks });
                break;
        };
    };

    render() {
        return (
            <div>
                <Header />
                <FilterMenu filterTasks={this.filterTasks} />
                <InputBar onSubmit={this.onNewTaskSubmit} />
                <TaskList
                    tasks={this.state.tasksToDisplay}
                    onClick={this.onClickDelete}
                    onSubmit={this.onSubmitUpdate}
                    isDoneChange={this.isDoneChange}
                />
            </div>
        );
    };
};

export default App;
