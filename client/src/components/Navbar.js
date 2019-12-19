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
                    <li value="home" id="title" onClick={this.props.pageNavi}>Best Monk</li>
                    <li value="about" onClick={this.props.pageNavi}>About Me</li>
                    <li value="contact" onClick={this.props.pageNavi}>Contact</li>
                </ul>
            </div>
        )
    }
}