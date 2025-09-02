# Content Length Check

This repository includes a simple, CI‑friendly script to verify content length targets for MD/MDX files.

## Targets
- Default minimum: 1,500 words per content page
- Cornerstone hubs: ≥3,000 words (Divorce, Custody, Financial, Special)
- Transactional/utility pages are not checked (they are .tsx templates, not MD/MDX content)

## Where content lives
- Place long‑form copy under `content/` as `*.md`/`*.mdx`.
- Recommended structure:
```
content/
  practice-areas/
    divorce/
    custody/
    financial/
    special/
  services/
    limited-scope/
    full-representation/
  resources/
    blog/
    guides/
  legal/
```

## Configuration
- `content-length.config.json` controls the check:
```
{
  "baseDir": "content",
  "defaults": { "minWords": 1500 },
  "entries": [
    { "dir": "practice-areas/divorce", "minWords": 3000 },
    { "dir": "practice-areas/custody", "minWords": 3000 },
    { "dir": "practice-areas/financial", "minWords": 3000 },
    { "dir": "practice-areas/special", "minWords": 3000 }
  ]
}
```
- You can add more `entries` for sections with different targets.

## Usage
- Local: `npm run check-content`
- CI: Add a job step to run `npm run check-content`. The script exits non‑zero if any file is below its minimum.

## Notes
- If `content/` has no MD/MDX files yet, the script prints a note and exits 0 (so it won’t block early scaffolding). Switch to a strict mode later if needed.
- Word counts are approximate (simple tokenization with code/HTML stripped). It’s a pragmatic guardrail, not an editorial tool.

