# MERN Stack Learning Assistant (React + Vite)

A lightweight chat-style learning assistant for the MERN stack. Built with React, TypeScript, Vite, and Tailwind CSS. It features click-to-ask suggestion cards, message re-ask by clicking bubbles, auto-scroll, and persistent chat history.

## Features
- Chat UI with typing indicator
- Suggestion bubbles to start a chat
- Click any bubble to resend its text
- Auto-scroll to the latest message
- Persistent chat history (localStorage by default, optional sessionStorage)
- **Markdown support** for bot responses (code blocks, lists, formatting)
- **Contextual suggested prompts** that appear based on conversation history

## Tech Stack
- Runtime/Build: Node.js, Vite
- UI: React 18, TypeScript, Tailwind CSS
- Icons: lucide-react
- Markdown: react-markdown, remark-gfm
- Linting: ESLint

## Project Structure
```
/ (project root)
  ├─ src/
  │  ├─ components/
  │  │  ├─ ChatInterface.tsx     # Main chat container
  │  │  ├─ ChatHeader.tsx        # Header with clear chat
  │  │  ├─ ChatInput.tsx         # Message input + submit + suggestions
  │  │  ├─ EmptyState.tsx        # Landing suggestions (clickable)
  │  │  ├─ MessageBubble.tsx     # Chat bubble (click-to-resend, markdown support)
  │  │  ├─ SuggestedPrompts.tsx  # Contextual prompt suggestions
  │  │  └─ TypingIndicator.tsx   # Bot typing indicator
  │  ├─ utils/
  │  │  ├─ storage.ts            # Local/session storage helpers
  │  │  ├─ botResponses.ts       # Response logic
  │  │  └─ mernStackData.ts      # MERN Q&A dataset
  │  ├─ types/chat.ts            # Message type
  │  ├─ main.tsx, App.tsx        # App entry
  │  └─ index.css, vite-env.d.ts
  ├─ tailwind.config.js, postcss.config.js
  ├─ tsconfig*.json
  ├─ vite.config.ts
  ├─ package.json
  └─ dist/                       # Production build (after build)
```

## Prerequisites
- Node.js 18+
- npm 9+ (or pnpm/yarn)

## Setup & Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the printed URL (usually `http://localhost:5173`).

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Build
```bash
npm run build
```
Artifacts go to `dist/` and can be deployed to any static host.

## Deployment
- Netlify: Build command `npm run build`, publish directory `dist`
- Vercel: Build `npm run build`, output `dist`
- GitHub Pages: Build locally and deploy `dist/`

## Persistence (localStorage vs sessionStorage)
By default, chat history persists in localStorage. Switch at runtime:
```ts
import { setChatStorageMode, getChatStorageMode } from './src/utils/storage';

setChatStorageMode('session'); // or 'local'
console.log(getChatStorageMode());
```
Notes:
- History initializes synchronously in `ChatInterface` to avoid refresh loss.
- Storage falls back safely if unavailable and migrates best-effort when switching modes.

## How It Works
- `types/chat.ts` defines the `Message` shape
- `ChatInterface` manages state, auto-scroll, save/load history
- `botResponses.ts` resolves responses using `mernStackData.ts`
- `EmptyState` and `MessageBubble` are clickable to send text
- `MessageBubble` renders markdown for bot messages with syntax highlighting
- `SuggestedPrompts` shows contextual suggestions based on recent conversation
- Typing delay simulates bot response

## Extending
- Add Q&A in `src/utils/mernStackData.ts`
- Update response logic in `src/utils/botResponses.ts`
- Adjust styles via Tailwind classes or `index.css`
- Add header actions (e.g., storage mode toggle) in `ChatHeader`

## Troubleshooting
- History disappears: Avoid private mode, check storage mode, inspect console errors
- Styles missing: Ensure Tailwind is configured and CSS includes directives
- Build issues: Reinstall dependencies and retry

## License
MIT
