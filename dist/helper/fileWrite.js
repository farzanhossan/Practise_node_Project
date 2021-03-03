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
const XLSX = require('xlsx');
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
exports.usingXLSX = (iteration, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var data = {
            table: [],
        };
        let number = '01700000000';
        for (let i = 1; i <= iteration; i++) {
            console.log(i);
            var obj = {
                number: `${Number(number) + Number(i)}`,
                age: i,
                city: `Dhaka${i}`,
                body: `Hello Customer.....${i}`,
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
        XLSX.writeFile(wb, `${fileName}_${iteration}.xlsx`);
    }
    catch (error) {
        if (error)
            throw error;
    }
});
function add_cell_to_sheet(worksheet, address, value) {
    /* cell object */
    var cell = { t: '?', v: value };
    /* assign type */
    if (typeof value == 'string')
        cell.t = 's';
    // string
    else if (typeof value == 'number')
        cell.t = 'n';
    // number
    else if (value === true || value === false)
        cell.t = 'b';
    // boolean
    else if (value instanceof Date)
        cell.t = 'd';
    else
        throw new Error('cannot store value');
    /* add to worksheet, overwriting a cell if it exists */
    worksheet[address] = cell;
    /* find the cell range */
    var range = XLSX.utils.decode_range(worksheet['!ref']);
    // var _range = XLSX.utils.decode_range();
    // console.log(worksheet['!fullref']);
    var addr = XLSX.utils.decode_cell(address);
    /* extend the range to include the new cell */
    if (range.s.c > addr.c)
        range.s.c = addr.c;
    if (range.s.r > addr.r)
        range.s.r = addr.r;
    if (range.e.c < addr.c)
        range.e.c = addr.c;
    if (range.e.r < addr.r)
        range.e.r = addr.r;
    /* update range */
    worksheet['!ref'] = XLSX.utils.encode_range(range);
}
exports.usingXLSXAddColumn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var wb = XLSX.readFile('10.xlsx');
        var range = XLSX.utils.decode_range(wb.Sheets.Contact['!ref']);
        console.log(range);
        // return range;
        const totalRows = range.e.r - range.s.r;
        add_cell_to_sheet(wb.Sheets.Contact, 'I1', 'Test');
        for (let i = 1; i <= totalRows; i++) {
            add_cell_to_sheet(wb.Sheets.Contact, `I${1 + i}`, '123456');
        }
        XLSX.writeFile(wb, '10.xlsx');
    }
    catch (error) {
        if (error)
            throw error;
    }
});
exports.usingXLSXGetHeaders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var colValues = [];
        var wb = XLSX.readFile('500000.xlsx');
        const worksheet = wb.Sheets.Contact;
        for (let key in worksheet) {
            let regEx = new RegExp('^(\\w)(1){1}$');
            if (regEx.test(key) == true) {
                colValues.push(worksheet[key].v);
            }
        }
        console.log(colValues);
    }
    catch (error) {
        if (error)
            throw error;
    }
});
