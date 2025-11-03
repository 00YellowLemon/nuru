<!--
Sync Impact Report

Version change: unset → 1.0.0
Modified principles: (added)
	- I. Developer Experience & Simplicity
	- II. Type Safety (TypeScript-first)
	- III. Component-First & Reusability
	- IV. Test-First Quality Gates
	- V. Observability, Performance & Accessibility
Added sections:
	- Technology Constraints
	- Development Workflow
Removed sections: none
Templates requiring updates:
	- .specify/templates/plan-template.md ✅ updated
	- .specify/templates/spec-template.md ✅ updated
	- .specify/templates/tasks-template.md ✅ updated
Follow-up TODOs:
	- TODO(RATIFICATION_DATE): none — ratified on 2025-10-30
	- No bracketed placeholders remain. 
-->

# Nuru Constitution

## Core Principles

### I. Developer Experience & Simplicity
All work MUST prioritize developer experience (DX) and simplicity. Developers are
expected to prefer readable, maintainable code over clever optimizations. Use
small abstractions, clear APIs, and avoid premature generalization. When in
doubt, choose the simpler implementation that satisfies accepted requirements.

Rationale: A small web application benefits most from fast iteration and low
friction; DX choices reduce cycle time and maintenance cost.

### II. Type Safety (TypeScript-first)
The codebase MUST use TypeScript with strict compiler options enabled. Public
APIs, component props, and shared utilities MUST be typed; use `unknown`/safe
guards instead of `any`. Tooling (tsconfig, types, and lint rules) MUST enforce
type quality. Runtime type checks are REQUIRED for parsing external inputs.

Rationale: Type safety prevents common UI/runtime errors and accelerates safe
refactors in a small team.

### III. Component-First & Reusability
UI and logic MUST be organized around small, well-documented React components
and composable utilities. Components MUST be: single-responsibility, testable,
and documented with usage examples. Styling MUST use Tailwind utility classes
with well-defined design tokens or small wrapper components for frequently
shared patterns.

Rationale: A component-first approach scales UI development and enables reuse
across pages while keeping bundle size predictable.

### IV. Test-First Quality Gates
Critical behaviors (P1 user journeys and public utilities) MUST have tests
written before implementation (test-first). The project MUST include unit and
integration tests for core logic and component contracts. All tests MUST run in
CI and MUST fail the build when regressions are detected.

Rationale: Tests protect stability during rapid iteration and provide a safety
net for refactors.

### V. Observability, Performance & Accessibility
The app MUST include basic observability (error reporting and structured logs
for server/runtime errors), adhere to a simple performance budget (e.g., core
page < 1MB gzipped where practical), and follow WCAG AA accessibility
standards for core user flows. Performance and accessibility checks SHOULD be
automated where feasible.

Rationale: Good UX requires fast, accessible pages and measurable signals to
discover regressions.

## Technology Constraints
This project is a small web application and MUST use the following stack and
minimum tooling:

- Framework: Next.js (App Router) for routing, SSR/SSG as appropriate.
- Styling: Tailwind CSS as the primary styling mechanism.
- Language: TypeScript (strict mode enabled) for all application code.
- Linting & Formatting: ESLint (with `eslint-config-next`) and Prettier or
	equivalent formatting enforcement; pre-commit hooks recommended.
- Testing: Vitest or Jest + React Testing Library for unit/component tests; a
	lightweight E2E runner (Playwright) is RECOMMENDED for critical journeys.
- CI: GitHub Actions (or equivalent) for linting, tests, and build checks.

Deviation from these constraints is allowed only with a documented justification
and must pass a constitution compliance review (see Governance).

## Development Workflow
- Branches: feature branches named `feat/<short-desc>` or `fix/<short-desc>`.
- PRs: Require at least one approving review and an automated CI pass (lint,
	tests, build) before merge.
- Commits: Prefer small, focused commits. Use Conventional Commits for changelog
	clarity (optional but recommended).
- Releases & Versioning: Use semantic versioning for public releases. The
	project uses MAJOR.MINOR.PATCH; bump rules are in Governance.
- Pre-commit: Configure hooks to run formatting and lint checks locally.

## Governance
Amendments to this constitution MUST be performed by a documented pull request
that updates `.specify/memory/constitution.md`. Amendment PRs MUST include:

1. The proposed text change and a short rationale.
2. Tests or CI updates affected by the change where applicable.
3. At least one approving review from a project maintainer.

Versioning policy:
- MAJOR: Breaking governance changes (removing or redefining core principles)
	or changes that materially change team obligations.
- MINOR: New principle or materially expanded guidance (e.g., new required
	workflows, mandatory tooling additions).
- PATCH: Clarifications, wording fixes, or non-semantic refinements.

Compliance review:
- Every Phase 0 plan (see `.specify/templates/plan-template.md`) MUST include a
	Constitution Check section that shows how the planned work conforms to the
	principles in this document. Plan owners are responsible for resolving any
	violations or documenting justified exceptions.

**Version**: 1.0.0 | **Ratified**: 2025-10-30 | **Last Amended**: 2025-10-30

