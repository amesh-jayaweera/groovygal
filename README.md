# GroovyGal

## Overview

A sophisticated Next.js 14 application with comprehensive features including authentication, payment processing, content management, and more. This project combines modern frontend development practices with robust backend services.


## Features

- **User Authentication**: Secure login/signup system using NextAuth.js
- **Payment Processing**: Integrated Stripe for secure transactions
- **Content Management**: Dynamic content handling with Sanity.io
- **Responsive Design**: Fully responsive across all devices using Tailwind CSS
- **Dark/Light Mode**: Toggle between dark and light themes with next-themes
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **UI Components**: Comprehensive component library with Radix UI primitives

## Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React 19](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

### Backend & Data
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Cloud database service
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Stripe](https://stripe.com/) - Payment infrastructure
- [Sanity.io](https://www.sanity.io/) - Headless CMS

### Developer Tools
- [Vercel](https://vercel.com/) - Deployment and hosting platform
- [React Hook Form](https://react-hook-form.com/) - Form state management
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v7.x or later) or yarn (v1.22.x or later)

## Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your environment variables.

4. Set up MongoDB:
    - Create a MongoDB Atlas account
    - Create a new cluster
    - Add your connection string to `.env.local`

5. Set up Stripe:
    - Create a Stripe account
    - Add your API keys to `.env.local`
    - Set up webhook endpoints

6. Set up Sanity:
    - Create a Sanity.io project
    - Add your project credentials to `.env.local`

## Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build

Build the application for production:
```bash
npm run build
# or
yarn build
```

## Testing

Run tests:
```bash
npm test
# or
yarn test
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Import your project on [Vercel](https://vercel.com)
3. Vercel will detect Next.js and set up the build configuration

### Manual Deployment

For custom server environments:

1. Build your application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Yes |
| `NEXTAUTH_URL` | URL for NextAuth.js | Yes |
| `STRIPE_SECRET_KEY` | Stripe API secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `SANITY_DATASET` | Sanity dataset name | Yes |
| `SANITY_API_TOKEN` | Sanity API token | Yes |
| `SENDGRID_API_KEY` | SendGrid API key | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | No |
| `SENTRY_DSN` | Sentry data source name | No |

Please make sure to update tests as appropriate.


## Appendix: Complete Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend Dev Framework | Next.js 14 | Application Frontend Framework |
| Styling | Tailwind CSS | UI styling and design system |
| UI Components | Radix UI | Pre-built accessible components |
| State Management | React Context API | Global state management |
| Database | MongoDB Atlas | Data storage |
| Authentication | NextAuth.js | User authentication |
| Payment Processing | Stripe | Secure payments |
| Content Management | Sanity.io | Headless CMS |
| Form Handling | React Hook Form + Zod | Form management and validation |
| Deployment | Vercel | Hosting and deployment |
| Image Management | Next.js Image + Cloudinary | Image optimization |
| Email Service | SendGrid | Transactional emails |
| Analytics | Google Analytics 4 | User behaviour tracking |
| Monitoring | Sentry | Error tracking |
| Testing | Jest, Cypress | Automated testing |

