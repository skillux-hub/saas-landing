---
name: saas-landing
description: "Generate an app / SaaS marketing landing website with blue–teal gradient hero, phone mockups, feature steps, pricing, testimonials carousel, blog, and local inquiry drafts using the bundled SoftLand starter. Use when the user wants a SaaS, mobile app, or software product landing site (not fitness studios, e-commerce shops, dashboards, or agency portfolios)."
---

# SoftLand SaaS Landing Website

## About

SoftLand is a self-contained website-generation skill for English app and SaaS marketing landing sites. It ships a multi-page static starter—Bootstrap 5, AOS scroll reveals, Swiper testimonials, Roboto/Poppins, Bootstrap Icons, Boxicons, phone mockups, and undraw-style illustrations—so generation does not depend on an external template marketplace, CDN, PHP mail scripts, or another skill.

The look pairs a full-bleed blue–teal gradient hero and white wave divider with overlapping phone mockups, circular feature icons, numbered onboarding steps, dual feature bands, star-rated review slides, pricing cards, blog grid, and a contact form that saves unsent local drafts only.

## What you can do

- Generate a ready-to-open app / SaaS landing website from the bundled multi-page starter
- Present Home, Features, Pricing, Blog, Blog article, and Contact pages
- Keep AOS entrance motion, Swiper testimonial autoplay, sticky header scroll state, mobile nav, and back-to-top
- Capture contact inquiries as unsent local draft downloads (nothing is posted remotely)
- Swap the SoftLand brand name while preserving the blue–teal SaaS composition
- Choose full / auto / off motion via the generator (default full; no on-page Motion selector)

## Who it's for

- App and SaaS founders who need a polished multi-page marketing site
- Teams packaging feature, pricing, blog, and lead capture without a build step
- Agencies that want fully local assets and honest “inquiry draft” behavior—not live mail delivery or app-store APIs

## How to use it

Install the pack into your agent skills folder, then start a new Agent session. Invoke by naming the skill or describing a SaaS landing scenario, for example:

- `/saas-landing` help me generate a SaaS landing website
- Use `saas-landing` to build an app marketing website; brand it SoftLand
- Follow the skill’s default prompt: `Use $saas-landing to create a SaaS landing website with phone mockups, pricing, and inquiry drafts.`

Include the brand name and primary CTA when you can. The agent should follow this skill’s Generate / Adapt steps and use the bundled starter.

## Generate

1. Run the bundled generator (defaults to full motion):

```bash
python scripts/create_site.py /path/to/output --brand "Your Brand"
```

2. Optional motion modes: `--motion full` (default), `--motion auto`, or `--motion off`. URL `?motion=` is also supported on the generated pages.
3. Open `index.html` in a browser (or serve the folder). Related pages copy with the starter.
4. Do not invent a visitor-facing Motion selector. Contact saves local drafts only—nothing is mailed live.

## Adapt

- Read [design-spec.md](references/design-spec.md) for composition and [effects.md](references/effects.md) before changing interactions. Locked palette tokens live in [tokens.css](tokens.css); keep starter theme CSS aligned when recoloring.
- Replace hero/phone imagery, feature copy, pricing tiers, blog posts, and contact details for the real product.
- The generator replaces the brand token configured in [site-config.json](references/site-config.json) on `index.html` (HTML-escaped). Update wordmark text in other pages or logo assets when needed.
- **Sample claims only:** pricing, testimonials, and app-store CTAs in the starter are demo copy. Do **not** invent live user counts, verified reviews, or store listings for real clients—use only facts they provide.
- Keep English UI labels, empty states, and draft messages unless another language is requested.
- Preserve effects documented in `references/effects.md`. Keep the site’s own header/footer; do not add marketplace credits or Motion UI chrome.

## Verify

- `index.html` is the SoftLand SaaS landing homepage (not a template marketplace page)
- No mobanwang / 网站模板 credits in visitor chrome
- Runtime assets resolve locally; no CDN CSS/JS/fonts required
- Motion is active on first load with default generation (`data-motion-mode="full"`)
- Contact stays as local drafts; pricing and reviews are demo-only
- Prices / reviews / store listings for real clients are verified or removed

`saas-landing.png` is the skill product cover, not a site runtime asset.
