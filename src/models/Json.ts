import Sequelize = require("sequelize");
import sequelize from "../database/connection";
import bcrypt from "bcrypt";

export default sequelize.define("jsons", {
  id: {
    type: Sequelize.INTEGER(),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  json: {
    type: Sequelize.TEXT(),
    // @ts-ignore
    get: function () {
      // @ts-ignore
      return JSON.parse(this.getDataValue("json"));
    },
    // @ts-ignore
    set: function (value) {
      // @ts-ignore
      this.setDataValue("json", JSON.stringify(value));
    },
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  deletedAt: Sequelize.DATE,
});
