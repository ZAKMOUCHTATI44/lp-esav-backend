const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');



const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH, 'utf8');
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}

async function saveCredentials(client){
    const content = await fs.readFile(CREDENTIALS_PATH, 'utf8');
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

 async function authorize() {
    let client   = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}

app.post('/api/messages',async (req, res) => {

    const { lead } = req.body
    const auth = await authorize()
    addLeadToSpreadSheets(auth , lead )

    res.send("app has been added")



});

// GET method to retrieve all messages
app.get('/api/', (req, res) => {
    res.json("healtz")
});



 async function addLeadToSpreadSheets( auth , lead ) {

    const sheets = google.sheets({ version: 'v4', auth });
    let values = [
        [

            lead.civility,
            lead.firstName,
            lead.lastName,
            lead.email,
            lead.phone,
            lead.formation,
            lead.niveau,
            lead.programme,
            lead.city,
            lead.createdAt,
            lead.updatedAt,
        ]
    ]

    const resource = {
        values
    };
    sheets.spreadsheets.values.append(
        {
            spreadsheetId: '1MClf3i_xpvQD-JVYDhmbgh3sMKiaHt4j-jbgBe4vGhQ',
            range: 'data',
            valueInputOption: 'RAW',
            requestBody : resource,
        },
        async (err, result) => {
            if (err) {
                console.log(err);
            } else {
              console.log(`Sending => ${lead.email}` )
            }
        }
    );

}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



