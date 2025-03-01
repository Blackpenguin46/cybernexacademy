import { Context } from "@netlify/edge-functions"

export default async (request, context) => {
  return new Response("Hello from the Edge Function!");
}; 