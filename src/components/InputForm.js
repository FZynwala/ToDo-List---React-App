import './InputBar.css';
import { Field, reduxForm } from 'redux-form';
import React from 'react';
 

class InputForm extends React.Component {
   
    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues);
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


export default reduxForm({
    form: 'inputForm'
})(InputForm);


