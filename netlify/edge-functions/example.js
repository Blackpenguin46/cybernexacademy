// Empty example edge function
export default () => {
  return new Response("Example edge function", {
    headers: { "content-type": "text/plain" },
  });
}; 

// Default export
export default {
  Context,
  NextResponse,
  NextRequest
}; 