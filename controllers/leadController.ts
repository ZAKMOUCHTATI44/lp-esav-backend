import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { authorize, writeData } from "./spreadSheets";
import axios from "axios"

export async function createLead(req: Request, res: Response) {
  let {
    civility,
    firstName,
    lastName,
    email,
    phone,
    formation,
    niveau,
    programme,
    city,
  } = req.body as {
    civility: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    formation: string;
    niveau: string;
    programme: string;
    city: string;
  };

  const lead = await prisma.lead.create({
    data: {
      civility,
      firstName,
      lastName,
      email,
      phone,
      formation,
      niveau,
      programme,
      city,
    },
  });

  const apiCall = await axios.post("http://57.129.51.21:3000/api/messages", {lead})

  res.json(lead);
}

export async function getLeads(req: Request, res: Response) {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const count= await prisma.lead.count()

  return res.json({ count , leads });
}
