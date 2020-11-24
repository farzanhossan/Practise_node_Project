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
const sleep = (milliseconds) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
});
exports.forAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let ni = 0;
        for (const element of arr) {
            console.log(`${new Date()} =====> ${ni}`);
            ni++;
            if (ni == 4) {
                ni = 0;
                yield sleep(3000);
                console.log(`${new Date()} =====> ${ni}`);
            }
        }
    }
    catch (error) {
        if (error)
            throw error;
    }
});
