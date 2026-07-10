# Ass_Youssef
# Ishtari Product Dashboard

A full-stack product dashboard application built for managing and displaying product records from a secured API.

The application provides:
- Product listing
- Search/filter functionality
- JWT-protected API communication
- API response validation using Zod
- Type-safe development with TypeScript
- Responsive user interface
- Production API management using PM2

---

# Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Frontend Dashboard](#running-the-frontend-dashboard)
- [Running the API](#running-the-api)
- [Running API with PM2](#running-api-with-pm2)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing Endpoints with Curl](#testing-endpoints-with-curl)
- [Authentication](#authentication)
- [Frontend Features](#frontend-features)
- [Backend Features](#backend-features)
- [Assumptions](#assumptions)
- [Security Notes](#security-notes)
- [Improvements Beyond Requirements](#improvements-beyond-requirements)
- [Future Improvements](#future-improvements)

---

# Overview

The Ishtari Product Dashboard is a responsive web application that consumes a REST API to display product records.

The dashboard communicates with a secured backend API using JWT authentication.

The frontend does not directly handle API logic inside components. All API communication is handled through dedicated service files.

All API responses are validated using Zod before rendering data to ensure data correctness and prevent unexpected API structures.

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zod
- Fetch API

## Backend

- Node.js
- Express.js
- JWT Authentication
- REST API
- PM2 Process Manager

---

# Project Structure

```
Ass_Youssef/

├── dashboard-nextjs/
│
│   
│   │   ├── app/
│   │   │   └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── Loading.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── ProductTable.tsx
│   │   │
│   │   ├── schemas/
│   │   │   └── productSchema.ts
│   │   │
│   │   └── services/
│   │       └── productService.ts
│   │
│   └── package.json
│
│
└── api-nodejs/
    
    ├── src/
    │
    │   ├── controllers/
    │   │
    │   ├── routes/
    │   │
    │   ├── middleware/
    │   │   └── auth.js
    │   │
    │   └── server.js
    │
    └── package.json

```

---

# Prerequisites

Before running the project, install:

- Node.js 18 or higher
- npm
- Git

Optional:

- PM2 for production API deployment

Install PM2:

```bash
npm install pm2 -g
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd ishtari-dashboard
```

---

# Running the Frontend Dashboard

Navigate to frontend:

```bash
cd dashboard-nextjs
```

Install dependencies:

```bash
npm install
```

Create:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Start development server:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# Running the API

Navigate to backend:

```bash
cd api-nodejs
```

Install dependencies:

```bash
npm install
```

Create:

```
.env
```

Example:

```env
PORT=3001

JWT_SECRET=mysecretkey1
```

Run API:

```bash
npm run dev
```

The API will run at:

```
http://localhost:3001
```

---

# Running API Without PM2

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# Running API With PM2

Install PM2:

```bash
npm install pm2 -g
```

Start API:

```bash
pm2 start src/server.js --name ishtari-api
```

Check running applications:

```bash
pm2 list
```

View logs:

```bash
pm2 logs ishtari-api
```

Restart API:

```bash
pm2 restart ishtari-api
```

Stop API:

```bash
pm2 stop ishtari-api
```

Delete process:

```bash
pm2 delete ishtari-api
```

Save PM2 configuration:

```bash
pm2 save
```

Enable startup on server reboot:

```bash
pm2 startup
```

---

# Environment Variables

## Frontend

`.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Purpose:

- Defines API URL
- Prevents hardcoded URLs inside source code


## Backend

`.env`

```env
PORT=3001

JWT_SECRET=mysecretkey1
```

Purpose:

- Server port configuration
- JWT signing and verification secret

---

# API Documentation

## Health Check

### GET

```
/health
```

Example:

```bash
curl http://localhost:3001/health
```

Response:

```json
{
  "status": "ok"
}
```

---

# Products API

## Get Products

### GET

```
/api/products
```

Authentication:

Required JWT token.

Header:

```
Authorization: Bearer TOKEN
```

Example:

```bash
curl \
-H "Authorization: Bearer YOUR_TOKEN" \
http://localhost:3001/api/products
```

Response example:

```json
[
 {
   "id":"1",
   "name":"Laptop",
   "status":"available",
   "createdAt":"2026-07-10"
 }
]
```

---

## Create Product

### POST

```
/api/products
```

Example:

```bash
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN" \
-d '{
"name":"Keyboard",
"status":"available"
}' \
http://localhost:3001/api/products
```

---

## Update Product

### PUT

```
/api/products/:id
```

Example:

```bash
curl -X PUT \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN" \
-d '{
"name":"Updated Product"
}' \
http://localhost:3001/api/products/1
```

---

# Authentication

Protected endpoints require JWT authentication.

Request format:

```
Authorization: Bearer JWT_TOKEN
```

Example:

```
Authorization: Bearer eyJhbGciOiJIUzI1...
```

The backend validates the token using:

```
JWT_SECRET
```

Invalid or expired tokens return:

```
401 Unauthorized
```

---

# Frontend Features

## Product Listing

Displays products fetched from the API.

## Search

Users can filter products by name.

## Loading State

Shows a loading indicator while fetching data.

## Error Handling

Handles:

- Unauthorized (401)
- Forbidden (403)
- Server errors

## Empty State

Displays a message when no products exist.

## Responsive Design

The dashboard works on:

- Mobile devices
- Tablets
- Desktop screens

---

# Backend Features

- REST API architecture
- JWT authentication middleware
- Request validation
- Error handling middleware
- Environment configuration
- PM2 production support

---

# Assumptions

The following assumptions were made:

1. The API provides product records with:
   - id
   - name
   - status
   - createdAt

2. Authentication is handled using JWT tokens.

3. Users already have valid authentication credentials.

4. The frontend and backend run separately during development.

5. The API response structure remains consistent.

6. Product data does not require real-time updates.

---

# Security Notes

The following security practices were implemented:

## JWT Authentication

Protected API routes require valid JWT tokens.

## Environment Variables

Sensitive values such as JWT secrets are stored in `.env` files.

Secrets are not committed to source control.

## API Validation

All API responses are validated using Zod before displaying data.

## Type Safety

TypeScript is used to prevent unsafe data handling.

## CORS Protection

Only trusted frontend origins are allowed.

## Error Handling

The API avoids exposing sensitive server information.

## No Any Types

The project avoids unsafe `any` usage.

---

# Improvements Beyond Requirements

## 1. Enhanced User Experience

Added:

- Responsive dashboard layout
- Mobile-friendly product table
- Loading spinner animation
- Improved empty and error states

---

## 2. Strong Data Validation

Added:

- Zod API response validation
- Automatic TypeScript type inference from schemas
- Runtime data checking before rendering

---

## Additional Improvements

- Component-based architecture
- Dedicated API service layer
- Environment-based configuration
- PM2 deployment documentation
- Clean TypeScript implementation

---

# Future Improvements

Possible future enhancements:

- Add user login and registration
- Add product creation interface
- Add pagination
- Add sorting functionality
- Add role-based permissions
- Add automated tests
- Add Docker deployment

---

# Author

Youssef Faddoul
