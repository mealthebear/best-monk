import React from 'react';

const KeyForm = (props) => (
    <div>
        <form id="keyform">
            <label>Character Name</label>
            <input type="text" name="charname" />
            <label>Realm</label>
            <input type="text" name="realm" />
            <label>Dungeon</label>
            <input type="text" name="dungeon" />
            <label>Level</label>
            <input type="number" name="dungeon" />
        </form>
    </div>
)

export default KeyForm;