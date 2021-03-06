import React, { Component } from 'react';
import Navbar from './Navbar.js';
import LandingIntro from './LandingIntro.js';
import Accolades from './Accolades.js';
import Footer from './Footer.js';
import About from './aboutme/About.js';
import Contact from './contact/Contact.js';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'home'
        }
        this.pageNavigator = this.pageNavigator.bind(this);
    }

    pageNavigator(e) {
        let { nodeValue } = e.target.attributes['0'];
        this.setState({
            page: nodeValue
        })
    }


    render() {
        return (
            <div>
                {this.state.page === 'home' ? 
                <div>
                    <header>
                        <Navbar pageNavi={this.pageNavigator}/>
                    </header>
                    <LandingIntro pageNavi={this.pageNavigator}/>
                    <Accolades />
                    <footer>
                        <Footer />
                    </footer>
                </div>
                : this.state.page === 'about' ? 
                <div>
                    <header>
                        <Navbar pageNavi={this.pageNavigator}/>
                    </header>
                    <About />
                </div> 
                : this.state.page === 'contact' ?
                <div>
                    <header>
                        <Navbar pageNavi={this.pageNavigator}/>
                    </header>
                    <Contact />
                </div> : null}
            </div>
        )
    }
}