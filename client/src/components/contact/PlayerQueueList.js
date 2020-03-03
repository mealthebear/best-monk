import React from 'react';

const PlayerQueueList = (props) => (
    <div>
        {props.players.map((player, i) => (
            <div className="player-box" key={i}>
                <p className="player-name">{player.charName}-{player.realm}</p>
                <p className="key-name">[{player.dungeon} ({player.level})]</p>
            </div>
        ))}
    </div>
)

export default PlayerQueueList;