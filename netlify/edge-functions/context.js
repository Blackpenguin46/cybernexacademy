// This file exports a mock Context class to satisfy the import
export class Context {
  constructor() {
    this.request = null;
    this.response = null;
    this.next = () => {};
  }
}

// Default export that does nothing but allows import to succeed
export default function mockEdgeFunction() {
  return new Response("Mock edge function", {
    headers: { "content-type": "text/plain" },
  });
} 