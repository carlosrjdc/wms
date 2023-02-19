const express = require("express");
const { Router } = require("express");
const app = express();
const db = require("./models");
require("dotenv").config();

const route = Router();

route.get("/", (req, res) => {
  console.log(process.env.USUARIOSQL);
  return res.json({ sucesso: true, message: "Sucesso" });
});

route.get("/user", (req, res) => {
  const dados = db.User.findAll()
    .then((response) => res.status(200).json(response))
    .catch((erro) => console.log(erro));
});

app.use(route);
app.listen(4000, () => console.log("server rodando"));
