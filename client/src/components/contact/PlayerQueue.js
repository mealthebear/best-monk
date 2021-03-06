import React, { Component } from 'react';
import PlayerQueueList from './PlayerQueueList.js';
import Axios from 'axios';

export default class PlayerQueue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: []
        };
        this.getPlayers = this.getPlayers.bind(this);
    }

    getPlayers() {
        Axios.get('/api/key')
        .then((response) => {
            this.setState({
                players: response.data
            })
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div id="queue-section">
                <div id="queue" onClick={this.getPlayers}>
                    Show the Queue
                </div>
                <div className="queue-front">Front of the Line</div>
                {/* <p onClick={() => console.log(this.state.players)}>Click me to show players state</p> */}
                <PlayerQueueList players={this.state.players}/>
                <div className="queue-back">Back of the Line</div>
            </div>
        )
    }
}