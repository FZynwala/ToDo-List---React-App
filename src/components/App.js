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


class App extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    };

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <InputBar />
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/list" exact component={TaskList} />
                        <Route path="/delete/:id" exact component={TaskDelete} />
                    </div>
                </Router>
            </div>
        );
    };
};


export default connect(null, { fetchTasks })(App);
