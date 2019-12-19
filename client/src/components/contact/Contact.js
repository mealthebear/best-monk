import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div id="contact">
                <p>Aw shucks! It looks like I'm all booked for the holidays.</p>
                <p>Check back again soon!</p>
            </div>
        )
    }
}