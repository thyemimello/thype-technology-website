# THyPE Technology - Website Project

## Overview

THyPE Technology is a Brazilian tech company website showcasing AI solutions, mobile app development, and digital consulting services. The application is a single-page marketing website with a futuristic cyberpunk aesthetic, featuring glassmorphism effects, 3D elements, and neon glow styling. The site includes sections for company overview, service offerings, portfolio showcase, process description, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot module replacement
- **Wouter** for lightweight client-side routing with multi-page support:
  - `/` - Home page with all main sections
  - `/projeto/radar` - Radar project details page
  - `*` - 404 not found page
- **React Query** (@tanstack/react-query) for server state management and API interactions

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- Components follow the "New York" style variant as configured in components.json
- **Tailwind CSS** for utility-first styling with custom design tokens
- Path aliases configured for clean imports: `@/` for client source, `@shared/` for shared code, `@assets/` for static assets

**Design System**
- Mandatory **Cascadia Code** monospace font for all typography
- Custom color palette with purple/blue gradients (#5C00AB, #532CB8, #2D67CE, #1C8DDB, #7CC7D8)
- Dark theme background (#040A14) with technological grid patterns
- Glassmorphism cards with backdrop blur and neon glow effects
- 3D visual elements and floating animations for depth
- Responsive design with mobile-first breakpoints

**Form Handling**
- **React Hook Form** with **Zod** validation via @hookform/resolvers
- Type-safe form schemas derived from database schemas using drizzle-zod
- Contact dialog component with submission states and toast notifications

**Animation & Interactivity**
- Custom scroll animation hooks for section visibility detection
- Parallax scrolling effects tracked with scroll position state
- Embla Carousel for portfolio showcases
- Intersection Observer API for lazy-loading animations

**Contact Integration**
- **WhatsApp**: Direct link for instant customer contact
  - Phone number: 5547988140013 (Brazil, DDD 47)
  - Pre-filled message: "Olá! Gostaria de falar com um especialista da THyPE Technology."
  - Opens in new tab
  - URL format: https://wa.me/5547988140013?text=...
  
- **Phone Call**: Click-to-call functionality
  - Number: +55 47 988140013
  - Uses tel: protocol for direct calling
  
- **Email**: Contact form with email notification
  - Submissions sent to: thypeappthech@gmail.com
  - Form data stored in memory
  - Email sent via Nodemailer (Gmail SMTP)
  - Requires EMAIL_PASSWORD environment variable (Gmail App Password)
  
- **Instagram**: Social media link
  - Profile: @thype_aisolutions
  - URL: https://www.instagram.com/thype_aisolutions
  
- **Contact Section**: Icon-based interface with 4 circular buttons
  - WhatsApp (green gradient with official logo)
  - Phone (purple gradient with phone icon)
  - Email (blue gradient with mail icon)
  - Instagram (pink/purple gradient with official logo)
  - Each icon has hover effects: scale + neon glow + color change

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript (ESM modules)
- Separate development (index-dev.ts) and production (index-prod.ts) entry points
- Custom logging middleware tracking request duration and JSON responses
- Raw body capture middleware for webhook/signature verification scenarios

**Development vs Production**
- **Development**: Vite middleware integration with HMR and on-demand compilation
- **Production**: Pre-built static assets served from dist/public directory
- Environment-specific server setup abstracted through runApp function pattern

**API Structure**
- RESTful endpoints under `/api` prefix
- `/api/contact` - POST endpoint for contact form submissions with Zod validation
- `/api/contact/submissions` - GET endpoint for retrieving all submissions (admin use)
- Consistent error handling with structured JSON responses
- HTTP status codes: 400 for validation errors, 500 for server errors

**Request/Response Pattern**
- JSON-based API communication
- Client-side API wrapper (apiRequest) handling fetch with credentials
- Automatic response validation and error throwing for non-OK responses
- Query client configured with infinite stale time and disabled refetch on window focus

### Data Storage

**Database Setup**
- **Drizzle ORM** configured for PostgreSQL dialect with @neondatabase/serverless driver
- Schema defined in shared/schema.ts for cross-environment type sharing
- Migration files generated in ./migrations directory
- Database URL required via DATABASE_URL environment variable

**Schema Design**
- `contact_submissions` table with fields: id (UUID), name, email, phone (optional), message, submittedAt (timestamp)
- Schema validation using drizzle-zod to generate Zod schemas from database tables
- Type inference for Insert and Select operations

**Current Implementation**
- **In-memory storage** (MemStorage class) used for development/demo purposes
- Storage interface (IStorage) defined for future database implementation
- UUID generation for contact submission IDs
- Submissions sorted by timestamp in descending order

**Migration Path**
- Database schema ready for PostgreSQL (Neon serverless)
- Drizzle Kit configured for schema pushing with `db:push` command
- Easy swap from MemStorage to database-backed storage by implementing IStorage interface

### External Dependencies

**UI & Styling**
- **Radix UI** primitives (accordion, dialog, dropdown, popover, etc.) for accessible components
- **Tailwind CSS** with PostCSS and Autoprefixer for cross-browser compatibility
- **class-variance-authority** and **clsx** for conditional className composition
- **Lucide React** for icon system

**Form & Validation**
- **Zod** for runtime type validation and schema definition
- **React Hook Form** for performant form state management
- Integration via @hookform/resolvers for Zod schema validation

**Data Fetching**
- **TanStack React Query** for async state management and caching
- Custom query client configuration in lib/queryClient.ts
- Unauthorized behavior handling (401 responses)

**Database & ORM**
- **Drizzle ORM** with PostgreSQL support
- **@neondatabase/serverless** as the database driver
- **Drizzle Kit** for migrations and schema management
- **drizzle-zod** for automatic Zod schema generation

**Development Tools**
- **Replit-specific plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner
- **TypeScript** with strict mode enabled for type safety
- **ESBuild** for production server bundling

**Date & Utility**
- **date-fns** for date manipulation and formatting
- **nanoid** for generating unique identifiers in development mode

**Font Loading**
- Google Fonts CDN for Cascadia Code font family (weights 300-700)

## Project Pages

### Home Page (`/`)
Main landing page featuring all core sections:
- Hero section with Spline 3D robot (NEVER to be replaced)
- Quem Somos (About) with THyPE code icon symbol
- Produtos (Products/Services)
- Diferenciais (Differentials) with THyPE branded code icon
- Portfólio with three featured projects: Cíclica, Radar, and Otimizador
- Depoimentos (Testimonials)
- Nossa Equipe (Team) - replaced Process section with team presentation
- Contato (Contact) with functional form

### Cíclica Project Page (`/projeto/ciclica`)
Dedicated project showcase page for the Cíclica wellness app featuring:
- **Hero Section**: Project title, subtitle, and overview with gradient badges
- **Overview Card**: Detailed description of the app's purpose and target audience
- **Features Grid**: 7 main functionalities with icons and descriptions:
  - Intelligent cycle tracking
  - LunIA AI coach
  - Phase-based workout recommendations
  - Symptom and feelings tracking
  - Complete menstrual calendar
  - Lunar gamification system
  - Personalized dashboard
- **Gamification Section**: 3-card grid explaining Lunar Coin, Lunar Class, and Lunar Medal systems
- **Technologies Section**: Visual grid showcasing tech stack (React Native, TypeScript, Expo, FastAPI, PostgreSQL, LangChain + GPT-4, Expo Notifications)
- **Result Section**: Summary of project outcomes and user experience
- **CTA Section**: Links to contact form and portfolio
- **Navigation**: Back button to portfolio and links to other sections
- **Design**: Follows same futuristic neon aesthetic with purple/blue gradients

### Radar Project Page (`/projeto/radar`)
Dedicated project showcase page for the Radar trading app featuring:
- **Hero Section**: Project title, subtitle, and overview with gradient badges
- **Overview Card**: Detailed description of the app's purpose and target audience
- **Features Grid**: 5 main functionalities with icons and descriptions:
  - Stripe subscription system with 3D Secure
  - Robot package management
  - Integrated support system
  - Push notifications
  - Trader dashboard
- **Technologies Section**: Visual grid showcasing tech stack (React Native, TypeScript, Expo, FastAPI, PostgreSQL, Stripe, Expo Notifications)
- **Result Section**: Summary of project outcomes and achievements
- **CTA Section**: Links to contact form and portfolio
- **Navigation**: Back button to portfolio and links to other sections
- **Design**: Follows same futuristic neon aesthetic with purple/blue gradients

### Otimizador Project Page (`/projeto/otimizador`)
Dedicated project showcase page for the Otimizador industrial automation system featuring:
- **Hero Section**: Project title, subtitle, and overview with gradient badges, video presentation
- **Overview Card**: Detailed description of the system's purpose for industrial automation and cost reduction
- **Features Grid**: 5 main functionalities with icons and descriptions:
  - Process automation
  - Real-time analysis
  - AI-powered intelligent suggestions
  - Continuous monitoring
  - Clean and intuitive interface
- **Technologies Section**: Visual grid showcasing tech stack (Python, FastAPI, Pandas/NumPy, XML/TXT Integration, Machine Learning, Interactive Dashboard, Database, AI Automation)
- **Result Section**: Summary of system outcomes and operational improvements
- **CTA Section**: Links to contact form and portfolio
- **Navigation**: Back button to portfolio and links to other sections
- **Design**: Follows same futuristic neon aesthetic with purple/blue gradients
- **Video**: Integrated video presentation (otmizador _1764027286047.mp4) in both hero and portfolio card