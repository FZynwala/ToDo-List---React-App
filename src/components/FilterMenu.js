import React from 'react';
import './FilterMenu.css';

class FilterMenu extends React.Component {
    state = { isFilterClick: false };

    onClickFilterButton = () => {
        this.setState({ isFilterClick: !this.state.isFilterClick });
    };

    onClickAllTasks = () => {
        this.props.filterTasks('all');
        this.setState({ isFilterClick: !this.state.isFilterClick });
    };

    onClickPendingTasks = () => {
        this.props.filterTasks('pending');
        this.setState({ isFilterClick: !this.state.isFilterClick });
    };

    onClickDoneTasks = () => {
        this.props.filterTasks('done');
        this.setState({ isFilterClick: !this.state.isFilterClick });
    };

    menuRender = () => {
        if(this.state.isFilterClick) {
            return (
                <div className="filter-menu ui inverted vertical menu">
                    <a className="item" onClick={this.onClickAllTasks}>ALL</a>
                    <a className="item" onClick={this.onClickPendingTasks}>PENDING</a>
                    <a className="item" onClick={this.onClickDoneTasks}>DONE</a>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div className="filter-button">
                    <button className="ui icon button" onClick={this.onClickFilterButton} >
                        <i className="filter icon"></i>
                    </button>
                </div>
                {this.menuRender()}
            </div>
        );
    };
};

export default FilterMenu;
