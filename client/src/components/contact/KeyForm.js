import React from 'react';

const KeyForm = (props) => (
    <div>
        <form id="keyform">
            <label>Character Name</label>
            <input className="key-input" type="text" name="charName" onChange={props.onChange} />
            <label>Realm</label>
            <input className="key-input" type="text" name="realm" onChange={props.onChange} />
            <label>Dungeon</label>
            <input className="key-input" type="text" name="dungeon" onChange={props.onChange} />
            <label>Level</label>
            <input id="level" className="key-input" type="number" name="level" onChange={props.onChange} />
            <input className="key-submit" type="submit" value="Submit" />
        </form>
    </div>
)

export default KeyForm;