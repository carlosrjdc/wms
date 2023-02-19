const express = require("express");
const { Router } = require("express");
const app = express();
const db = require("./models")

const route = Router();

route.get("/", (req, res) => {
    return res.json({ sucesso: true, message: "Sucesso" });
  });

  route.get("/user", (req, res)=> {
    const dados = db.User.findAll().then( response => res.status(200).json(response)).catch(err => console.log(err))
  })

app.use(route);
app.listen(4000, () => console.log("server rodando"));
