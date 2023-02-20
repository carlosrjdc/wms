const express = require("express");
const RavexController = require("../../controllers/RavexNF/RavexController.js");
const autenticacao = require("../../controllers/Users/autenticacao");

const router = express.Router();

router.get("/nfRavex", autenticacao, RavexController.TodasNotas);
router.get("/dash", autenticacao, RavexController.TodasNotasver);
router.get("/emaberto", autenticacao, RavexController.filtroEmaberto);
router.post("/input", autenticacao, RavexController.prepararInput);
router.put(
  "/atualizarravex/:id",
  autenticacao,
  RavexController.AtualizarRegistro
);
router.delete(
  "/deletarravex/:id",
  autenticacao,
  RavexController.deletarRegistro
);

module.exports = router;
