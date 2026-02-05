# Project Instructions for Claude

1. First think through the problem, read the codebase for relevant files.
2. Before you make any major changes, check in with me and I will verify the plan.
3. Please every step of the way just give me a high level explanation of what changes you made
4. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
5. Maintain a documentation file that describes how the architecture of the app works inside and out.
6. Never speculate about code you have not opened. If the user references a specific file, you MUST read the file before answering. Make sure to investigate and read relevant files BEFORE answering questions about the codebase. Never make any claims about code before investigating unless you are certain of the correct answer - give grounded and hallucination-free answers.


## Installed Plugins & MCP Servers

### Frontend Design Plugin
- **Install:** `/plugin marketplace add anthropics/claude-code` then `/plugin install frontend-design@claude-code-plugins`
- **Usage:** Automatically used when building web components, pages, or applications
- Creates production-grade frontend interfaces with high design quality

---

## React Architecture Guidelines

Follow these principles to maintain a clean, scalable codebase.

### 1. File Structure: One Component Per File
- Each screen/page gets its own file in `screens/` or `pages/`
- Keep components focused on a single responsibility
- Group related components in feature folders

```
src/
  screens/
    HomeScreen.tsx
    BrowseScreen.tsx
  components/
    shared/
    feature-specific/
```

### 2. Centralize Shared Types
- Define interfaces and types once in `types/` or `types.ts`
- Never duplicate type definitions across files
- If copying a type, move it to the shared location instead

### 3. Avoid Prop Drilling
- If a prop passes through 3+ components unused, refactor
- Create custom hooks for cross-cutting concerns:
  - `useLayout()` - responsive state, isMobile
  - `useAuth()` - user/authentication
  - `useTheme()` - theming
- Use React Context for widely-needed state

### 4. Layout Wrapper Pattern
- Create a `Layout` component that handles:
  - Navigation/sidebar state
  - Mobile menu toggling
  - Common page structure
- Child components should not manage layout mechanics

### 5. Centralize Constants
- Define routes in `routes.ts` as constants
- Centralize API endpoints in config
- Extract magic strings to named constants

```typescript
// routes.ts
export const ROUTES = {
  HOME: '/',
  BROWSE: '/browse',
  SETTINGS: '/settings',
} as const;
```

### 6. Consolidate Mock Data
- Keep mock data in `mocks/` or `__fixtures__/`
- Import rather than duplicate
- Ensures consistent test data

### Quick Checklist
- [ ] No duplicate type definitions
- [ ] No prop drilling through 3+ components
- [ ] Routes and constants centralized
- [ ] Each file has single purpose
- [ ] Mock data not copy-pasted
