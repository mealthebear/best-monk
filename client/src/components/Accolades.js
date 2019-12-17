import React, { Component } from 'react';

const Accolades = (props) => (
    <div className="accolades-container">
        <div className="accolades-text">Notable Accomplishments of My Monk Career</div>
            <span className="number-circle nc-1">1</span><p className="achieve-1">Saved a bunch of dweebs from the brink of death during Quaking and Bursting</p>
            <hr className="line-1"/>
            <span className="number-circle nc-2">2</span><p className="achieve-2">Outputted some sick fist-weaving DPS on boss fights (and it wasn't even <strong className="shrine">Shrine!</strong>)</p>
            <hr className="line-2"/>
            <span className="number-circle nc-3">3</span><p className="achieve-3">Told the tank to run the $%#@ away and drop necrotic stacks, single-handedly saving the key</p>
    </div>
)

export default Accolades;