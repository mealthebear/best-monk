import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <ul className="navbar">
                    <li id="title">Best Monk</li>
                    <li value="about" onClick={this.props.pageNavi}>About Me</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}