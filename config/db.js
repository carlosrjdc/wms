const Sequelize = require("sequelize")
const sequelize = new Sequelize("bouavi08_wms", "bouavi08_carlos", "Lactalis@2022", {
  dialect: "mysql",
  host: "192.185.210.120",
  port: 3306,
  timezone: "-03:00",
  dialectOptions: {
    useUTC: false,
  },
});

module.exports = sequelize;
