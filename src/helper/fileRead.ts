export const usingSheetToJsonXLSX = async () => {
  try {
    var XLSX = require('xlsx');
    var workbook = XLSX.readFile('contacts.xlsx');
    var sheetNames = workbook.SheetNames;
    
    var sheetIndex = 1;
    
    var contact = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);
    console.log(contact);
  } catch (error) {
    if (error) throw error;
  }
};
