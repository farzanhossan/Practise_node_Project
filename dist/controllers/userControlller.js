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
const sleep = (milliseconds) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
});
class UserController {
    constructor() {
        /// Belongs-To-Many
        this.test = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await usingFs();
                // await usingXLSX();
                // await usingSheetToJsonXLSX();
                // //Mail
                // const email = 'test@gmail.com';
                // const subject = 'Test';
                // const text= 'Hi';
                // await Mail(email, subject, text);
                // //endMail
                // const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                // let ni = 0;
                // for (const element of arr) {
                //   console.log(`${new Date()} =====> ${ni}`);
                //   ni++;
                //   if (ni == 4) {
                //     ni = 0;
                //     await sleep(3000);
                //     console.log(`${new Date()} =====> ${ni}`);
                //   }
                // }
                winston_1.logger.info("Asd");
                return res.status(200).json({
                    success: "Success",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
