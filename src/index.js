function doGet(e) {
  let temp = 'index';
  if ('temp' in e.parameters) {
    const [first] = e.parameters.temp;
    temp = e.parameters.temp[first];
  }
  try {
    const html = HtmlService.createTemplateFromFile(temp);
    return html.evaluate();
  } catch (er) {
    return ContentService.createTextOutput(JSON.stringify(er));
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const stuSheet = ss.getSheetByName('STUDENT');
  return stuSheet.getRange(2, 1, 2, 2).getValues();
}

global.doGet = doGet;
global.include = include;
global.getSheet = getSheet;
