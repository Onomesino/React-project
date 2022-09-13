import React, { Component } from 'react';

class Description extends Component {
    render(props) {
        return (
            <div>
               <h3>I am a {this.props.name} Developer</h3> 
            </div>
        );
    }
}

export default Description;
