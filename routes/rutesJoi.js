const express = require(`express`);
const router = express.Router();
const userController = require('../controller/filmController');
const joiSchemaValidation = require('../midelware/midelJoi');
const userSchemas = require('../models/joi/filmSchema');

router.get(`/details/:id`,
    joiSchemaValidation.validate(userSchemas.userIdSchema, `path`),
    userController.findById);

module.exports = router;
