# Mental Health Patient Portal

An AI-powered patient portal designed for mental health providers, featuring automated assessments, progress tracking, and clinical workflow optimization.

## Overview

This patient portal demonstrates how AI can transform mental health practice management while creating genuinely delightful patient experiences. Built with Next.js 15, TypeScript, and modern React patterns.

## Key Features

- **Automated Assessments**: PHQ-9, GAD-7 with real-time scoring and risk detection
- **Progress Visualization**: Interactive charts showing patient improvement over time
- **Pre-Session Workflow**: Automated patient preparation and data collection
- **Crisis Support**: Always-accessible crisis resources and safety planning
- **Mobile-First Design**: Optimized for patient engagement on any device

## Tech Stack

- **Framework**: Next.js 15.3.0 with App Router
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS + Radix UI
- **State Management**: Zustand + React Query
- **Authentication**: NextAuth.js 5.0
- **Database**: PostgreSQL + Drizzle ORM
- **Animations**: Framer Motion

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## Development

```bash
# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build
```

## Demo Data

The application includes realistic demo data showcasing a patient's 12-week treatment journey with significant improvement in depression and anxiety scores.

## Deployment

Optimized for deployment on Vercel with automatic preview environments and production-ready performance monitoring.

## License

Proprietary - All rights reserved