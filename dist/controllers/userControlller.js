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
const winston_1 = require("../helper/winston");
const winstonInit = new winston_1.Winston();
const winston = winstonInit.logger('Checking');
const bcrypt = require('bcrypt');
const sleep = (milliseconds) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
});
class UserController {
    constructor() {
        this.test = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await usingXLSXGetHeaders();
                // return res.status(200).json({
                //   success: new Date(),
                // });
                const date = new Date();
                console.log(date);
            }
            catch (error) {
                next(error);
            }
        });
        this.test2 = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const date = '2022-03-02';
                const time = '18:00:00';
                const asd = date + ' ' + time;
                const cDate = new Date(asd);
                let asdf;
                if (new Date().getTime() > cDate.getTime()) {
                    asdf = 'New Date Bigger';
                }
                else {
                    asdf = 'New Date Smaller';
                }
                return res.status(200).json({
                    success: asdf,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
