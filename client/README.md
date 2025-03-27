# CyberCraft Contact System

A full-stack contact management system built with React, Express, and MongoDB.

## Features

- Contact form with validation
- Admin dashboard for contact management
- Social authentication (Google & Facebook)
- Export contacts to PDF and Excel
- Responsive design
- SEO optimized

## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- React Query for data fetching
- React Hook Form for form handling
- Tailwind CSS for styling
- React Helmet for SEO
- React Share for social sharing

### Backend
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Passport.js for social auth
- Express Validator for input validation
- PDF and Excel export functionality

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   ```

4. Start the development server:
   ```bash
   # Start frontend
   npm run dev

   # Start backend
   npm run dev:server
   ```

## API Documentation

### Authentication Routes
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile
- GET `/api/auth/google` - Google OAuth
- GET `/api/auth/facebook` - Facebook OAuth

### Contact Routes
- POST `/api/contacts` - Create new contact
- GET `/api/contacts` - Get all contacts (admin only)
- GET `/api/contacts/:id` - Get contact by ID (admin only)
- PUT `/api/contacts/:id/status` - Update contact status (admin only)
- DELETE `/api/contacts/:id` - Delete contact (admin only)
- GET `/api/contacts/export/pdf` - Export contacts as PDF (admin only)
- GET `/api/contacts/export/excel` - Export contacts as Excel (admin only)

## Security Features

- JWT authentication
- Password hashing
- Input validation
- Rate limiting
- Helmet security headers
- CORS configuration

## Performance Optimization

- React Query for efficient data fetching
- Image optimization
- Code splitting
- Compression middleware
- Proper indexing in MongoDB

## SEO Implementation

- Meta tags
- Open Graph tags
- Twitter Card metadata
- Schema.org markup
- Semantic HTML
- Proper heading hierarchy

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request