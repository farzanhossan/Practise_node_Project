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
exports.bdNumberValidator = (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regex = /\+?(88)?0?1[56789][0-9]{8}\b/g;
        let validNumber;
        yield phoneNumber.match(regex).map((number) => {
            validNumber = number.slice(number.length - 11, number.length - 1);
        });
        console.log(validNumber);
        return validNumber;
    }
    catch (error) {
        if (error)
            throw error;
    }
});
