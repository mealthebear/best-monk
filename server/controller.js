const { getAllUsers, addUser } = require('../database/dbHelpers.js');

const getAllController = () => {

}

const addController = (res, req) => {
    let { body } = req;
    console.log('This is the Request **********', req);
    console.log('This is the body ****** body **** body***', body);
    console.log(req.body);
}

module.exports = {
    getAllController,
    addController
}