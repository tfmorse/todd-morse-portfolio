# Instructional Design Portfolio

## Overview

This is a personal portfolio application for an Instructional Designer & E-Learning Developer specializing in Banking Risk & Compliance. The application showcases e-learning projects including Articulate Storyline modules, interactive JavaScript-based branching scenarios, and microlearning assets. It features a modern dark theme with cyan accents and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom dark theme (deep navy background with cyan accents)
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Icons**: Lucide React

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful JSON API with Zod validation
- **Build System**: Vite for frontend, esbuild for backend bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains database tables and types
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types, schemas, and route definitions
- `migrations/` - Database migration files

### Key Design Patterns
- **Shared Schema**: Database schema defined once in `shared/schema.ts`, used by both frontend and backend
- **Type-Safe API**: Route definitions in `shared/routes.ts` with Zod schemas for request/response validation
- **Storage Layer**: Database operations abstracted through `IStorage` interface in `server/storage.ts`
- **Custom Hooks**: React Query hooks in `client/src/hooks/` for data fetching

## External Dependencies

### Database
- PostgreSQL (connection via `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- connect-pg-simple for session storage capability

### UI Libraries
- Radix UI primitives (dialogs, dropdowns, tooltips, etc.)
- shadcn/ui component system
- Framer Motion for animations
- Embla Carousel for carousels

### Development Tools
- Vite with React plugin for frontend development
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- TypeScript for type checking

### Fonts
- Inter (primary sans-serif)
- Playfair Display (display headings)
- Google Fonts CDN