import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}