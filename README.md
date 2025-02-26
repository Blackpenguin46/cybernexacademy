# CyberNex - Cybersecurity Education Platform

CyberNex is a modern cybersecurity education platform built with Next.js and Supabase.

## Features

- User authentication and authorization
- Premium subscription management
- Interactive cybersecurity courses
- Learning progress tracking
- Dark mode support
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cybernex.git
   cd cybernex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Initialize the database:
   ```bash
   npm run init-db
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory
  - `components/` - Reusable UI components
  - `contexts/` - React context providers
  - `lib/` - Utility functions and libraries
  - `api/` - API routes
- `public/` - Static assets
- `types/` - TypeScript type definitions
- `scripts/` - Utility scripts

## Deployment

This project can be deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Add your environment variables
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.
