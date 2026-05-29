# AI Rental Package Builder

A full-stack GenAI project that acts as a professional AI-powered camera rental package recommendation system. It helps users pick the perfect camera kit based on their shoot type, budget, rental duration, and special requirements.

## Features
- **Professional UI**: Premium dark theme with glassmorphism and modern styling.
- **Two Operational Modes**:
  - **Real AI Mode**: Uses the Gemini API to build dynamic, practical camera rental packages.
  - **Demo Fallback Mode**: If the API key is missing or invalid, the backend automatically returns a simulated prototype package so reviewers can test the UI without needing an API key!
- **WhatsApp Integration**: Copy-to-clipboard functionality to share the package via WhatsApp.
- **Responsive Design**: Works perfectly on both desktop and mobile devices.

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS v4, Lucide React
- **Backend**: Node.js, Express.js, Google Generative AI (Gemini)

---

## Local Setup and Installation

### 1. Clone the repository
\`\`\`bash
git clone <your-github-repo-link>
cd ai-rental-package-builder
\`\`\`

### 2. Backend Setup
Navigate to the \`backend\` directory:
\`\`\`bash
cd backend
npm install
\`\`\`
Copy the provided example file to create your local \`.env\` file. (The `.env` file is completely ignored by Git for security).
\`\`\`bash
cp .env.example .env
\`\`\`
Open the \`.env\` file and replace the placeholder with your real API key if you want to use the Real AI Mode:
\`\`\`env
PORT=5000
AI_API_KEY=your_real_google_gemini_api_key_here
\`\`\`
*Note: If you leave it as \`your_api_key_here\`, the app will gracefully run in Demo Fallback Mode.*

Start the backend server:
\`\`\`bash
npm run dev
\`\`\`
The backend will run on \`http://localhost:5000\`.

### 3. Frontend Setup
Navigate to the \`frontend\` directory (in a new terminal):
\`\`\`bash
cd frontend
npm install
\`\`\`
Create a \`.env\` file in the \`frontend\` folder:
\`\`\`env
VITE_BACKEND_URL=http://localhost:5000
\`\`\`
Start the frontend development server:
\`\`\`bash
npm run dev
\`\`\`
The frontend will run on \`http://localhost:5173\`.

---

## Deployment Guide (Render & Vercel)

The project is already pre-configured with CORS and Environment Variables to work seamlessly in production.

### Step 1: Deploy Backend to Render
1. Go to [Render](https://render.com/) and create a new **Web Service**.
2. Connect your GitHub repository.
3. Configure the settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add Environment Variables:
   - `AI_API_KEY`: `<your_real_google_gemini_api_key_here>`
5. Click **Deploy**. Once deployed, copy your backend URL (e.g., `https://ai-rental-backend.onrender.com`).

### Step 2: Deploy Frontend to Vercel
1. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import your GitHub repository.
3. Configure the settings:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (Vercel should auto-detect this).
   - **Build Command**: `npm run build`
4. Add Environment Variables:
   - `VITE_BACKEND_URL`: `<your_render_backend_url>` (Make sure there is NO trailing slash, e.g., `https://ai-rental-backend.onrender.com`).
5. Click **Deploy**.

That's it! Your Vercel frontend will now securely communicate with your Render backend via the configured environment variables.
