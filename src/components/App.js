import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import moment from 'moment';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Header from './Header';
import FilterMenu from './FilterMenu';
import LoginPage from './LoginPage';


let taskId = null;


class App extends React.Component {
    

    

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/list" exact component={TaskList} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
