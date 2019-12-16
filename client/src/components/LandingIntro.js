import React, { Component } from 'react';

const LandingIntro = (props) => (
    <div id="landing-container">
        <div className="crest-container">
            <img src="https://www.mistyteahouse.com/wp-content/uploads/2015/12/Monk-Crest-Vector.png?w=640" alt="Monk Crest" className="monk-crest"/>
        </div>
        <div className="intro-container">
            <p className="hello">Hello, I'm</p>
            <p className="peimei">Peimei</p>
        </div>
    </div>
)

export default LandingIntro;