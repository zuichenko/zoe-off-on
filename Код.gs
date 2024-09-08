function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}


function getData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ЗМЕМ');
  var data = sheet.getRange('A2:C' + sheet.getLastRow()).getValues();
  return data;
}


function sortHouses() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ЗМЕМ");
  var range = sheet.getRange("B2:B"); // Замените A:A на диапазон с домами
  range.sort({column: 1, ascending: true});
}
