import { Request, Response } from "express";
import prisma from "../prisma/prisma";

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

  res.json(lead)
}


export async function getLeads(req:Request , res : Response) {
    const leads = await prisma.lead.findMany() 

    return res.json({leads})
}