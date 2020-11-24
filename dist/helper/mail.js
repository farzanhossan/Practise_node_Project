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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
exports.Mail = (email, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 587,
            secure: false,
            auth: {
                user: 'c6d695b3f1d508',
                pass: '816ed91f9e4e83' // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // setup email data with unicode symbols
        const mailOptions = {
            from: '"PSL" <psl@gmail.com>',
            to: email,
            subject: subject,
            text: text
        };
        // send mail with defined transport object
        const myPromise = new Promise((resolve) => {
            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    return error;
                }
                resolve(200);
            });
        });
        return myPromise;
    }
    catch (error) {
        return error;
    }
});
