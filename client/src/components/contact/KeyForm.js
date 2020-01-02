import React from 'react';

const KeyForm = (props) => (
    <div>
        <form id="keyform">
            <label>Character Name</label>
            <input className="key-input" type="text" name="charname" />
            <label>Realm</label>
            <input className="key-input" type="text" name="realm" />
            <label>Dungeon</label>
            <input className="key-input" type="text" name="dungeon" />
            <label>Level</label>
            <input className="key-input" type="number" name="dungeon" />
            <input className="key-submit" type="submit" value="Submit" />
        </form>
    </div>
)

export default KeyForm;