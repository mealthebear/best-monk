import React, { Component } from 'react';

export default class PlayerQueue extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div id="queue-section">
                <div id="queue">
                    Show the Queue
                </div>
            </div>
        )
    }
}