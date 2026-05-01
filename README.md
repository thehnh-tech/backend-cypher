# backend-cypher

Express + MongoDB backend for the Cipher mobile app.

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Vercel

Vercel detects `src/index.ts` as an Express app and deploys it as a Vercel Function.

Configure these environment variables in Vercel:

```bash
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=30d
NODE_ENV=production
```

After deployment, set the mobile app production API URL in EAS:

```bash
eas env:create production --name EXPO_PUBLIC_API_URL --value https://your-vercel-domain.vercel.app --visibility plaintext --non-interactive
```
