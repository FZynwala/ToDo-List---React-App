import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchTasks } from '../actions';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Header from './Header';
import FilterMenu from './FilterMenu';
import LoginPage from './LoginPage';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <InputBar />
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/list" exact component={TaskList} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};


export default connect(null, { fetchTasks })(App);
