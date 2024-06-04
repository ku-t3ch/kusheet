import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT, GoogleAuth } from "google-auth-library";

const credentials = JSON.parse(
  process.env.GOOGLE_SHEET_LANGUAGE_SERVICE_ACCOUNT!,
) as object;

const auth = new GoogleAuth({
  credentials: {
    ...credentials,
    private_key: credentials.private_key.split(String.raw`\n`).join("\n"),
  },
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const spreadsheetId = process.env.GOOGLE_SHEET_LANGUAGE_SPREADSHEET_ID;

const doc = new GoogleSpreadsheet(spreadsheetId!, auth);
