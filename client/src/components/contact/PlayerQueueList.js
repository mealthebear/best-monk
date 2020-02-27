import React from 'react';

const PlayerQueueList = (props) => (
    <div>
        {props.players.map((player, i) => (
            <div className="player-box" key={i}>
                <p>Character: {player.charName}-{player.realm}</p>
                <p>Key: [{player.dungeon} ({player.level})]</p>
            </div>
        ))}
    </div>
)

export default PlayerQueueList;