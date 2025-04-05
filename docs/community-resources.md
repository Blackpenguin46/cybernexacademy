# Community Resources System Documentation

This document provides an overview of the Community Resources system for Cybernex Academy. The system allows for management, display, and verification of community resources across Discord, Reddit, and Skool platforms.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Admin Interface](#admin-interface)
5. [Link Verification](#link-verification)
6. [User Submission Flow](#user-submission-flow)
7. [Environment Variables](#environment-variables)

## Architecture Overview

The Community Resources system consists of several interconnected components:

- **Database**: Supabase tables for storing community resource data
- **API Routes**: Next.js API routes for verifying links and managing resources
- **Admin Interface**: Protected dashboard for administrators to manage resources
- **Public Interfaces**: Pages for displaying verified resources and allowing user submissions
- **Verification System**: Automated service to verify link validity

The system follows a three-tier architecture:
1. **Data Layer**: Supabase tables with row-level security
2. **API Layer**: Next.js API routes for CRUD operations and verification
3. **Presentation Layer**: React components for display and interaction

## Database Schema

### Main Tables

1. **discord_servers**
   - `id`: UUID (primary key)
   - `name`: Text (required)
   - `description`: Text
   - `invite_link`: Text (required)
   - `member_count`: Integer
   - `is_verified`: Boolean (default: false)
   - `last_verified`: Timestamp
   - `created_at`: Timestamp
   - `updated_at`: Timestamp

2. **reddit_communities**
   - `id`: UUID (primary key)
   - `name`: Text (required)
   - `description`: Text
   - `url`: Text (required)
   - `member_count`: Integer
   - `is_verified`: Boolean (default: false)
   - `last_verified`: Timestamp
   - `created_at`: Timestamp
   - `updated_at`: Timestamp

3. **skool_communities**
   - `id`: UUID (primary key)
   - `name`: Text (required)
   - `description`: Text
   - `url`: Text (required)
   - `member_count`: Integer
   - `is_verified`: Boolean (default: false)
   - `last_verified`: Timestamp
   - `created_at`: Timestamp
   - `updated_at`: Timestamp

4. **link_verification_log**
   - `id`: UUID (primary key)
   - `verified_at`: Timestamp
   - `discord_verified`: Integer
   - `discord_total`: Integer
   - `reddit_verified`: Integer
   - `reddit_total`: Integer
   - `skool_verified`: Integer
   - `skool_total`: Integer

### Row-Level Security (RLS)

The system implements the following RLS policies:

- **Public read access** for all tables (anyone can view resources)
- **Authenticated insert access** for all tables (registered users can submit resources)
- **Admin-only update/delete access** for all tables (only admins can modify or remove resources)

## API Endpoints

### Link Verification

1. **GET /api/resources/verify-link**
   - Verifies a single URL for validity
   - Query parameters:
     - `url`: The URL to verify
     - `key`: API key for authentication
   - Returns: `{ isValid: boolean }`

2. **GET /api/cron/verify-links**
   - Batch verifies all resources in the database
   - Query parameters:
     - `key`: API key for authentication
   - Returns: Summary of verification results

## Admin Interface

The admin interface provides a dashboard and resource management pages:

1. **Dashboard** (`/admin/dashboard`)
   - Overview of resource counts and verification status
   - Quick actions for running verification and adding resources
   - Links to resource management pages

2. **Discord Servers** (`/admin/resources/discord`)
   - CRUD interface for Discord servers
   - Verification controls
   - Filtering and sorting options

3. **Reddit Communities** (`/admin/resources/reddit`)
   - CRUD interface for Reddit communities
   - Verification controls
   - Filtering and sorting options

4. **Skool Communities** (`/admin/resources/skool`)
   - CRUD interface for Skool communities
   - Verification controls
   - Filtering and sorting options

### Admin Authentication

The admin interface is protected by an `AdminAuthGuard` component that:
1. Verifies user authentication
2. Checks for admin role in the user's profile
3. Redirects non-admins to the home page

## Link Verification

Link verification is a critical component of the system that:

1. Checks if URLs are still valid (returning 2xx or 3xx status codes)
2. Updates the `is_verified` status of resources
3. Records the verification timestamp
4. Logs verification results

### Verification Methods

1. **Manual verification**: Admins can verify individual resources
2. **Batch verification**: Scheduled job to verify all resources
3. **Verification on submission**: Initial check when resources are submitted

## User Submission Flow

1. User navigates to `/community/submit`
2. Selects the resource type (Discord, Reddit, or Skool)
3. Fills out the resource details
4. If not authenticated, the form data is saved in localStorage and the user is redirected to login
5. On successful submission, the resource is added with `is_verified: false`
6. Admins review and verify the submission before it appears publicly

## Environment Variables

The system requires the following environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# API Security
NEXT_PUBLIC_LINK_VERIFICATION_API_KEY=your-secret-api-key
```

## Usage Examples

### Adding Admin Role to a User

To grant admin access to a user, update their profile in the Supabase database:

```sql
UPDATE profiles
SET role = 'admin'
WHERE id = 'user-uuid';
```

### Setting Up Scheduled Verification

For automatic link verification, set up a cron job to call the verification endpoint:

```bash
0 0 * * * curl https://your-site.com/api/cron/verify-links?key=your-secret-api-key
```

This will run the verification process daily at midnight. 