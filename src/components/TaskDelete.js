import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../history';
import { deleteTask } from "../actions";

class TaskDelete extends React.Component {
    renderActions() {
        const { id } = this.props.match.params;
        const nav = this.props.nav;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTask(id, nav)} className="ui primary button">Delete</button>
                <Link to={`/list/${nav}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }; 

    render() {
        return (
            <Modal 
            title="Delete Task"
            content="Are you sure you want to delete this task?"
            actions={this.renderActions()}
            onDismiss={() => history.push(`/list/${this.props.nav}`)}
            />
        );
    };
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    };
};

export default connect(mapStateToProps, { deleteTask })(TaskDelete);