import React from 'react';

const KeyForm = (props) => (
    <div>
        <form id="keyform" onSubmit={props.onSubmit}>
            <label>Character Name</label>
            <input className="key-input" type="text" name="charName" required onChange={props.onChange} />
            <label>Realm</label>
            <input className="key-input" type="text" name="realm" required onChange={props.onChange} />
            <label>Dungeon</label>
            <input className="key-input" type="text" name="dungeon" required onChange={props.onChange} />
            <label>Level</label>
            <input id="level" className="key-input" type="number" name="level" required onChange={props.onChange} />
            {/* <input className="key-submit" type="submit" value="Submit" /> */}
            <div></div>
            <button className="key-submit">Submit</button>
        </form>
    </div>
)

export default KeyForm;