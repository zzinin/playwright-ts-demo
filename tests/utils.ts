const XLSX = require('xlsx');
const path = require('path');

function getLoginDetails() {
  const filePath = path.resolve(__dirname, '../testData/LoginDetails.xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = { getLoginDetails };
