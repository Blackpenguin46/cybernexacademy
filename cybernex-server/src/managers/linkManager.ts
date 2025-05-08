import { Link } from "../models/linkModel";

let links: Link[] = [];

export const getAllLinks = (): Link[] => links;

export const addLink = (link: Link): void => {
  links.push(link);
};