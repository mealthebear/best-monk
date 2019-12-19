import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div id="contact">
                <p>Aw shucks! It looks like I'm all booked for the 
                    <span> </span>
                    <span className="red">H</span>
                    <span className="red">o</span>
                    <span className="red">l</span>
                    <span className="red">i</span>
                    <span className="green">d</span>
                    <span className="green">a</span>
                    <span className="green">y</span>
                    <span className="green">s</span>.</p>
                <p>Check back again soon!</p>
            </div>
        )
    }
}