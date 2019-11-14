import './TaskItem.css';
import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';


const buttonConfig = {
    done: {
        color: 'green',
        text: 'DONE'
    },
    pending: {
        color: 'red',
        text: 'PENDING'
    }
};


class TaskItem extends React.Component {
    state = { 
        isDone: false,
        color: 'red',
        text: 'PENDING',
        isEditMode: false,
        term: this.props.task.content 
    };

    onClickStatus = (event) => {
        const editedTask = {...this.props.task, isDone: !this.props.task.isDone};
        this.props.editTask(this.props.task.id, editedTask);
    };

    onClickDeleteButton = (event) => {
        this.props.onClick(this.props.task.id);
    };

    onClickEditButton = () => {
        this.setState({isEditMode: !this.state.isEditMode});
       
    };

    onSubmitUpdate = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.task.id, this.state.term);
        this.setState({isEditMode: !this.state.isEditMode});
    };

    componentDidMount = () => {
        const { color, text } = buttonConfig[this.props.task.isDone ? 'done' : 'pending'];
        this.setState({ color, text });
    };

    editWindowRendering = () => {
        if(this.state.isEditMode) {
            return (
                <form onSubmit={this.onSubmitUpdate}>
                <div className="edit-input ui input">
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value})}
                    />
                </div>
                </form>
            );
        } else {
            return <div className="header" style={{marginBottom: '10px'}}>{this.props.task.content}</div>
        }
    };

    render() {
        const { color, text } = buttonConfig[this.props.task.isDone ? 'done' : 'pending'];
        return (
            <div className="item-box item" style={{marginBottom: '0px'}} >
                <div className="content">
                    {this.editWindowRendering()}
                    {this.props.task.date_created}
                    
                </div>
                <div className="buttons" >
                    <button className={`button-status ui inverted ${color} button`} onClick={this.onClickStatus} >{text}</button>
                    <button className="ui icon button" onClick={this.onClickEditButton} ><i className="black edit outline icon"></i></button>
                    <button className="ui icon button" onClick={this.onClickDeleteButton} ><i className="black trash alternate outline icon"></i></button>
                </div>
            </div>
        );
    };
};

export default connect(null, { editTask })(TaskItem);
