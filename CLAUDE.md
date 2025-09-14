# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Common Development Tasks
```bash
# Development server with Turbopack
npm run dev

# Build production version
npm run build

# Production server
npm run start

# Linting
npm run lint
```

### Database Operations
```bash
# Generate new migration files
npm run db:generate

# Apply migrations to database
npm run db:migrate

# Push schema directly to database (development)
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio

# Seed database with sample data
npm run db:seed
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Database**: PostgreSQL via Neon with Drizzle ORM
- **Authentication**: Better Auth with email/password support
- **State Management**: Zustand for client-side state
- **Styling**: Tailwind CSS v4
- **Type Safety**: TypeScript with Zod validation

### Environment Setup
The application requires `.env.local` (not `.env`) with:
- `DATABASE_URL`: PostgreSQL connection string
- `BETTER_AUTH_SECRET`: Authentication secret key
- `BETTER_AUTH_URL`: Application base URL

### Database Schema Structure
The database uses UUID primary keys throughout and includes:

**Core Tables:**
- `users`, `sessions`, `accounts`, `verifications` (Better Auth tables)
- `guests` (temporary guest sessions)
- `products`, `product_variants`, `product_images` (product catalog)
- `brands`, `categories`, `genders`, `colors`, `sizes` (filter/taxonomy tables)
- `carts`, `cart_items`, `orders`, `order_items` (commerce tables)

**Key Relationships:**
- Products have multiple variants (color/size combinations)
- Images can be tied to specific variants or be generic to products
- Guest sessions enable cart persistence before authentication

### Application Structure

**Route Groups:**
- `(root)`: Public pages (homepage, products, product detail)
- `(auth)`: Authentication pages (sign-in, sign-up)

**Key Directories:**
- `src/lib/db/schema/`: Individual schema files exported via index.ts
- `src/lib/actions/`: Server actions for data fetching
- `src/lib/auth/`: Better Auth configuration and actions
- `src/lib/utils/`: Query parsing utilities for filters/search
- `src/components/`: Reusable UI components with barrel exports

### Data Flow Patterns

**Product Filtering:**
The application uses a sophisticated filtering system via `src/lib/utils/query.ts`:
- URL query parameters are parsed into `NormalizedProductFilters`
- Multiple filter types: search, gender, size, color, brand, category, price ranges
- Complex SQL joins in `getAllProducts()` to support filtering and sorting

**Authentication Flow:**
- Better Auth handles session management with UUID-based IDs
- Guest sessions allow cart persistence before login
- Server actions in `src/lib/auth/actions.ts` handle sign-up/sign-in with migration from guest to user

**Product Detail Pages:**
- Dynamic routes use UUID-based product IDs (`/products/[id]`)
- `getProduct()` performs complex joins to fetch product, variants, images, and related data
- Images can be variant-specific or generic to the product

### Component Architecture
Components use barrel exports via `src/components/index.ts`. Key patterns:
- `Card`: Reusable product display component
- `ProductGallery`: Variant-aware image gallery
- `Filters`: Complex filtering UI with URL state sync
- Forms use server actions with Better Auth integration

### State Management
- Zustand stores are typically in `src/store/` (mentioned in README)
- Server state via Next.js App Router and React Server Components
- URL state for filters and search parameters

## Important Notes

### Database Considerations
- All IDs are UUIDs, not auto-incrementing integers
- The seed script creates 15 sample Nike products with variants and images
- Product images are stored in `static/uploads/shoes/` with UUID-prefixed filenames

### Development Workflow
- Database schema changes require running `npm run db:generate` then `npm run db:push`
- The seed script should be run after schema changes to populate test data
- Better Auth configuration is in `src/lib/auth/index.ts` with Drizzle adapter

### Common Issues
- Environment variables must be in `.env.local`, not `.env`
- Product routes expect UUID format, not numeric IDs
- Drizzle config looks for schema in `src/lib/db/schema/index.ts`