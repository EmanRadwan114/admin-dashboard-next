# Next Dashboard

A responsive dashboard built with **Next**, **React**, **TypeScript**, **TailwindCSS**, **Redux Toolkit**, and **Firebase**. It allows users to create an account, login, and logout. It also displays products in a table view that is fetched from [dummyjson website](https://dummyjson.com/) and can be exported in a xlsx or pdf formate.

## Tech Stack

- Next.js, React, TypeScript, TailwindCSS, and Redux Toolkit
- Firebase
- Docker
- xlsx for excel formate export
- jspdf and jspdf-autotable for pdf formate export
- Recharts for charts
- Fetch API for api calls and caching
- React-hook-form for forms
- Zod for validation
- Lucide-react for icons

## Features

- Component based architecture
- TypeScript for type safety
- Responsive design
- Firebase authentication
- Redux Toolkit for state management
- TailwindCSS for styling
- Docker for containerization
- Protected Routes with Middleware
- Display products from [dummyjson website](https://dummyjson.com/)
- Export products to xlsx or pdf
- Filter products by category
- Sort products by price
- Pagination

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

## Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here \
  --build-arg NEXT_PUBLIC_AUTH_DOMAIN=your_firebase_auth_domain_here \
  --build-arg NEXT_PUBLIC_PROJECT_ID=your_firebase_project_id_here \
  --build-arg NEXT_PUBLIC_APP_ID=your_firebase_app_id_here \
  --build-arg NEXT_PUBLIC_MEASUREMENT_ID=your_firebase_measurement_id_here \
  --build-arg NEXT_PUBLIC_DUMMMY_JSON_BASE_URL=https://dummyjson.com \
  -t next-dashboard .

docker run -p 3000:3000 next-dashboard
```

# Environment Variables

Create a `.env` file with the following keys (replace with your own values):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_APP_ID=your_app_id_here
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id_here
NEXT_PUBLIC_DUMMMY_JSON_BASE_URL=https://dummyjson.com

COOKIE_SECRET_KEY_1=your_cookie_secret_here
COOKIE_SECRET_KEY_2=your_cookie_secret_here

FIREBASE_PROJECT_ID=your_project_id_here
FIREBASE_CLIENT_EMAIL=your_service_account_email_here
FIREBASE_PRIVATE_KEY="your_service_account_private_key_here"
```
