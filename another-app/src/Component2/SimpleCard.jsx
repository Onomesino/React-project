import React, { Component } from 'react';
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
class SimpleCard extends Component {
    render() {
        return (
            <div className='container'>
                <Title name="My"/>
                <Image/>
                <Description name="Software" />
            </div>
        );
    }
}

export default SimpleCard;
