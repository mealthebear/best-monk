import React, { Component } from 'react';
import RunKeyButton from './RunKeyButton.js';

const LandingIntro = (props) => (
    <div id="landing-container">
        <div className="crest-container">
            <img src="https://i.ibb.co/3fs5W6W/monkcrest.png" alt="Monk Crest" className="monk-crest"/>
        </div>
        <div className="intro-container">
            <p className="hello">Hello, I'm</p>
            <p className="peimei">Peimei!</p>
            <p className="question">How can I <span className="heal">heal</span> you today?</p>
            <RunKeyButton pageNavi={props.pageNavi}/>
        </div>
    </div>
)

export default LandingIntro;