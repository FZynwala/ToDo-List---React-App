import './TaskItem.css';
import React from 'react';
import EditInput from './EditInput';


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
        this.setState({isDone: !this.state.isDone});
        const { color, text } = buttonConfig[this.state.isDone ? 'done' : 'pending'];
        this.setState({ color, text });
    };

    onClickDeleteButton = (event) => {
        this.props.onClick(this.props.task.id);
    };

    onClickEditButton = () => {
        this.setState({isEditMode: !this.state.isEditMode});
       
    };

    editWindowRendering = () => {
        if(this.state.isEditMode) {
            return (
                <div className="edit-input ui input">
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value})}
                    />
                </div>
            );
        } else {
            return <div className="header" style={{marginBottom: '10px'}}>{this.props.task.content}</div>
        }
    };

    render() {
        return (
            <div className="item-box item" style={{marginBottom: '0px'}} >
                <div className="content">
                    {this.editWindowRendering()}
                    {this.props.task.date_created}
                    
                </div>
                <div className="buttons" >
                    <button className={`button-status ui inverted ${this.state.color} button`} onClick={this.onClickStatus} >{this.state.text}</button>
                    <button className="ui icon button" onClick={this.onClickEditButton} ><i className="black edit outline icon"></i></button>
                    <button className="ui icon button" onClick={this.onClickDeleteButton} ><i className="black trash alternate outline icon"></i></button>
                </div>
            </div>
        );
    };
};

export default TaskItem;
