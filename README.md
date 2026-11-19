# SaaS Landing — an AI design skill for coding agents

Generate a complete app / SaaS marketing landing website with a blue–teal gradient hero, phone mockups, feature steps, pricing, a testimonials carousel, a blog, and local inquiry drafts — using the bundled SoftLand starter.

This is a [Skillux](https://skillux.dev) design skill for AI coding agents such as Claude Code, Cursor, and Codex. It is free on Skillux: [skillux.dev/skills/saas-landing](https://skillux.dev/skills/saas-landing).

## What it does

SoftLand is a self-contained, multi-page static starter (Bootstrap 5, AOS scroll reveals, Swiper testimonials, local Roboto/Poppins fonts and illustrations), so generation does not depend on an external template marketplace, a CDN, or another skill.

- Home, Features, Pricing, Blog, Blog article, and Contact pages
- Full-bleed blue–teal gradient hero with wave divider and overlapping phone mockups
- Numbered onboarding steps, feature bands, pricing cards, and review slides
- Contact form that saves **unsent local drafts only** — nothing is posted or mailed
- Brand swap via the generator while preserving the composition
- Motion modes: `full` (default), `auto`, or `off`

## Who it's for

- App and SaaS founders who need a polished multi-page marketing site
- Teams packaging feature, pricing, blog, and lead capture without a build step
- Agencies that want fully local assets and honest "inquiry draft" behavior

## Install

```bash
npx skills add https://github.com/skillux-hub/saas-landing --skill saas-landing
```

Or clone this repository into your agent's skills folder, keeping the directory structure intact.

## Use

Ask your agent for a SaaS or app landing site, for example:

```text
Use $saas-landing to create a SaaS landing website with phone mockups, pricing, and inquiry drafts.
```

Generate a site directly with the bundled script:

```bash
python scripts/create_site.py /path/to/output --brand "Your Brand" --motion full
```

Then open the generated `index.html` in a browser or serve the folder with any static server.

## What's included

| Path | Contents |
|---|---|
| `SKILL.md` | The skill definition your agent follows (generate / adapt / verify workflow) |
| `scripts/create_site.py` | Generator that copies the starter to a new directory and applies brand + motion settings |
| `references/design-spec.md` | Composition and layout contracts |
| `references/effects.md` | Interaction and motion behavior to preserve |
| `references/site-config.json` | Brand token configuration used by the generator |
| `tokens.css` | Locked palette tokens |
| `assets/starter/` | The complete multi-page starter site (HTML, CSS, JS, fonts, illustrations) |

> Note: this repository contains the skill definition, generator, references, and starter source. Binary media and font files are distributed with the free pack download on Skillux.

## Adapting it

Read `references/design-spec.md` before changing composition and `references/effects.md` before changing interactions. Pricing, testimonials, and app-store CTAs in the starter are demo copy — replace them with real product facts. Keep UI labels in English unless another language is requested.

## More

- Product page (free): https://skillux.dev/skills/saas-landing
- Topic: AI design skills for landing pages — https://skillux.dev/ai-design-skills-for-landing-pages
- More AI design skills for Claude Code, Cursor & Codex: https://skillux.dev
