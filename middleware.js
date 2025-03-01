// Empty middleware file with no functionality
// This ensures we don't accidentally use edge runtime

export default function middleware() {
  return null; // Do nothing
}

export const config = {
  matcher: [] // Match no paths
}; 