import express, { Request, Response } from "express";
import prisma from "./prisma/prisma";
import { createLead, getLeads } from "./controllers/leadController";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())

// root routes
app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "HELLO WORLD" });
});

app.get("/leads", getLeads);

app.post("/leads", createLead);

app.listen(4000, () => {
  console.log("app started");
});
export default app;
