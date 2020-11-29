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
exports.usingFs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var fs = require('fs');
        var data = {
            table: [],
        };
        let number = '01700000000';
        for (let i = 1; i <= 10; i++) {
            console.log(i);
            var obj = {
                id: i,
                number: number + i,
                name: 'Shaikat',
                gender: 'Mail',
                address: 'Gafargaon, Mymensingh',
                email: `shaikat${i}@gmail.com`,
                dob: '1995-12-01',
                age: '25',
            };
            data.table.push(obj);
        }
        yield fs.writeFile('input.json', JSON.stringify(data), function (err) {
            if (err)
                throw err;
            console.log('complete');
        });
    }
    catch (error) {
        if (error)
            throw error;
    }
});
exports.usingXLSX = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const XLSX = require('xlsx');
        var data = {
            table: [],
        };
        let number = '01700000000';
        for (let i = 1; i <= 100; i++) {
            console.log(i);
            var obj = {
                number: `${Number(number) + Number(i)}`,
                firstName: `Farzan${i}`,
                lastName: `Hossan${i}`,
                address: 'Gafargaon, Mymensingh',
                gender: 'Male',
                email: `shaikat${i}@gmail.com`,
                dob: '1995-12-01',
                age: '25',
            };
            data.table.push(obj);
        }
        // console.log(data.table);
        /* this line is only needed if you are not adding a script tag reference */
        /* make the worksheet */
        var ws = XLSX.utils.json_to_sheet(data.table);
        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Contact');
        /* generate an XLSX file */
        XLSX.writeFile(wb, '100.xlsx');
    }
    catch (error) {
        if (error)
            throw error;
    }
});