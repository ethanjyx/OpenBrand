# Contributing to OpenBrand

Thanks for your interest in contributing to OpenBrand! Whether you're fixing a bug, adding a feature, or improving docs — we appreciate it.

## Getting Started

1. **Fork and clone** the repository:

   ```bash
   git clone https://github.com/<your-username>/openbrand.git
   cd openbrand
   ```

2. **Install dependencies** (we use [Bun](https://bun.sh)):

   ```bash
   bun install
   ```

3. **Set up environment variables** — copy `.env.example` or create `.env.local`:

   ```
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
   ```

4. **Start the dev server**:

   ```bash
   bun dev
   ```

## Project Structure

| Directory      | What's in there                              |
| -------------- | -------------------------------------------- |
| `src/`         | Core extraction library (published to npm)   |
| `app/`         | Next.js app routes and API endpoints         |
| `components/`  | React UI components                          |
| `mcp/`         | MCP server for AI assistant integration      |
| `integration_test/` | Integration tests                       |
| `lib/`         | Shared utilities (auth, Supabase clients)    |

## Development Workflow

1. **Create a branch** from `main`:

   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make your changes** — follow the existing code style (TypeScript, Tailwind CSS).

3. **Lint and test**:

   ```bash
   bun lint
   bun test integration_test/
   ```

4. **Open a pull request** against `main`.

## Pull Request Requirements

Every PR must include the following. Our PR template will remind you, but here's what we expect:

### UI Screenshots

If your change affects the UI in any way, include screenshots:

- **Before & after** screenshots for changes to existing UI
- **Screenshots of new UI** for new features or components
- If your change is purely backend/library code with no visual impact, note that in the PR

Visual changes without screenshots will not be merged. This helps reviewers understand the impact of your work at a glance.

### AI Model Disclosure

We believe in transparency about how code is created. If you used AI tools during development, please disclose:

- **Which model(s)** you used (e.g., Claude Opus 4.6, GPT-4, Gemini, Copilot)
- **How you used them** (e.g., code generation, debugging, code review, writing tests)

This isn't about gatekeeping — AI tools are welcome and encouraged! We track this to understand how our codebase evolves and to give proper attribution.

If you didn't use any AI tools, just check the "No AI tools were used" box in the PR template.

## Code Style

- **TypeScript** everywhere — avoid `any` types
- **ESLint** rules are enforced — run `bun lint` before pushing
- Follow existing patterns in the codebase rather than introducing new ones
- Keep changes focused — one feature or fix per PR

## Testing

- Integration tests live in `integration_test/`
- If you're modifying the core extraction logic in `src/`, make sure existing tests still pass
- Adding tests for new functionality is appreciated

## Where to Contribute

- Check [open issues](https://github.com/ethanjyx/openbrand/issues) for things to work on
- Issues labeled `good first issue` are great starting points
- Have an idea? Open an issue first to discuss it before writing code

## Questions?

Open an issue or start a discussion — we're happy to help you get started.
