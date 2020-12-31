const XLSX = require('xlsx');
export const usingFs = async () => {
  try {
    var fs = require('fs');
    var data = {
      table: [] as object[],
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
    await fs.writeFile('input.json', JSON.stringify(data), function (err: any) {
      if (err) throw err;
      console.log('complete');
    });
  } catch (error) {
    if (error) throw error;
  }
};

export const usingXLSX = async (iteration: any) => {
  try {
    var data = {
      table: [] as object[],
    };
    let number = '01700000000';
    for (let i = 1; i <= iteration; i++) {
      console.log(i);
      var obj = {
        number: `${Number(number) + Number(i)}`,
        firstName: `Farzan${i}`,
        lastName: `Hossan${i}`,
        address: 'Gafargaon, Mymensingh',
        gender: 'Male',
        email: `shaikat${i}@gmail.com`,
        dob: '1995-12-01',
        customFields: {},
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
    XLSX.writeFile(wb, `${iteration}.xlsx`);
  } catch (error) {
    if (error) throw error;
  }
};

function add_cell_to_sheet(worksheet: any, address: any, value: any) {
  /* cell object */
  var cell = { t: '?', v: value };

  /* assign type */
  if (typeof value == 'string') cell.t = 's';
  // string
  else if (typeof value == 'number') cell.t = 'n';
  // number
  else if (value === true || value === false) cell.t = 'b';
  // boolean
  else if (value instanceof Date) cell.t = 'd';
  else throw new Error('cannot store value');

  /* add to worksheet, overwriting a cell if it exists */
  worksheet[address] = cell;

  /* find the cell range */
  var range = XLSX.utils.decode_range(worksheet['!ref']);
  // var _range = XLSX.utils.decode_range();
  // console.log(worksheet['!fullref']);
  var addr = XLSX.utils.decode_cell(address);
  /* extend the range to include the new cell */
  if (range.s.c > addr.c) range.s.c = addr.c;
  if (range.s.r > addr.r) range.s.r = addr.r;
  if (range.e.c < addr.c) range.e.c = addr.c;
  if (range.e.r < addr.r) range.e.r = addr.r;

  /* update range */
  worksheet['!ref'] = XLSX.utils.encode_range(range);
}

export const usingXLSXAddColumn = async () => {
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
  } catch (error) {
    if (error) throw error;
  }
};
