import React, { Component } from 'react';

const RunKeyButton = (props) => (
    <div className="run-key-container">
        <div value="contact" className="run-key" onClick={props.pageNavi}>Wanna Run A Key?</div>
    </div>
)

export default RunKeyButton;