// Simple edge function with a properly formatted function export
// Avoiding any potential duplicate default exports

// Named function to make debugging easier
function exampleHandler(request, context) {
  return new Response("Example edge function response", {
    headers: { "content-type": "text/plain" },
  });
}

// Standard export syntax for Netlify Edge Functions
export default exampleHandler; 