import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchTasks } from '../actions';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Header from './Header';
import FilterMenu from './FilterMenu';
import LoginPage from './LoginPage';
import Modal from './Modal';
import history from '../history';
import TaskDelete from './TaskDelete';
import Menu from './Menu';
import TaskListDone from './TaskListDone';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchTasks(this.props.userId);
    };

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/list/:conf" exact component={Menu} />
                        <Route path="/delete/:id" exact component={TaskDelete} />
                        <Route path="/list/done" exact component={TaskListDone} />
                    </div>
                </Router>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
};

export default connect(mapStateToProps, { fetchTasks })(App);
