import './InputBar.css';
import React from 'react';

class InputBar extends React.Component {
    state = { term: '' };
    

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
        this.setState({ term: '' });
    };

    render() {
        return (
            <div className="input-bar ui segment" style={{marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
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

export default InputBar;