import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { authorize, writeData } from "./spreadSheets";
import axios from "axios"
require('dotenv').config()



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


  const data = {
    properties: {
      firstname: lead.firstName,
      lastname: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      formation: lead.formation,
      niveau: lead.niveau,
      programme: lead.programme,
      city: lead.city
    }
  }

  try {
    
    const apiCall = await axios.post("https://api.hubapi.com/crm/v3/objects/contacts", JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
    });
  
    console.log(apiCall)
  } catch (error) {
    console.log("ALEADY HAS CONTACT")
  }

  // const apiCall = await axios.post("http://51.75.89.50:3000/api/messages", {lead})

  res.json(lead);
}

export async function getLeads(req: Request, res: Response) {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const count = await prisma.lead.count()

  return res.json({ count, leads });
}
