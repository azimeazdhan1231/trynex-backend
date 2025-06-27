# TryNex Lifestyle E-commerce Platform

## Overview

TryNex Lifestyle is a Bengali e-commerce platform specializing in customized gifts including t-shirts, mugs, tumblers, and other personalized items. The platform is built as a full-stack web application with a React frontend and Express backend, featuring a modern UI design using shadcn/ui components and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and custom cart management with localStorage
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Language Support**: Bengali (primary) with some English support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful API endpoints for products, cart, and orders
- **Development Setup**: Hot reload with Vite integration in development
- **Session Management**: Session-based cart storage
- **Error Handling**: Centralized error handling middleware

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **Users**: Basic user authentication (username, password)
- **Products**: Comprehensive product catalog with customization support
  - Multi-language support (Bengali/English names and descriptions)
  - Pricing with discount support
  - Category-based organization
  - Featured product flagging
  - Image gallery support
- **Cart Items**: Session-based cart with customization data
- **Orders**: Customer orders with contact information and item details

### Product Management
- **Featured Products**: Highlighted products for homepage display
- **Category Filtering**: Products organized by categories
- **Customization Support**: JSON-based customization data storage
- **Discount System**: Percentage-based discounts with original pricing

### Cart System
- **Client-side Management**: localStorage-based cart with real-time updates
- **Session Persistence**: Cart items tied to session IDs
- **WhatsApp Integration**: Direct order placement via WhatsApp messaging

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Bengali Typography**: Noto Sans Bengali font for proper text rendering
- **Smooth Scrolling**: Section-based navigation with smooth scrolling
- **Toast Notifications**: User feedback for cart operations
- **Loading States**: Skeleton components for better UX

## Data Flow

1. **Product Display**: Products fetched from `/api/products/featured` endpoint
2. **Cart Operations**: 
   - Items added to localStorage cart
   - Real-time cart updates across components
   - Cart state managed through custom hooks
3. **Order Processing**: 
   - Cart data formatted for WhatsApp message
   - Direct communication with business via WhatsApp
4. **User Interaction**:
   - Smooth scrolling navigation between sections
   - Responsive cart sidebar
   - Product quantity management

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database schema management
- **@replit/vite-plugin-***: Replit-specific development tools

### UI Libraries
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel functionality
- **lucide-react**: Icon library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from build directory

### Environment Configuration
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express
- **Database**: Environment-based DATABASE_URL configuration

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server execution
- `db:push`: Database schema deployment

## Changelog

Changelog:
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.