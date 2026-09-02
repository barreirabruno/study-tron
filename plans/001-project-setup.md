# Plan: Task 001 - Project Setup

## Task Understanding

Set up the repository as a minimum npm-workspaces monorepo with two independent applications under `apps/`: a React + Vite frontend and a Node.js + TypeScript backend. The setup must include the minimum source structure, TypeScript, ESLint, Prettier, unit-test tooling, root command delegation, build/typecheck/lint/format/test/run commands, README updates, and a validated replacement for the temporary `AGENTS.md` validation section. No product features, cross-application communication, shared packages without consumers, dependency installation, or implementation work are allowed during this planning turn.

## Assumptions

- The repository currently contains no existing application or package manifests, so the monorepo structure can be introduced without migrating prior code.
- `packages/` may be created as an empty reserved directory because the task explicitly lists it as an expected artifact, even though no shared package may be added yet.
- During execution, dependency versions that are described as "latest stable" will be resolved at that time rather than assumed during planning.
- During execution, validation commands for local servers will be verified by starting each server, checking for a successful startup signal, and then stopping it cleanly.

## Open Questions

- Does `Jest 30.5` exist as a published, installable version compatible with the selected TypeScript + ESM backend setup on the execution date?
- Which exact stable versions of Vite and Vitest satisfy the task requirement at execution time, and whether either has an official LTS designation that affects version selection?
- Does the user want the backend proof of execution to be a minimal console-based HTTP server or a simpler non-network Node entry point, provided it remains independently executable from the root?

## Selected Size And Justification

- Selected size: `8` (`BIG`).
- Justification: this is a repository-wide initial setup affecting the root workspace, two independent applications, shared tooling, documentation, validation conventions, and agent workflow metadata. It introduces multiple dependencies, build/test/lint/typecheck pipelines, and startup validation for both applications. Regression risk is low because the repo is mostly empty, but validation effort and cross-cutting configuration scope are high.

## Affected Files Or Repository Areas

- Root workspace files to be created or updated during execution: repository manifest, root lockfile, shared TypeScript/ESLint/Prettier files, and root command wiring.
- `apps/frontend/`: frontend workspace manifest, Vite/TypeScript/test source, and minimal React entry point.
- `apps/backend/`: backend workspace manifest, TypeScript/Jest source, and minimal backend entry point.
- `packages/`: reserved directory only; no package creation unless a concrete consumer emerges within approved scope.
- [README.md](/home/barreiradev/Documents/development/study_tron/README.md): preserve existing content and append the minimum setup and usage documentation.
- [AGENTS.md](/home/barreiradev/Documents/development/study_tron/AGENTS.md): replace the temporary `Validation` section only after commands are successfully executed during the execution phase.

## Implementation Steps

1. Create the monorepo root structure with `apps/` and `packages/`, a root npm workspace manifest, and root scripts that delegate to frontend and backend workspaces.
2. Add shared root-level tooling configuration only where both applications can consume it without app-specific exceptions, keeping app-only dependencies and scripts inside each workspace.
3. Create the frontend workspace in `apps/frontend` with the minimum React + TypeScript + Vite structure, explicit non-watch scripts for run/test/lint/format-check/type-check/build, and one standalone Vitest proof test.
4. Create the backend workspace in `apps/backend` with the minimum Node.js + TypeScript + ESM structure, explicit non-watch scripts for run/test/lint/format-check/type-check/build, and one standalone Jest proof test.
5. Ensure the backend build and runtime approach is compatible with Node.js `24.20.0` LTS or higher without adding an application framework.
6. Update `README.md` with root-based install, run, test, lint, format-check, type-check, and build instructions for both workspaces while preserving current content.
7. Install dependencies from the repository root during execution, confirm that npm recognizes both workspaces, and verify only a single root `package-lock.json` is produced.
8. Execute each planned validation command independently from the root, including controlled startup and shutdown checks for the frontend and backend run commands.
9. Replace the temporary `AGENTS.md` validation section with only the commands that were actually executed successfully, then prepare the execution report and delivery summary.

## Possible Collateral Effects

- Root-level config choices may constrain later frontend/backend divergence if shared too aggressively.
- ESM alignment across Jest, TypeScript, and Node may influence file extensions, compiler output, and script conventions beyond the backend workspace.
- README and `AGENTS.md` updates may conflict with concurrent user edits if they happen before execution approval.

## Coupling Impact

- Moderate coupling at the tooling layer because the root workspace will coordinate scripts and possibly shared lint/format/type configuration.
- No intended runtime coupling between frontend and backend; the plan explicitly keeps source and execution isolated by workspace.

## Persistence Impact

- Not applicable. This task does not introduce databases, durable storage, or persistence schemas.

## External Integration Impact

- Limited to dependency retrieval from npm during execution.
- No third-party runtime services, APIs, deployment platforms, or CI integrations are in scope.

## Validation Strategy

- Confirm root dependency installation succeeds and creates a single root `package-lock.json`.
- Confirm each root-delegated frontend command succeeds: run, unit tests, lint, format-check, type-check, build.
- Confirm each root-delegated backend command succeeds: run, unit tests, lint, format-check, type-check, build.
- Confirm any repository-wide commands added by the setup succeed independently and terminate with meaningful exit codes.
- Confirm no validation command depends on watch mode.
- Confirm startup validations can be started and stopped normally.

## Rollback Considerations

- Changes are expected to be additive and isolated to repository setup files, workspace directories, README updates, and the validated `AGENTS.md` section.
- If execution fails partway, rollback can remove newly added workspace/config files and restore edited documentation from version control, provided no unrelated user edits land in the same files meanwhile.
- Dependency installation side effects are expected to be confined to `node_modules` and the single root lockfile.

## Risks

- Exact requested tool versions may be unavailable or incompatible, especially `Jest 30.5` and any implied Vite/Vitest LTS expectation.
- Jest + TypeScript + ESM configuration may require careful setup to satisfy both build and test requirements without adding unapproved tooling.
- Shared ESLint or TypeScript configuration may need limited per-workspace overrides despite the preference for shared root-level config.
- Root command naming must stay explicit and independent enough to satisfy validation requirements without introducing an unapproved orchestrator.

## Explicit Out-Of-Scope Items

- Implementing any Study-TRON product feature or business rule.
- Adding frontend-backend communication.
- Creating shared packages without a concrete consumer.
- Adding a task orchestrator, CI pipeline, deployment infrastructure, authentication, database setup, integration tests, or end-to-end tests.
- Installing dependencies or modifying application/configuration files during this planning-only turn.

## Unit Test Plan

### Unit-Test Cases

1. `apps/frontend` proof test
   - Test case: `ensure it renders the minimum frontend application successfully`
   - Expected observable behavior: rendering the frontend root component in the Vitest environment produces a stable visible marker that proves the React + Vite + TypeScript + Vitest wiring works.
   - Required mocks: none.
   - Mocking rationale: the proof test should exercise the real component output and local test environment without external boundaries.
   - Confidence: `HIGH`.
2. `apps/backend` proof test
   - Test case: `ensure it returns the minimum backend startup marker successfully`
   - Expected observable behavior: invoking the smallest testable backend unit, expected to be an exported pure function or equivalent startup descriptor used by the entry point, returns the stable value that proves the Jest + TypeScript + ESM wiring works.
   - Required mocks: none.
   - Mocking rationale: the backend proof should remain a pure local unit with no persistence, clocks, network, or external process dependencies.
   - Confidence: `MEDIUM`.

### Unit-Test Limitations

- Root command delegation, dependency installation, linting, formatting verification, type-checking, production builds, and long-running application startup behavior are not unit-test concerns for this task. They must be proven by the independent root validation commands during execution, as required by the task.
- If the backend entry point is implemented only as a process-start side effect with no exported testable unit, the backend proof test will need a small extracted pure unit within approved scope to keep the test at the unit level.

### Open Questions

- Should the backend proof test target an exported startup message/helper rather than the process entry module directly, so the test remains a true unit test and avoids process-level execution?

### Task-Size Reassessment

- Initial size: `8`.
- Revised size: `8`.
- Changed: `false`.
- Rationale: unit-test planning confirmed a deliberately small test surface of two proof tests with no additional mocks or new behavioral branches beyond the initial plan. The complexity remains driven by repository-wide tooling and validation setup rather than by test implementation volume.

### Revised Implementation Estimates

- Estimated token range: `18000` to `32000`.
- Estimated execution time: `60` to `120` minutes.
- Estimation confidence: `MEDIUM`.
- Recommended model: `null`.
- Model recommendation rationale: the task still requires a strong coding model that can set up and verify multi-workspace TypeScript, React/Vite, and Jest/ESM configurations consistently across root and workspace boundaries. Unit-test planning did not materially change the quality, cost, or velocity trade-off.
