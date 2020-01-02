const { getAllUsers, addUser } = require('../database/dbHelpers.js');

const getAllController = () => {

}

const addController = (req, res) => {
    let { body } = req;
    addUser(body)
    .then(() => res.status(201).send('Post successful!'))
    .catch((err) => res.status(401).send('Unable to post user', err));
}

module.exports = {
    getAllController,
    addController
}