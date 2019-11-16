import './Menu.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../actions';
import Header from './Header';
import App from './App';
import TaskList from './TaskList';
import TaskListDone from './TaskListDone';
import TaskListPending from './TaskListPending';

let menuConfig = {
    clicked: {
        visible: 'visible',
        dimmed: 'dimmed'
    },
    notClicked: {
        visible: "",
        dimmed: ""
    }
};


class Menu extends React.Component {
    onMenuClick =(nr) => {
        this.props.toggleMenu();

        
    };

    renderList = () => {
        const conf = this.props.match.params.conf;
        console.log(conf);
        if(conf === '0') {
            return <TaskList />
        } else if(conf === '1') {
            return <TaskListDone />
        } else if(conf === '2') {
            return <TaskListPending />
        }
    };

    render() {
        const { visible, dimmed } = this.props.menu ? menuConfig.clicked : menuConfig.notClicked;
        return (
            <React.Fragment>
                <div className="ui grid">
                    <div className="tablet mobile only row">
                        <div className="column">
                            <div onClick={() => this.onMenuClick(0)} className="ui menu">
                                <a id="mobile_item" className="item"><i className="bars icon"></i></a>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="ui pushable segment">
                    <div className={`ui vertical inverted sidebar labeled icon menu ${visible}`}>
                        <Link to="/list/0" onClick={() => this.onMenuClick(1)} className="item">
                            <i className="circular tasks icon"></i>
                            All
                        </Link>
                        <Link to="/list/1" onClick={() => this.onMenuClick(2)} className="item">
                            <i className="check icon"></i>
                            Done
                        </Link>
                        <Link to="/list/2" onClick={() => this.onMenuClick(3)} className="item">
                            <i className="bell icon"></i>
                            Pending
                        </Link>
                    </div>
                    <div className={`${this.props.menu ? 'dimmed' : ''} pusher`}>
                        <Header />
                        {this.renderList()}
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    };
};

export default connect(mapStateToProps, { toggleMenu })(Menu);