import express, { Request, Response } from "express";
import prisma from "./prisma/prisma";
import { createLead, getLeads } from "./controllers/leadController";
import cors from 'cors'
import { authorize, writeData } from "./controllers/spreadSheets";
const app = express();
app.use(express.json());
app.use(cors())

// root routes
app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "HELLO WORLxsaasD" });
});


app.post("/spread-sheets" ,async (req: Request , res : Response ) => {

  const lead = await prisma.lead.findFirst() 

  console.log(lead)


  authorize().then((auth ) =>  writeData(auth , lead )).catch(console.error);

  res.send('HEY ')

})

app.get("/leads", getLeads);

app.post("/leads", createLead);

app.listen(4000, () => {
  console.log("app started");
});
export default app;
