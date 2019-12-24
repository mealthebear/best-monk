const Player = require('./model.js');

const getAllUsers = () => {
    return Player.findAll();
}

const addUser = (obj) => {
    return Player.create(obj)
}

// Update user

// Delete user

module.exports = {
    getAllUsers,
    addUser
}