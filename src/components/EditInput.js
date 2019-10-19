//import './EditInput.css';
import React from 'react';

class EditInput extends React.Component {
    state = { term: this.props.content };
    

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="input-bar ui segment" >
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Edit task</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})}
                            placeholder="Type new task..."
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default EditInput;