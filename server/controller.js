const { getAllUsers, addUser } = require('../database/dbHelpers.js');

const getAllController = () => {

}

const addController = (res, req) => {
    let { body } = req.req; // Investigate further why req.req
}

module.exports = {
    getAllController,
    addController
}