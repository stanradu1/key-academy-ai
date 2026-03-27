# Key Academy AI — Deploy Guide

## Files structure
```
key-academy-ai/
├── index.html        ← Frontend (chat UI)
├── api/
│   └── chat.js       ← Backend (Claude API proxy)
└── vercel.json       ← Vercel config
```

---

## Deploy in 15 minutes

### Step 1 — Get your Claude API key
1. Go to https://console.anthropic.com
2. Sign up / log in
3. Go to "API Keys" → Create new key
4. Copy it — you'll need it in Step 3

---

### Step 2 — Upload to GitHub
1. Go to https://github.com and create a free account if you don't have one
2. Click "New repository" → name it `key-academy-ai` → Public → Create
3. Upload all 3 files:
   - `index.html`
   - `api/chat.js` (create folder `api` first)
   - `vercel.json`

---

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your `key-academy-ai` repo
4. Before deploying → click "Environment Variables"
5. Add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** (paste your key from Step 1)
6. Click "Deploy"

---

### Step 4 — Done!
Vercel gives you a live URL like:
`https://key-academy-ai.vercel.app`

Works on desktop and mobile. Share it with your community!

---

## Costs
- Vercel hosting: FREE
- Claude API: ~$5-10/month for normal usage
- Domain (optional): ~$10/year

---

## Customization
- Change the AI personality → edit the `SYSTEM` variable in `index.html`
- Change colors → edit `:root` CSS variables in `index.html`
- Add more quick-topic pills → copy a `<span class="pill">` line in `index.html`
