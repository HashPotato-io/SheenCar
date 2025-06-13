# SheenCarPortal

A modern car portal application built with React, Express, and TypeScript.

## 🚀 Technologies Used

- **Frontend:**
  - React 18
  - TypeScript
  - Vite
  - TailwindCSS
  - Radix UI Components
  - React Router DOM
  - React Query

- **Backend:**
  - Express.js
  - TypeScript
  - Drizzle ORM
  - PostgreSQL (Neon Database)
  - Passport.js for authentication

## 📋 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## 🚀 Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Go to [Netlify](https://app.netlify.com/projects/curious-empanada-7e1019/deploys)
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository and set:
     - Build command: `npm run build`
     - Publish directory: `dist`

## 🔧 Environment Variables

Make sure to set up the following environment variables in Netlify:

- `DATABASE_URL`: Your PostgreSQL database URL
- `SESSION_SECRET`: Secret for session management
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 📄 License

This project is licensed under the MIT License. 