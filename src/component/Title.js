import React, { Component } from 'react';

class Title extends Component {    
    render() {
        return (
            <div className="title">
                {this.props.name}
            </div>
        );
    }
}

export default Title;