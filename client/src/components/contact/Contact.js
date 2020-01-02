import React, { Component } from 'react';
import FullyBooked from './FullyBooked.js';
import KeyForm from './KeyForm.js';
import Axios from 'axios';

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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postUser = this.postUser.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit() {
        this.postUser();
    }

    postUser() {
        Axios.post('/api/key', {
            charName: this.state.charName,
            realm: this.state.realm,
            dungeon: this.state.dungeon,
            level: this.state.level
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
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