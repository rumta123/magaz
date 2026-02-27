# Next.js Commerce integration (minimal)

This folder contains a minimal Next.js app that proxies selected Commerce endpoints to your NestJS backend.

How it works
- API routes under `pages/api/*` forward requests to the Nest backend using `lib/backend.ts`.
- Configure the backend URL with `NEXT_PUBLIC_BACKEND_URL`. Default: `http://localhost:3000`.

Run locally

1. Open a terminal in this folder:

```powershell
cd react_shop\next_commerce
npm install
npm run dev
```

2. Make sure your Nest backend is running (default `http://localhost:3000`).

Notes / next steps
- This is a small starter; upgrade to a full Commerce integration (UI, auth flows, cart persistence) as needed.
- The `pages/api/auth/login` route will set an HttpOnly cookie named `token` when the backend returns a token field (`accessToken`, `token`, or `access_token`).
