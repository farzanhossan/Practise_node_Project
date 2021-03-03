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
exports.usingSheetToJsonXLSX = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var XLSX = require('xlsx');
        var workbook = XLSX.readFile('contacts.xlsx');
        var sheetNames = workbook.SheetNames;
        var sheetIndex = 1;
        var contact = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex - 1]]);
        console.log(contact);
    }
    catch (error) {
        if (error)
            throw error;
    }
});
