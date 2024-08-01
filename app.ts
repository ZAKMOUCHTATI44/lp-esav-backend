
import axios from "axios"

const leads = [
 
]

leads.reverse().map((lead, index) => {
    setTimeout(async () => {
        const apiCall = await axios.post("http://localhost:3000/api/messages", { lead })
        console.log("API CALL ")
    }, 1500 * index);

})