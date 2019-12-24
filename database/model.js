const db = require('./index.js');
const Sequelize = require('sequelize');

const Player = db.define('player', {
    charName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    realm: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dungeon: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Player.sync();

module.exports = Player;