import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{this.props.date_created}</div>
                    {this.props.content}
                </div>
            </div>
        );
    };
};

export default TaskItem;
