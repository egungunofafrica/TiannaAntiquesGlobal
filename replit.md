# Michelle Tianna Antiques - Website Documentation

## Overview

Michelle Tianna Antiques is a luxury e-commerce website for an international antique dealer specializing in European and Asian antiques. The site serves as a professional showcase and contact platform for Michelle Tianna's services in acquiring and supplying premium antiques to companies, museums, and malls across six countries (Dubai, USA, Italy, Germany, France, and Canada).

The application is a single-page static website built with React, featuring elegant design inspired by high-end auction houses like Sotheby's and Christie's. It emphasizes sophistication, heritage, and credibility through carefully curated typography, imagery, and layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (single route application)
- **TanStack Query** (React Query) for potential future data fetching needs

**UI Component Library**
- **shadcn/ui** component system based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Components configured in "New York" style variant
- Comprehensive component library including dialogs, cards, buttons, forms, and navigation elements

**Design System**
- Custom color scheme using HSL color variables for light/dark mode support
- Typography hierarchy with Playfair Display (serif) for headings and Inter (sans-serif) for body text
- Spacing system based on Tailwind's standard units (4, 6, 8, 12, 16, 20, 24)
- Custom elevation system with hover and active states for interactive elements
- Responsive breakpoints following standard Tailwind conventions

**Page Structure**
The application follows a single-page layout with distinct sections:
1. Fixed header navigation with smooth scroll anchoring
2. Hero section with full-screen background imagery
3. About section featuring founder biography and profile
4. International presence display showing served countries
5. Gallery section with masonry-style antique showcase and lightbox functionality
6. Services overview detailing acquisition and supply offerings
7. Contact section with multiple communication channels
8. Footer with brand information and quick links

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js for serving the application
- Minimal API surface - currently no backend routes as this is a static showcase site
- Vite middleware integration for development with HMR support

**Development vs Production**
- Development: Vite dev server with live reloading and error overlay
- Production: Pre-built static assets served by Express
- Environment-aware configuration using NODE_ENV

**Storage Interface**
- Placeholder storage interface (MemStorage class) designed for future expansion
- Currently no data persistence as all content is static
- Architecture allows easy addition of database integration if needed

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured with PostgreSQL dialect
- Schema defined in `shared/schema.ts` with Zod validation
- Database URL expected via environment variable (DATABASE_URL)
- Migration system configured with output to `./migrations` directory
- **Note**: Database is configured but not currently utilized - all content is hardcoded in components

**Data Models**
- `Antique` schema: id, title, description, imageUrl, category
- `ContactInfo` schema: name, title, email, phone numbers, location, bio, countries served

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** - Comprehensive collection of unstyled, accessible UI primitives (20+ components including accordion, dialog, dropdown-menu, popover, toast, etc.)
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Carousel/slider functionality
- **cmdk** - Command palette component
- **date-fns** - Date formatting utilities
- **class-variance-authority** & **clsx** - Utility for conditional CSS classes

**Database & ORM**
- **@neondatabase/serverless** - Neon serverless PostgreSQL driver
- **Drizzle ORM** - TypeScript ORM with Zod schema validation
- **connect-pg-simple** - PostgreSQL session store for Express sessions

**Build & Development Tools**
- **TypeScript** - Type checking and compilation
- **esbuild** - Fast JavaScript/TypeScript bundler for production server build
- **tsx** - TypeScript execution for development
- **PostCSS** & **Autoprefixer** - CSS processing
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tools
- **@replit/vite-plugin-dev-banner** - Development environment banner

**Asset Management**
- Static assets stored in `/attached_assets` directory
- Images include founder profile photo and antique collection photographs
- Vite alias configured for easy asset importing: `@assets`

**External Services**
- Google Fonts CDN for Playfair Display and Inter typefaces
- No external APIs, payment processors, or analytics currently integrated
- No authentication/authorization system (static content only)

**Configuration Approach**
- Path aliases configured in TypeScript, Vite, and components.json for consistent imports:
  - `@/` → client/src
  - `@shared/` → shared
  - `@assets/` → attached_assets
- Environment variables expected: DATABASE_URL (though not actively used)
- Single configuration source for shadcn/ui components in components.json