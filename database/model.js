const db = require('./index.js');
const Sequelize = require('sequelize');

const User = db.define('user', {
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

User.sync();

module.exports = User;