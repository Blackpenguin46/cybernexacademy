import { Request, Response } from "express";
import { getAllLinks, addLink } from "../managers/linkManager";

export const fetchLinks = (req: Request, res: Response) => {
  res.json(getAllLinks());
};

export const createLink = (req: Request, res: Response) => {
  const { id, url, status, category } = req.body;
  addLink({ id, url, status, category });
  res.status(201).json({ message: "Link added" });
};
