

const fs = require('fs');

module.exports = {
  development: {
    username: "bouavi08_carlos",
    password: "Lactalis@2022",
    database: "bouavi08_wms",
    host: "192.185.210.120",
    port:3306,
    dialect: "mysql",
    dialectModule:require("mysql2")
  },
  test: {
    username: "bouavi08_carlos",
    password: "Lactalis@2022",
    database: "bouavi08_wms",
    host: "192.185.210.120",
    port:3306,
    dialect: "mysql",
    dialectModule:require("mysql2")
  },
  production: {
    username: "bouavi08_carlos",
    password: "Lactalis@2022",
    database: "bouavi08_wms",
    host: "192.185.210.120",
    port:3306,
    dialect: "mysql",
    dialectModule:require("mysql2")
  }
};

