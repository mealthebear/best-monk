import React from 'react';

const KeyForm = (props) => (
    <div>
        <form id="keyform" onSubmit={props.onSubmit}>
            <label id="char-name-label">Character Name</label>
            <input id="char-name-input" className="key-input" type="text" name="charName" required onChange={props.onChange} />
            <label id="realm-label">Realm</label>
            <input id="realm-input" className="key-input" type="text" name="realm" required onChange={props.onChange} />
            <label id="dungeon-label">Dungeon</label>
            <input id="dungeon-input" className="key-input" type="text" name="dungeon" required onChange={props.onChange} />
            <label id="level-label">Level</label>
            <input id="level-input" className="key-input" type="number" name="level" required onChange={props.onChange} />
            {/* <input className="key-submit" type="submit" value="Submit" /> */}
            <button id="key-submit">Submit</button>
            <div id="message-div">{props.message}</div>
        </form>
    </div>
)

export default KeyForm;