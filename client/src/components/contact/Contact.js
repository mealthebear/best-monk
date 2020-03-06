import React, { Component } from 'react';
import FullyBooked from './FullyBooked.js';
import KeyForm from './KeyForm.js';
import PlayerQueue from './PlayerQueue.js';
import Axios from 'axios';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charName: '',
            realm: '',
            dungeon: '',
            level: 0,
            messageType: '',
            showMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postUser = this.postUser.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.level < 2) {
            this.setState({ messageType: 'Get real!', showMessage: true })
            return;
        } else if (this.state.level < 15) {
            this.setState({ messageType: 'Woah, slow down there. Sorry to break it to you, but I don\'t do low keys anymore', showMessage: true })
            return;
        }
        this.postUser();
    }

    postUser() {
        Axios.post('/api/key', {
            charName: this.state.charName,
            realm: this.state.realm,
            dungeon: this.state.dungeon,
            level: Number(this.state.level)
        })
        .then((response) => {
            this.setState({ messageType: 'Awesome! Looking forward to running soon.', showMessage: true });
            console.log(response);
        })
        .catch((error) => {
            this.setState({ messageType: 'Whoops! Looks like something went wrong.', showMessage: true });
            console.log(error);
        })
    }

    closeMessage() {
        this.setState({ showMessage: false })
    }

    render() {
        return (
            <div>
                <div id="contact">
                    {/* <FullyBooked /> */}
                    <KeyForm onChange={this.handleChange} onSubmit={this.handleSubmit} message={this.state.messageType} showMessage={this.state.showMessage} closeMessage={this.closeMessage}/>
                </div>
                <PlayerQueue />
            </div>
        )
    }
}