const express = require("express");
const RavexController = require("../../controllers/RavexNF/RavexController.js");
const autenticacao = require("../../controllers/Users/autenticacao");

const router = express.Router();

router.get("/nfRavex", autenticacao, RavexController.TodasNotas);
router.get("/dash", autenticacao, RavexController.TodasNotasver);

module.exports = router;
