# Task 001 — Project Setup

## Objective

Initialize the project as a minimum monorepo containing two independently executable applications:

* a frontend application;
* a backend application.

The project must include the minimum structure and tooling required for local development with an AI agent.

The resulting project must be executable, buildable, unit-testable, and ready to receive the first functional task.

## Context

This is the initial setup of the repository.

The repository already contains the agent workflow instructions:

* `AGENTS.md`;
* `agent-rules/planning.md`;
* `agent-rules/planning-unit-tests.md`;
* `agent-rules/execution-report.md`.

These files and their existing behavior must be preserved.

## Technical Decisions

The following decisions must be treated as constraints.

### Repository

* Repository structure: monorepo.
* Package manager: npm.
* Workspace manager: npm workspaces.
* Task orchestrator: none initially.
* Deployable applications directory: `apps/`.
* Shared packages directory: `packages/`.
* Frontend application: `apps/frontend`.
* Backend application: `apps/backend`.
* Dependency lock file: a single `package-lock.json` at the repository root.
* Root commands must delegate execution to the appropriate workspace.
* Shared packages must not be created without a concrete consumer.
* Independent lock files must not be created inside workspaces.

### Shared Tooling

Both applications must use:

* Programming language: TypeScript.
* Lint tool: ESLint.
* Formatter: Prettier.
* Module system: ECMAScript Modules.
* Type checking: TypeScript compiler.
* Shared tooling configuration may be placed at the repository root when both applications can consume it without application-specific exceptions.

### Frontend Application

The frontend application must use:

* Application library: React.
* Development and build tool: the latest stable Vite release available during setup, using an official LTS release if one exists.
* Unit-test framework: the latest stable Vitest release available during setup, using an official LTS release if one exists.
* Programming language: TypeScript.
* JSX implementation: React JSX.
* Application directory: `apps/frontend`.
* Application framework beyond React and Vite: none.

### Backend Application

The backend application must use:

* Runtime: Node.js `24.20.0` LTS or higher.
* Application framework: none.
* Unit-test framework: Jest `30.5`.
* Programming language: TypeScript.
* Module system: ECMAScript Modules.
* Application directory: `apps/backend`.

Do not silently replace, remove, or add technologies.

If a requested version does not exist, is incompatible, or cannot be installed, report it as an open question during planning. Do not silently select another version.

## Monorepo Requirements

* Initialize the repository using npm workspaces.
* Configure `apps/frontend` as an independent npm workspace.
* Configure `apps/backend` as an independent npm workspace.
* Keep the dependency lock file exclusively at the repository root.
* Keep dependencies used only by one application in that application's workspace manifest.
* Keep repository-wide development dependencies at the root only when both applications use the same configuration.
* Do not create placeholder shared libraries.
* Do not create a shared package without a concrete consumer.
* Do not introduce a monorepo task orchestrator.
* Do not introduce independent lock files inside workspaces.
* Provide root commands that delegate execution to the corresponding workspace.
* Make both applications independently executable and buildable from the repository root.
* Keep frontend and backend source code isolated in their corresponding workspaces.
* Do not add communication between the frontend and backend during this task.

## Requirements

* Initialize the project using the approved technologies.
* Create the minimum monorepo structure required to contain both applications.
* Create the minimum source-code structure required to run the frontend application.
* Create the minimum source-code structure required to run the backend application.
* Create a minimum executable entry point for the frontend.
* Create a minimum executable entry point for the backend.
* Configure TypeScript for both applications.
* Configure the compiler or transpiler when applicable.
* Configure unit-test execution for the frontend using Vitest.
* Configure unit-test execution for the backend using Jest.
* Write one standalone frontend unit test proving that the Vitest configuration works.
* Write one standalone backend unit test proving that the Jest configuration works.
* Ensure both proof tests are independently executable.
* Configure ESLint for both applications.
* Configure Prettier for both applications.
* Configure formatting verification.
* Configure type checking for both applications.
* Configure the production build for both applications.
* Configure local execution for both applications.
* Define independent, non-interactive commands for each validation.
* Ensure validation commands terminate automatically and return meaningful exit codes.
* Do not configure validation commands in watch mode.
* Add the minimum project documentation required for local execution to `README.md`.
* Do not remove any existing README content.
* Document how to install dependencies from the repository root.
* Document how to run, test, lint, format-check, type-check, and build each application from the repository root.
* Preserve the existing agent workflow structure.
* Update the `Validation` section of `AGENTS.md` with only commands that were executed successfully.

## Validation Requirements

The setup must provide and verify independent root commands for:

### Frontend

* local frontend execution;
* frontend unit tests;
* frontend lint;
* frontend formatting verification;
* frontend type checking;
* frontend production build.

### Backend

* local backend execution;
* backend unit tests;
* backend lint;
* backend formatting verification;
* backend type checking;
* backend production build.

### Repository

* dependency installation;
* repository-wide lint when applicable;
* repository-wide formatting verification when applicable;
* repository-wide type checking when applicable;
* repository-wide unit-test execution when applicable;
* repository-wide production build when applicable.

Each validation command must:

* be executable from the repository root;
* terminate without human interaction;
* return a meaningful exit code;
* avoid watch mode;
* be documented only after successful execution.

Local application execution commands may remain active while serving the application. Their validation process must:

* start the application;
* confirm that the application initialized successfully;
* stop the application normally;
* report the result.

Do not require a single aggregated validation command.

Do not use integration or end-to-end tests during this task.

## Expected Artifacts

The completed setup is expected to contain:

1. A root npm workspace manifest.
2. A single dependency lock file at the repository root.
3. An `apps/` directory for deployable applications.
4. An `apps/frontend` workspace.
5. An `apps/backend` workspace.
6. A `packages/` directory reserved for packages with concrete consumers.
7. A package manifest for the frontend workspace.
8. A package manifest for the backend workspace.
9. A frontend source-code directory.
10. A backend source-code directory.
11. A minimum executable frontend application entry point.
12. A minimum executable backend application entry point.
13. Frontend unit-test configuration using Vitest.
14. Backend unit-test configuration using Jest.
15. One standalone frontend unit test proving the Vitest configuration.
16. One standalone backend unit test proving the Jest configuration.
17. ESLint configuration applicable to both applications.
18. Prettier configuration applicable to both applications.
19. TypeScript configuration for both applications.
20. Build configuration for the frontend application.
21. Build configuration for the backend application.
22. Root commands for running and validating the frontend workspace.
23. Root commands for running and validating the backend workspace.
24. Project README documentation.
25. Updated `AGENTS.md` validation commands.

Exact filenames must follow the conventions of the approved technology stack.

## Acceptance Criteria

### Dependency Management

* The dependency installation command completes successfully from the repository root.
* Installation produces a single `package-lock.json` at the repository root.
* No workspace contains an independent dependency lock file.
* npm recognizes both application workspaces.
* Each application declares its own direct application dependencies.
* No shared package exists without a concrete consumer.

### Frontend

* The frontend application starts successfully using a root command.
* The frontend application can be stopped normally.
* The frontend contains a minimum React interface proving that the application runs.
* The frontend unit-test command executes Vitest successfully.
* The standalone frontend proof test passes.
* The frontend lint command terminates successfully.
* The frontend formatting verification command terminates successfully.
* The frontend type-checking command terminates successfully.
* The frontend production build command terminates successfully.
* No frontend validation command runs in watch mode.

### Backend

* The backend application starts successfully using a root command.
* The backend application can be stopped normally.
* The backend contains a minimum Node.js entry point proving that the application runs.
* The backend unit-test command executes Jest successfully.
* The standalone backend proof test passes.
* The backend lint command terminates successfully.
* The backend formatting verification command terminates successfully.
* The backend type-checking command terminates successfully.
* The backend production build command terminates successfully.
* No backend validation command runs in watch mode.

### Documentation and Agent Workflow

* Every confirmed command is documented.
* The `Validation` section of `AGENTS.md` contains the verified commands and their purposes.
* No validation command documented in `AGENTS.md` runs in watch mode.
* The README contains the minimum instructions required to install dependencies.
* The README explains the purpose of `apps/` and `packages/`.
* The README documents how to run the frontend.
* The README documents how to run the backend.
* The README documents how to test, lint, format-check, type-check, and build each application.
* Existing README content is preserved.
* Existing agent workflow files remain valid and accessible through their documented paths.
* No functional product feature is implemented.
* No communication between frontend and backend is implemented.

## In Scope

* Initial monorepo structure.
* npm workspace configuration.
* Frontend workspace setup.
* Backend workspace setup.
* Dependency management.
* Local frontend development setup.
* Local backend development setup.
* Frontend unit-test tooling using Vitest.
* Backend unit-test tooling using Jest.
* One standalone unit-test proof for each application.
* Shared static validation tooling when appropriate.
* ESLint configuration.
* Prettier configuration.
* TypeScript configuration.
* Frontend production build tooling.
* Backend production build tooling.
* Minimum executable frontend entry point.
* Minimum executable backend entry point.
* Minimum setup documentation.
* Root commands for each workspace.
* Confirmed validation commands in `AGENTS.md`.

## Out of Scope

* Product features.
* Business rules.
* Communication between frontend and backend.
* Shared application packages without a concrete consumer.
* Database configuration.
* Authentication or authorization.
* External-service integrations.
* Deployment infrastructure.
* Continuous integration pipelines.
* Monitoring or observability infrastructure.
* Integration tests.
* End-to-end tests.
* Premature architectural abstractions.
* Tests for product behavior that does not exist yet.

## Constraints

* Prefer the smallest setup that satisfies the acceptance criteria.
* Do not introduce dependencies without a setup requirement.
* Do not introduce abstractions intended for hypothetical future features.
* Do not select undefined technologies without explicit approval.
* Do not implement application or test code before the plan is approved.
* Do not modify the established agent workflow except for replacing the temporary `Validation` section with verified commands.
* Do not add a task orchestrator.
* Do not create placeholder shared packages.
* Do not create communication between the applications.
* Do not add product behavior beyond the minimum executable entry points.
* Do not create integration or end-to-end tests.
* Do not create validation commands that depend on watch mode.

## Open Questions

List unresolved technical decisions here before asking Codex to plan the task.

If no open questions remain, use:

* None.
