import React, { Component } from 'react';
import Navbar from './Navbar.js';
import LandingIntro from './LandingIntro.js';
import Accolades from './Accolades.js';

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
                <LandingIntro />
                <Accolades />
            </div>
        )
    }
}