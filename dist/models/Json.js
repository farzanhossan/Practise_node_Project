"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.default = connection_1.default.define("jsons", {
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
