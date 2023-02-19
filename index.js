const express = require("express");
const { Router } = require("express");
const app = express();

const route = Router();

route.get("/", (req, res) => {
    return res.json({ sucesso: true, message: "Sucesso" });
  });

app.use(route);
app.listen(4000, () => console.log("server rodando"));
