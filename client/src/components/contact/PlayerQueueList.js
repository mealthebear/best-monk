import React from 'react';

const PlayerQueueList = (props) => (
    <div>
        {props.players.map((player, i) => (
            <div className="player-box" key={i}>
                <p className="player-name">Character: {player.charName}-{player.realm}</p>
                <p>Key: <span className="key-name">[{player.dungeon} ({player.level})]</span></p>
            </div>
        ))}
    </div>
)

export default PlayerQueueList;