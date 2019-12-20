const { getAllController, addController } = require('./controller.js');
const express = require('express');
const router = express.Router();

router.route('/key')
      .get(getAllController)
      .post(addController)

module.exports = router;