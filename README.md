# Chatbot App — React + NestJS Open-Source AI Chat Application

A free, open-source, self-hostable chatbot app built with **React** (frontend)
and **NestJS** (backend), powered by **Groq's free LLM API**. Fully responsive
across desktop, tablet, and mobile — clone it, add your free API key, and
you have a working AI chat app in minutes.

**Keywords:** chatbot, chat app, React chatbot, NestJS chatbot, open-source AI
chat app, free LLM API, Groq API integration, TypeScript chatbot starter,
self-hosted chatbot, conversational AI UI, OpenAI-compatible chat app,
responsive chat interface.

---

## Features

- 💬 Real-time chat UI with distinct user/assistant message bubbles
- 📱 Fully responsive — works on desktop, tablet, and mobile (full-screen layout)
- 🎨 Markdown rendering in AI responses (headers, bold, lists, code)
- 🔑 Free to run — uses Groq's free-tier API (OpenAI-compatible)
- 🔌 Provider-agnostic backend — swap Groq for OpenAI, OpenRouter, Together,
  or any OpenAI-compatible API by editing one file
- 🔒 API key stays server-side — never exposed to the browser
- 🧩 Clean separation: React frontend + NestJS backend, easy to extend

## Tech Stack

| Layer     | Technology                     |
|-----------|---------------------------------|
| Frontend  | React, Vite                    |
| Backend   | NestJS, TypeScript              |
| AI Provider | Groq (free, OpenAI-compatible API) |
| Styling   | Plain CSS (no framework lock-in) |

## Project Structure

```
chatbot-app/
  backend/    NestJS API — POST /chat
    src/
      chat/
        chat.controller.ts
        chat.service.ts
        providers/
          groq.provider.ts     # swap this to change AI provider
  frontend/   React (Vite) chat UI
    src/
      App.jsx
      index.css
```

## Quick Start

### 1. Get a free API key
Sign up at [console.groq.com](https://console.groq.com) and create a free API
key. No credit card required.

### 2. Run the backend
```bash
cd backend
npm install
cp .env.example .env      # paste your GROQ_API_KEY into .env
npm run start:dev         # runs on http://localhost:3000
```

### 3. Run the frontend
```bash
cd frontend
npm install
cp .env.example .env      # set VITE_API_URL to your backend URL
npm run dev                # runs on http://localhost:5173
```

Open `http://localhost:5173` and start chatting.

## How It Works

1. The React frontend sends `{ messages: [...] }` to `POST /chat` on the backend.
2. `backend/src/chat/chat.service.ts` forwards the request to Groq's
   `chat/completions` endpoint (OpenAI-compatible format) and returns the reply.
3. The API key is read from environment variables server-side — it's never
   sent to or stored in the browser.

### Switching AI providers

Because most free and paid LLM APIs (Groq, OpenAI, OpenRouter, Together AI)
use the same OpenAI-compatible request/response shape, swapping providers
only requires editing `backend/src/chat/providers/groq.provider.ts` — change
the URL, API key env var, and model name. No other code needs to change.

## Deployment

**Backend** (needs a persistent Node server):
- [Render](https://render.com) (free tier) — root dir `backend`, build
  command `npm install && npm run build`, start command `npm run start`.
  Add `GROQ_API_KEY` as an environment variable in the dashboard.
- Railway or Fly.io work the same way.

**Frontend** (static hosting):
- [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — root dir
  `frontend`, auto-detected as a Vite app. Set `VITE_API_URL` to your
  deployed backend URL.

After deploying, set `FRONTEND_ORIGIN` on the backend to your frontend's URL
(for CORS).

## Contributing

Contributions are welcome — this project is intentionally kept simple and
provider-agnostic so it's easy to extend. Open an issue or PR.

## License

MIT — free to use, modify, and self-host.

## contact
ilyesmekalfa@gmail.com