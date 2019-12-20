const User = require('./model.js');

const getAllUsers = () => {
    return User.findAll();
}

const addUser = (obj) => {
    return User.create(obj)
}

// Update user

// Delete user

module.exports = {
    getAllUsers,
    addUser
}