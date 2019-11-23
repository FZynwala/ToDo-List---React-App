import './InputBar.css';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { addTask } from '../actions';
import InputForm from './InputForm';

class InputBar extends React.Component {
   
    onSubmit = (formValues) => {
        const newTask = {
            content: formValues.newTask,
            userId: this.props.userId,
            isDone: false,
            create_date: moment(new Date()).format('lll') 
        };
        console.log(newTask);
        this.props.addTask(newTask);
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <InputForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapStateToProps =(state) => {
    return {
        userId: state.auth.userId
    };
};


export default connect(mapStateToProps, { addTask })(InputBar);
