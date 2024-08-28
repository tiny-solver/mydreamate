# My DreamMate (feat. gen-ai)

- build your dream mate with gen-ai.

# Stacks

## frontend

- 'react'
> npm run tauri:dev
- 'tauri'
> npm run dev

## backend

- 'convex'
> npx convex dev

#### deploy frontend to webapp

```bash
cd frontend
yarn build
npx serve@latest out
```
#### deploy frontend to tauri app

```bash
# install tauri in WSL
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
npm install -g @tauri-apps/cli

cd frontend
npx tauri init
npm install @tauri-apps/cli @tauri-apps/api

# for npm run tauri:dev
sudo apt update
sudo apt install build-essential
rustup update
sudo apt install pkg-config
sudo apt-get install libsoup2.4-dev
sudo apt-get install libwebkit2gtk-4.0-dev

# for npm run tauri:build
sudo apt-get update
sudo apt-get install fuse libfuse2 zsync desktop-file-utils
sudo apt-get install librsvg2-dev
# packages.json 수동으로 수정필요, tauri:dev, tauri:build 추가
# "scripts": {
#   "dev": "next dev",               // Next.js 개발 서버 실행
#   "build": "next build",           // Next.js 빌드
#   "start": "next start",           // Next.js 프로덕션 서버 실행
#   "lint": "next lint",             // ESLint 실행
#   "tauri:dev": "tauri dev",        // Tauri 개발 서버 실행
#   "tauri:build": "tauri build"     // Tauri 애플리케이션 빌드
# },
```

## backend


## base

opensources
- stable diffusion
- comfyui
- 

# Donate

