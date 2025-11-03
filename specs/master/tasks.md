# Tasks: Team Portfolio

**Input**: Design documents from `specs/master/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Stack Note (per Constitution)**: For web application projects the constitution
requires explicit setup tasks for the chosen stack. Typical required items for
Next.js + TypeScript + Tailwind projects include:

- Initialize Next.js app and App Router configuration
- Configure TypeScript (strict mode) and project `tsconfig.json`
- Install and configure Tailwind CSS and design token wrappers
- Configure ESLint (with `eslint-config-next`) and formatting hooks
- Add CI tasks that run lint, build, and tests

Include concrete setup tasks above as part of Phase 1: Setup when the project
is a web application. If your feature does not target the web, document the
reasoned exception in the plan.

**Tests**: Tests are excluded per user request.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Configure TypeScript strict mode in tsconfig.json
- [X] T002 Install and configure Tailwind CSS v4 with shadcn/ui components themed to follow Material 3 design
- [X] T003 Configure ESLint with eslint-config-next in eslint.config.mjs
- [X] T004 Setup GitHub Actions CI pipeline for lint, typecheck, build, and tests in .github/workflows/ci.yml

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 [P] Create TypeScript interfaces for entities in app/lib/types.ts
- [X] T006 [P] Setup environment configuration handling in app/lib/env.ts
- [X] T007 [P] Implement rate limiting utility in app/lib/rate-limit.ts
- [X] T008 [P] Setup email delivery service using Resend in app/lib/email.ts
- [X] T009 [P] Configure Cloudflare Turnstile integration in app/lib/turnstile.ts
- [X] T010 Install and configure shadcn/ui base components (Button, Card, Form, Input) themed for Material 3 in app/components/ui/

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Send an inquiry via contact form (Priority: P1) 🎯 MVP

**Goal**: Enable visitors to submit contact inquiries with validation, consent, and anti-spam protection

**Independent Test**: A user can navigate to contact page, fill and submit the form with valid data, see success confirmation, and verify email delivery (or console log in dev)

### Implementation for User Story 1

- [X] T011 [P] [US1] Create InquiryMessage interface validation schema in app/lib/validation.ts
- [X] T012 [US1] Implement contact server action in app/contact/action.ts
- [X] T013 [US1] Create ContactForm component in app/components/forms/ContactForm.tsx
- [X] T014 [US1] Create contact page in app/contact/page.tsx
- [X] T015 [US1] Add contact link to navigation in app/layout.tsx

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Explore services offered (Priority: P2)

**Goal**: Display services overview with AI assistants and AI integration details

**Independent Test**: Services are visible on homepage with descriptions and CTAs; each service detail is accessible

### Implementation for User Story 2

- [X] T016 [P] [US2] Create services data in app/lib/data/services.ts
- [X] T017 [US2] Create ServicesSection component in app/components/sections/ServicesSection.tsx
- [X] T018 [US2] Update homepage to include services section in app/page.tsx
- [X] T019 [US2] Create individual service detail pages in app/services/[id]/page.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Review previous work (case studies) (Priority: P3)

**Goal**: Showcase case studies with problem, approach, outcome summaries

**Independent Test**: At least three case studies are displayed with consistent structure; each opens detail view

### Implementation for User Story 3

- [X] T020 [P] [US3] Create case studies data in app/lib/data/case-studies.ts
- [X] T021 [US3] Create PortfolioSection component in app/components/sections/PortfolioSection.tsx
- [X] T022 [US3] Create portfolio page in app/portfolio/page.tsx
- [X] T023 [US3] Create case study detail pages in app/portfolio/[id]/page.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 4 - Understand how the team works (Priority: P3)

**Goal**: Explain the team's process with step-by-step overview

**Independent Test**: Process section shows 3-6 steps with outcomes; CTA routes to contact

### Implementation for User Story 4

- [X] T024 [P] [US4] Create process steps data in app/lib/data/process.ts
- [X] T025 [US4] Create ProcessSection component in app/components/sections/ProcessSection.tsx
- [X] T026 [US4] Update homepage to include process section in app/page.tsx
- [X] T027 [US4] Create dedicated process page in app/process/page.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T028 [P] Add accessibility features (labels, focus, contrast) across components
- [ ] T029 [P] Optimize images with Next.js Image in public/ and configure next.config.ts
- [ ] T030 Implement responsive design with Tailwind breakpoints
- [ ] T031 Add error boundaries and logging
- [X] T032 Update README.md with deployment and environment setup
- [ ] T033 Run quickstart.md validation and update if needed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Data/models before components
- Components before pages
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Data and components within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch foundational infrastructure together:
Task: "Create TypeScript interfaces for entities in app/lib/types.ts"
Task: "Setup environment configuration handling in app/lib/env.ts"
Task: "Implement rate limiting utility in app/lib/rate-limit.ts"
Task: "Setup email delivery service using Resend in app/lib/email.ts"
Task: "Configure Cloudflare Turnstile integration in app/lib/turnstile.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3 + User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence</content>
<parameter name="filePath">c:\Users\lemon\nuru\specs\master\tasks.md