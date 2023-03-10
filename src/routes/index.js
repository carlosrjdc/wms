const express = require("express");
const cors = require("cors");
const User = require("./User.js");
const Ravex = require("./Ravex.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ Titulo: "Carlos Roberto" });
  });

  app.use(
    express.json(),
    cors(),
    User,
    Ravex,
    express.raw({ type: "application/pdf" })
  );
};

module.exports = routes;
