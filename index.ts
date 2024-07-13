import express, { Request, Response } from "express";
import prisma from "./prisma/prisma";
import { createLead, getLeads } from "./controllers/leadController";
import cors from 'cors'
import { authorize, writeData } from "./controllers/spreadSheets";
import axios from "axios"

const app = express();
app.use(express.json());
app.use(cors())


// root routes
app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "HELLO WORLxsaasD" });
});


app.post("/spread-sheets" ,async (req: Request , res : Response ) => {

  const lead = await prisma.lead.findFirst({
    where: {
      id:"660624f8209f668f6c60df4d"
    }
  }) 


  const apiCall = await axios.post("http://34.224.216.83/api/messages", {lead})

  console.log(lead)

  // try {
  //   const auth =await authorize();
  //   writeData(auth , lead )
  // } catch (error) {
    
  // }


  res.send(lead)

})

app.get("/leads-secertduagdad", getLeads);

app.post("/leads", createLead);

app.listen(4000, () => {
  console.log("app started");
});
export default app;
