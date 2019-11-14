import './InputBar.css';
import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { addTask } from '../actions';

class InputBar extends React.Component {
    state = { term: '' };
    

    onFormSubmit = (formValues) => {
        const newTask = {
            content: formValues.newTask,
            userId: this.props.userId,
            isDone: false,
            create_date: moment(new Date()).format('lll') 
        };
        this.props.addTask(newTask);
    };

    renderInput = ({ input }) => {
        return (
            <div className="input-bar ui segment" style={{marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black'}}>
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form" >
                    <div className="field">
                        <input { ...input}
                            placeholder="Type new task..."
                        />
                    </div>
                </form>
            </div>
        );
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Field name="newTask" component={this.renderInput} />
            </div>
        );
    };
};

const mapStateToProps =(state) => {
    return {
        userId: state.auth.userId
    };
};

const con = connect(mapStateToProps, { addTask })(InputBar);

export default reduxForm({
    form: 'newTask'
})(con);