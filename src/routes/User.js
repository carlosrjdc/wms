const express = require("express");
const UserController = require("../../controllers/UserController");
const autenticacao = require("../../controllers/autenticacao");

const router = express.Router();

router.get("/users", UserController.buscarUsuarios);

module.exports = router;
