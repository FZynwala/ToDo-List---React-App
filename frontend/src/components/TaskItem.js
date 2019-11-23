import './TaskItem.css';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { editTask } from '../actions';
import InputForm from './InputForm';


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
    state = { isEditMode: false };

    onClickStatus = (event) => {
        const editedTask = {...this.props.task, isDone: !this.props.task.isDone};
        this.props.editTask(this.props.task._id, editedTask);
    };

    onClickDeleteButton = (event) => {
        this.props.onClick(this.props.task.id);
    };

    onClickEditButton = () => {
        this.setState({ isEditMode: !this.state.isEditMode })
    };

    onSubmitUpdate = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.task.id, this.state.term);
        this.setState({isEditMode: !this.state.isEditMode});
    };

    onSubmit = (formValues) => {
        const editedTask = {...this.props.task, content: formValues.newTask};
        this.props.editTask(this.props.task._id, editedTask);
        this.setState({isEditMode: !this.state.isEditMode});
    };

    editWindowRendering = () => {
        if(this.state.isEditMode) {
            return (
                <InputForm initialValues={{newTask: this.props.task.content}} onSubmit={this.onSubmit} />
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
                    {this.props.task.create_date}
                    
                </div>
                <div className="buttons" >
                    <button className={`button-status ui inverted ${color} button`} onClick={this.onClickStatus} >{text}</button>
                    <button className="ui icon button" onClick={this.onClickEditButton} ><i className="black edit outline icon"></i></button>
                    <Link to={`/delete/${this.props.task._id}`} className="ui icon button" ><i className="black trash alternate outline icon"></i></Link>
                </div>
            </div>
        );
    };
};


const con = connect(null, { editTask })(TaskItem);
export default reduxForm({
    form: 'editTask'
})(con);