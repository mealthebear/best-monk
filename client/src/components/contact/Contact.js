import React, { Component } from 'react';
import FullyBooked from './FullyBooked.js';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div id="contact">
                <FullyBooked />
            </div>
        )
    }
}