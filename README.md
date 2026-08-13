# Chatbot App

A small chat app: React frontend + NestJS backend, backed by Groq's free
OpenAI-compatible API.

```
chatbot-app/
  backend/    NestJS API — POST /chat
  frontend/   React (Vite) chat UI
```

## 1. Get a free API key

1. Go to https://console.groq.com and sign up (free).
2. Create an API key.
3. Free tier covers plenty for testing/small apps. Models like
   `llama-3.1-8b-instant` are fast and free.

## 2. Run locally

**Backend**
```bash
cd backend
npm install
cp .env.example .env      # then paste your GROQ_API_KEY into .env
npm run start:dev         # http://localhost:3000
```

**Frontend** (new terminal)
```bash
cd frontend
npm install
cp .env.example .env      # VITE_API_URL should point at your backend
npm run dev                # http://localhost:5173
```

Open http://localhost:5173 and chat.

## 3. How it works

- `frontend` sends `{ messages: [...] }` to `POST /chat` on the backend.
- `backend/src/chat/chat.service.ts` forwards that to Groq's
  `chat/completions` endpoint (OpenAI-compatible format) and returns the
  reply. The API key never touches the browser — it stays server-side.
- To switch providers later (OpenRouter, Together, OpenAI, etc.), you
  only need to change the `apiUrl`, `apiKey`, and `model` in
  `chat.service.ts` — the request/response shape is the same for any
  OpenAI-compatible provider.

## 4. Deploying

**Backend (needs a real Node server, not static hosting):**
- [Render](https://render.com) — free tier, easiest for NestJS.
  - New Web Service → connect your repo → root dir `backend`
  - Build command: `npm install && npm run build`
  - Start command: `npm run start`
  - Add env var `GROQ_API_KEY` in the dashboard.
- Railway or Fly.io work the same way if you prefer those.

**Frontend (static hosting):**
- [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — both
  have free tiers and auto-detect Vite.
  - Root dir `frontend`
  - Set env var `VITE_API_URL` to your deployed backend URL.

**Don't forget:** once the backend is deployed, set `FRONTEND_ORIGIN` in
its env vars to your deployed frontend URL (for CORS), and set
`VITE_API_URL` in the frontend to your deployed backend URL.
