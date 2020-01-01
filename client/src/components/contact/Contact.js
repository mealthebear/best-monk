import React, { Component } from 'react';
import FullyBooked from './FullyBooked.js';
import KeyForm from './KeyForm.js';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div id="contact">
                {/* <FullyBooked /> */}
                <KeyForm />
            </div>
        )
    }
}