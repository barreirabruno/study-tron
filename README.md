# STUDY-TRON

<img src="./study-tron-logo.png" alt="Logo" width="600">

Preparing for IT certification exams can be tricky. Now you can see your study progress through a cockpit, choose your study tools, like flashcards, make study sessions and check your progress.

## Agentic code project

This is a personal experiment with agentic code, check AGENTS.md file, agent-rules folder and tasks folder to check how I guide the code agent.

## Tech stack

- Npm
- NodeJS
- Typescript

## Workspace layout

- `apps/` contains the deployable applications.
- `apps/frontend` contains the React + Vite frontend workspace.
- `apps/backend` contains the Node.js + TypeScript backend workspace.
- `packages/` is reserved for shared packages with concrete consumers.

## Installation

Install dependencies from the repository root:

```bash
npm install
```

## Frontend commands

Run the frontend from the repository root:

```bash
npm run dev:frontend
```

Run the frontend unit tests:

```bash
npm run test:frontend
```

Lint the frontend:

```bash
npm run lint:frontend
```

Check frontend formatting:

```bash
npm run format:check:frontend
```

Type-check the frontend:

```bash
npm run typecheck:frontend
```

Build the frontend:

```bash
npm run build:frontend
```

## Backend commands

Run the backend from the repository root:

```bash
npm run dev:backend
```

Run the backend unit tests:

```bash
npm run test:backend
```

Lint the backend:

```bash
npm run lint:backend
```

Check backend formatting:

```bash
npm run format:check:backend
```

Type-check the backend:

```bash
npm run typecheck:backend
```

Build the backend:

```bash
npm run build:backend
```

## Repository-wide commands

Run all lint checks:

```bash
npm run lint
```

Run all formatting checks:

```bash
npm run format:check
```

Run all type checks:

```bash
npm run typecheck
```

Run all unit tests:

```bash
npm run test
```

Run all production builds:

```bash
npm run build
```
