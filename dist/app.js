"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const socket_1 = __importDefault(require("./routes/socket"));
const user_1 = __importDefault(require("./routes/user"));
class App {
    constructor() {
        this.app = express_1.default();
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.middleware();
        this.routes();
        this.errorHandeller();
    }
    routes() {
        this.app.use('/api/v1/users', user_1.default);
        this.app.use('/api/v1/sockets', socket_1.default);
    }
    errorHandeller() {
        this.app.use((req, res, next) => {
            const error = new Error('Not Found');
            error.stack = '404';
            next(error);
        });
        this.app.use((error, req, res, next) => {
            res.status(500).json({
                message: error.message
            });
        });
    }
    middleware() {
        this.app.use((req, res, next) => {
            console.log('Checking Middleware');
            next();
        });
    }
    fileHandler() {
        this.app.use((req, res, next) => {
        });
    }
    start(port) {
        return new Promise((resolve, rejects) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err) => {
                rejects(err);
            });
        });
    }
}
exports.default = App;
