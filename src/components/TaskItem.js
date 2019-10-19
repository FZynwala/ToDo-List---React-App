import './TaskItem.css';
import React from 'react';

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

let toogle = 'pending';

class TaskItem extends React.Component {
    state = { isDone: false, color: 'red', text: 'PENDING' };

    onClickStatus = (event) => {
        this.setState({isDone: !this.state.isDone});
        const { color, text } = buttonConfig[this.state.isDone ? 'done' : 'pending'];
        this.setState({ color, text});
        console.log(color);
        console.log(text);
        console.log(this.state.isDone ? 'done' : 'pending');
    };

    onClickDeleteButton = (event) => {
        this.props.onClick(this.props.id);
    };

    render() {
        return (
            <div className="item-box item">
                <div className="content">
                    <div className="header">{this.props.date_created}</div>
                    {this.props.content}
                </div>
                <div className="buttons" >
                    <button className={`button-status ui inverted ${this.state.color} button`} onClick={this.onClickStatus} >{this.state.text}</button>
                    <button className="ui icon button" ><i className="black edit outline icon"></i></button>
                    <button className="ui icon button" onClick={this.onClickDeleteButton} ><i className="black trash alternate outline icon"></i></button>
                </div>
            </div>
        );
    };
};

export default TaskItem;
