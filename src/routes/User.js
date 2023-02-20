const express = require("express");
const UserController = require("../../controllers/Users/UserController");
const autenticacao = require("../../controllers/Users/autenticacao");

const router = express.Router();

router.get("/users", UserController.buscarUsuarios);
router.post("/user", UserController.criarUsuario);
router.post("/autenticar", UserController.autenticarUsuario);
router.put("/atualizar/:id", autenticacao, UserController.editarUsuario);
router.get("/todosusers", autenticacao, UserController.buscarUsuarios);

module.exports = router;
