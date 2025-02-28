import { Context } from '@netlify/edge-functions';

export default async (request: Request, context: Context) => {
  return new Response('Hello from the edge!');
}; 