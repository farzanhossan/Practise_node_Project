"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request, Response, NextFunction, Router } from 'express';
const express_1 = __importDefault(require("express"));
const socketControlller_1 = require("../controllers/socketControlller");
class SocketRouter {
    constructor() {
        this.socketController = new socketControlller_1.SocketController();
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        try {
            this.router.get('/', this.socketController.test);
        }
        catch (error) {
            if (error)
                throw error;
        }
    }
}
const socketRouter = new SocketRouter();
exports.default = socketRouter.router;
