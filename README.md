# Strive

AI-assisted interview preparation app that turns a job description, resume, and self-summary into a personalized interview plan.

## Latest updates

- Updated branding in the frontend title and favicon.
- Improved the interview flow with protected routes and a persistent navbar.
- Added report generation from job description, resume, and self-description.
- Added interview report pages with technical questions, behavioral questions, a preparation roadmap, match score, and skill gaps.
- Added resume PDF download support from the report view.

## Tech stack

### Frontend

- React + Vite
- React Router
- Sass
- Axios

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs
- Google GenAI SDK (`@google/genai`)

## Project structure

- `frontend/` — React client
- `backend/` — Express API server

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB

### 1) Clone the repo

```bash
git clone https://github.com/Sharibraza/Strive.git
cd Strive
```

### 2) Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=3000
CLIENT_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_genai_api_key
```

`CLIENT_URL` is used by the backend CORS config to allow the frontend origin during local development.

Start the API:

```bash
npm run dev
```

### 3) Frontend setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

## Available scripts

### backend/

- `npm run dev` — start the API server with nodemon

### frontend/

- `npm run dev` — start the Vite dev server
- `npm run build` — build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Features

- User registration, login, and logout
- Protected app routes
- AI-generated interview plans
- Resume upload or self-description fallback
- Interview report history
- Resume PDF generation

## License

Add a license file if you plan to open-source the project.
