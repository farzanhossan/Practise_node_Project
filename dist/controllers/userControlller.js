"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bdNumberValidator_1 = require("./../helper/bdNumberValidator");
const winston_1 = require("../helper/winston");
const winstonInit = new winston_1.Winston();
const winston = winstonInit.logger('Checking');
const sleep = (milliseconds) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
});
class UserController {
    constructor() {
        /// Belongs-To-Many
        this.test = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const asd = yield bdNumberValidator_1.bdNumberValidator('+8801719020642');
                return asd;
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
