
import axios from "axios"

const leads = [
    {

        "id": "66b9f02976269707caf59506",
        "civility": "m",
        "firstName": "YASSINE",
        "lastName": "KIRICHE",
        "email": "yassinkirich40@gmail.com",
        "phone": "212657233334",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Taroudant",
        "sheetId": "",
        "createdAt": "2024-08-12T11:21:12.852Z",
        "updatedAt": "2024-08-12T11:21:12.852Z"
    },
    {
        "id": "66b9f00876269707caf59505",
        "civility": "m",
        "firstName": "El akkaoui",
        "lastName": "Abdellah ",
        "email": "abdellahelakkaoui37@gmail.com",
        "phone": "212622773752",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Sale",
        "sheetId": "",
        "createdAt": "2024-08-12T11:20:40.119Z",
        "updatedAt": "2024-08-12T11:20:40.119Z"
    },
    {
        "id": "66b965455e54e24d48a6c20a",
        "civility": "m",
        "firstName": "Naouass",
        "lastName": "Redouane",
        "email": "redouanenaouass@gmail.com",
        "phone": "212704466448",
        "formation": "Design Graphique & Numérique",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Casablanca",
        "sheetId": "",
        "createdAt": "2024-08-12T01:28:36.600Z",
        "updatedAt": "2024-08-12T01:28:36.600Z"
    },
    {
        "id": "66b90b7e94c541855e231366",
        "civility": "m",
        "firstName": "Souirdi",
        "lastName": "Zakaria",
        "email": "isscam.nizass@gmail.com",
        "phone": "212778117712",
        "formation": "Design Graphique & Numérique",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Autres",
        "sheetId": "",
        "createdAt": "2024-08-11T19:05:33.610Z",
        "updatedAt": "2024-08-11T19:05:33.610Z"
    },
    {
        "id": "66b7f3dfca6eb34f98280bdf",
        "civility": "m",
        "firstName": "Nini",
        "lastName": "Iman",
        "email": "imanenini59@gmail.com",
        "phone": "212633956063",
        "formation": "Design Graphique & Numérique",
        "niveau": "2ème Année",
        "programme": null,
        "city": "Sale",
        "sheetId": "",
        "createdAt": "2024-08-10T23:12:30.328Z",
        "updatedAt": "2024-08-10T23:12:30.328Z"
    },
    {
        "id": "66b7d6ea2d3043af4b322e4d",
        "civility": "m",
        "firstName": "Abdelhadi",
        "lastName": "Fakir",
        "email": "elfakirabdelhadi00@gmail.com",
        "phone": "212640729831",
        "formation": "Design Graphique & Numérique",
        "niveau": "2ème Année",
        "programme": null,
        "city": "Casablanca",
        "sheetId": "",
        "createdAt": "2024-08-10T21:08:57.515Z",
        "updatedAt": "2024-08-10T21:08:57.515Z"
    },
    {
        "id": "66b7b7b410815ab78407b97e",
        "civility": "m",
        "firstName": "Abdelouahab ",
        "lastName": "Tayassir ",
        "email": "Tayassirabdelwahab3@gmail.com",
        "phone": "212645257293",
        "formation": "Design Graphique & Numérique",
        "niveau": "2ème Année",
        "programme": null,
        "city": "Tiznit",
        "sheetId": "",
        "createdAt": "2024-08-10T18:55:47.595Z",
        "updatedAt": "2024-08-10T18:55:47.595Z"
    },
    {
        "id": "66b7a95200611dcc1327417b",
        "civility": "Mlle",
        "firstName": "Bika",
        "lastName": "Farah",
        "email": "farahbika2007@gmail.com",
        "phone": "212600278240",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Marrakech",
        "sheetId": "",
        "createdAt": "2024-08-10T17:54:26.063Z",
        "updatedAt": "2024-08-10T17:54:26.063Z"
    },
    {
        "id": "66b7a583b91886b2ecc9591b",
        "civility": "m",
        "firstName": "Majda",
        "lastName": "Fahmi",
        "email": "majdafahmi2204@gmail.com",
        "phone": "2120626998188",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Casablanca",
        "sheetId": "",
        "createdAt": "2024-08-10T17:38:10.557Z",
        "updatedAt": "2024-08-10T17:38:10.557Z"
    },
    {
        "id": "66b7840a7b683ee279be73fb",
        "civility": "m",
        "firstName": "Zouhir",
        "lastName": "Bouzine",
        "email": "Silikone74@gmail.com",
        "phone": "0774840291",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "2ème Année",
        "programme": null,
        "city": "Sefrou",
        "sheetId": "",
        "createdAt": "2024-08-10T15:15:21.466Z",
        "updatedAt": "2024-08-10T15:15:21.466Z"
    },
    {
        "id": "66b72bf105c313dbf43f8352",
        "civility": "m",
        "firstName": "Aouzal",
        "lastName": "Oussama",
        "email": "oussamaaouzal1937@gmail.com",
        "phone": "212771790673",
        "formation": "Design Graphique & Numérique",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Casablanca",
        "sheetId": "",
        "createdAt": "2024-08-10T08:59:28.660Z",
        "updatedAt": "2024-08-10T08:59:28.660Z"
    },
]

leads.reverse().map((lead, index) => {
    setTimeout(async () => {
        const apiCall = await axios.post("http://localhost:3001/api/messages", { lead })
        console.log("API CALL ")
    }, 1500 * index);

})