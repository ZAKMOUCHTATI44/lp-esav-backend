
import axios from "axios"

const leads = [
    {
        "id": "66a83c06dc95ed27f600e337",
        "civility": "Mlle",
        "firstName": "Yassmina",
        "lastName": "Tanji",
        "email": "y.tanji19@gmail.com",
        "phone": "212615042774",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Rabat",
        "sheetId": "",
        "createdAt": "2024-07-30T01:04:05.915Z",
        "updatedAt": "2024-07-30T01:04:05.915Z"
    },
    {
        "id": "66a83b8dd18b556ea66e86f7",
        "civility": "m",
        "firstName": "Ben khaled",
        "lastName": "Hicham",
        "email": "godfly2018@gmail.com",
        "phone": "212762949784",
        "formation": "Design Graphique & Numérique",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Marrakech",
        "sheetId": "",
        "createdAt": "2024-07-30T01:02:04.674Z",
        "updatedAt": "2024-07-30T01:02:04.674Z"
    },
    {
        "id": "66a82cff6d221ff435603204",
        "civility": "m",
        "firstName": "Bennaji",
        "lastName": "Amran",
        "email": "raxijoune123@gmail.com",
        "phone": "212639266440",
        "formation": "Design Graphique & Numérique",
        "niveau": "2ème Année",
        "programme": null,
        "city": "Marrakech",
        "sheetId": "",
        "createdAt": "2024-07-29T23:59:58.935Z",
        "updatedAt": "2024-07-29T23:59:58.935Z"
    },
    {
        "id": "66a8202812cf3a4d955e34b6",
        "civility": "m",
        "firstName": "Lahmyed",
        "lastName": "Oussama",
        "email": "Oussamalahmyed2@gmail.com",
        "phone": "212648780343",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Marrakech",
        "sheetId": "",
        "createdAt": "2024-07-29T23:05:11.900Z",
        "updatedAt": "2024-07-29T23:05:11.900Z"
    },
    {
        "id": "66a81e8310e05103c2088560",
        "civility": "m",
        "firstName": "Kaouthar",
        "lastName": "Aoulad otsman ",
        "email": "Kaoutar4kita@gmail.com",
        "phone": "212625138977",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "1ère Année",
        "programme": null,
        "city": "Tetouan",
        "sheetId": "",
        "createdAt": "2024-07-29T22:58:11.224Z",
        "updatedAt": "2024-07-29T22:58:11.224Z"
    },
    {
        "id": "66a80adcde5c049226bf9064",
        "civility": "m",
        "firstName": "Nainia",
        "lastName": "Mehdi",
        "email": "nainiamehdi18@gmail.com",
        "phone": "212606595466",
        "formation": "Cinéma & Audiovisuel",
        "niveau": "2ème Année",
        "programme": "Montage & Script",
        "city": "Agadir",
        "sheetId": "",
        "createdAt": "2024-07-29T21:34:19.743Z",
        "updatedAt": "2024-07-29T21:34:19.743Z"
    },
]

leads.reverse().map((lead, index) => {
    setTimeout(async () => {
        const apiCall = await axios.post("http://localhost:3000/api/messages", { lead })
        console.log("API CALL ")
    }, 1500 * index);

})