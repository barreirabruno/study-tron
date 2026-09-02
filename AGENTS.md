# Project Instructions

## Project Purpose

This repository contains Study-TRON, a personal study console that helps people make their study progress visible.

The system supports different study goals, including school subjects, IT certification exams, and other learning paths. Users can choose their study tools and monitor progress through a consolidated cockpit.

## Current Stage

The project is in its initial setup stage.

Read only the task explicitly referenced by the user in the `tasks/` directory before proposing changes.

## Task Artifacts

Each task can produce these artifacts:

- `tasks/<task-id>-<task-name>.md`: task requirements, constraints, and acceptance criteria.
- `plans/<task-id>-<task-name>.md`: detailed discovery and implementation plan.
- `summaries/<task-id>-<task-name>-summary.md`: structured metadata and execution summary.

Rules must remain in `agent-rules/` and must not be copied into task, plan, or summary files.

## Workflow

### 1. Planning

1. Read the task file explicitly referenced by the user.
2. Follow:

   - [Planning rules](./agent-rules/planning.md)

3. Inspect only the repository areas relevant to the task.
4. Create the detailed planning output in:

   - `plans/<task-id>-<task-name>.md`

5. Create the task summary in:

   - `summaries/<task-id>-<task-name>-summary.md`

6. Add the planning metadata produced according to `planning.md` under:

   - `## Step: planning`

### 2. Unit-Test Planning

1. After the initial plan exists, follow:

   - [Planning unit-test rules](./agent-rules/planning-unit-tests.md)

2. Append the detailed unit-test plan to the existing plan file.
3. Add the structured unit-test planning result under:

   - `## Step: planning-unit-tests`

4. Update planning estimates when required by the unit-test planning rules.
5. Present the completed plan and summary to the user.
6. Stop and wait for explicit approval.

### 3. Execution

1. Never implement application code or tests without explicit user approval.
2. After approval, implement only the approved plan.
3. Run the validations required by the approved plan.
4. Stop and report if execution requires an unapproved scope change.

### 4. Execution Report

1. After execution, follow:

   - [Execution-report rules](./agent-rules/execution-report.md)

2. Add the structured execution result to the task summary under:

   - `## Step: execution-report`

3. Add the human-readable delivery report under:

   - `## Step: delivery-report`

4. Present the completed summary to the user.

## Progressive Disclosure

Load each rule file only when its workflow stage becomes relevant:

- Load `planning.md` during discovery, estimation, and planning.
- Load `planning-unit-tests.md` only after the initial implementation plan exists.
- Load `execution-report.md` only after an approved execution has occurred.

Do not:

- load unrelated rule files in advance;
- load unrelated tasks, plans, or summaries;
- read previous task artifacts unless the current task explicitly depends on them;
- copy rule-file contents into `AGENTS.md`;
- copy rule-file contents into task files;
- copy JSON schemas into plan files;
- create empty future workflow steps as placeholders.

## Summary Lifecycle

A task summary is created during planning and updated progressively.

Its lifecycle is:

```text
planning
→ planning-unit-tests
→ explicit approval
→ execution-report
→ delivery-report
```

Each workflow stage must:

- write only its own section;
- preserve previously written sections;
- use the output format defined by its corresponding rule file;
- avoid creating sections for stages that have not occurred.

## Global Constraints

- Never implement during discovery or planning.
- Never expand the task scope.
- State assumptions, risks, missing information, and open questions.
- Do not silently resolve product or architectural decisions.
- Prefer the smallest design that satisfies the approved requirements.
- Reuse existing project conventions before introducing new ones.
- Preserve existing user changes.
- Do not suppress validation failures.
- Do not fabricate time, token, cost, status, or model information.
- Use `null` when a required measurement is unavailable and explain why.

## Validation

Confirmed non-interactive validation commands for project setup:

- `npm install`: install dependencies from the repository root and generate the single root `package-lock.json`.
- `npm ls --workspaces --depth 0`: confirm npm recognizes the `@study-tron/frontend` and `@study-tron/backend` workspaces.
- `npm run dev:frontend`: start the frontend Vite server from the repository root, confirm startup at `http://127.0.0.1:5173/`, and stop it normally.
- `npm run test:frontend`: run the frontend Vitest proof test.
- `npm run lint:frontend`: run frontend ESLint validation.
- `npm run format:check:frontend`: run frontend Prettier verification.
- `npm run typecheck:frontend`: run frontend TypeScript validation.
- `npm run build:frontend`: run the frontend production build.
- `npm run dev:backend`: run the backend from the repository root and confirm it prints `Hello world, from backend application`.
- `npm run test:backend`: run the backend Jest proof test.
- `npm run lint:backend`: run backend ESLint validation.
- `npm run format:check:backend`: run backend Prettier verification.
- `npm run typecheck:backend`: run backend TypeScript validation.
- `npm run build:backend`: run the backend production build.
- `npm run lint`: run repository-wide lint validation across both workspaces.
- `npm run format:check`: run repository-wide Prettier verification for the root and both workspaces.
- `npm run typecheck`: run repository-wide TypeScript validation across both workspaces.
- `npm run test`: run repository-wide unit tests across both workspaces.
- `npm run build`: run repository-wide production builds across both workspaces.

For subsequent tasks:

- Run the commands required by the approved plan.
- Do not use commands that remain in watch mode.
- Report the command, exit status, and concise result.
- Do not reproduce complete terminal output unless requested.

## Definition of Done

A task is complete when:

- the approved scope has been implemented;
- all acceptance criteria are satisfied;
- the tests defined in the approved plan pass;
- required validations pass;
- no unrelated changes were introduced;
- deviations from the approved plan are reported;
- known limitations are reported;
- the summary contains the completed workflow stages;
- the delivery report has been presented to the user.
