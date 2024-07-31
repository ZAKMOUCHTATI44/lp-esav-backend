const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({ "accessToken": "YOUR_ACCESS_TOKEN" });

const BatchInputSimplePublicObjectInputForCreate = { inputs: [{ "associations": [{ "types": [{ "associationCategory": "HUBSPOT_DEFINED", "associationTypeId": 0 }], "to": { "id": "string" } }], "properties": { "additionalProp1": "string", "additionalProp2": "string", "additionalProp3": "string" } }] };

try {
    const apiResponse = await hubspotClient.crm.contacts.batchApi.create(BatchInputSimplePublicObjectInputForCreate);
    console.log(JSON.stringify(apiResponse, null, 2));
} catch (e) {
    e.message === 'HTTP request failed'
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e)
}