import React, { Component } from 'react';
import FullyBooked from './FullyBooked.js';
import KeyForm from './KeyForm.js';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charName: '',
            realm: '',
            dungeon: '',
            level: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div id="contact">
                {/* <FullyBooked /> */}
                <KeyForm onChange={this.handleChange} />
            </div>
        )
    }
}