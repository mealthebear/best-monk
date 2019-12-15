import React, { Component } from 'react';
import Navbar from './Navbar.js';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar />
                </header>
            </div>
        )
    }
}