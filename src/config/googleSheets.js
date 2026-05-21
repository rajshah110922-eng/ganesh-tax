// ─── Google Sheets Integration ────────────────────────────────────────────────
// Setup steps:
// 1. Open your Google Sheet
// 2. Click Extensions → Apps Script
// 3. Delete any existing code and paste the Apps Script below
// 4. Click Save (disk icon), then Deploy → New deployment
//    - Type: Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Click Deploy → copy the Web App URL → paste it below

export const GOOGLE_SHEET_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHBelKcpZn-9A-_W0A78K25SHk7NEvRvxsYyr0QitM1gNc_077GLf1ZDmpKr_X3_TqmQ/exec'

/*
──── Paste this into Extensions → Apps Script ────────────────────────────────

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Service', 'Message'])
  }
  const d = e.parameter
  sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    d.firstName  || '',
    d.lastName   || '',
    d.email      || '',
    d.phone      || '',
    d.service    || '',
    d.message    || ''
  ])
  return ContentService.createTextOutput('ok')
}

─────────────────────────────────────────────────────────────────────────────
*/
