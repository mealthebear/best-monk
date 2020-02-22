import React, { Component } from 'react';
import Axios from 'axios';

export default class PlayerQueue extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.getPlayers = this.getPlayers.bind(this);
    }

    getPlayers() {
        Axios.get('/api/key')
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div id="queue-section">
                <div id="queue" onClick={this.getPlayers}>
                    Show the Queue
                </div>
            </div>
        )
    }
}