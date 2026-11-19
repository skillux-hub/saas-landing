# SoftLand effects

Root carries `data-motion-mode` / `data-motion`. `assets/js/local-site.js` may read `?motion=full|auto|off`. Reduced-motion CSS is scoped to `auto` so `full` is never silently disabled. Generator default: `--motion full`.

## AOS scroll reveals

- **Files:** `assets/vendor/aos/aos.js`, `aos.css`; initialized in `assets/js/main.js`
- **Markup:** `data-aos`, optional `data-aos-delay` / `data-aos-offset` on hero, features, steps, bands, testimonials
- **Config:** duration 1000ms, easing `ease-in-out`, `once: true`, `mirror: false`
- **Off / auto-reduced:** elements forced visible; AOS init skipped when `SOFTLAND_MOTION.enabled` is false

## Testimonials Swiper

- **Files:** `assets/vendor/swiper/swiper-bundle.min.js` + `.css`; `main.js`
- **Selector:** `.testimonials-slider`
- **Behavior:** loop, autoplay 5000ms when motion enabled, bullet pagination
- **Off:** autoplay disabled, speed 0

## Header scroll

- `#header` gains `.header-scrolled` after `window.scrollY > 100` (background + height change)

## Mobile navigation

- `.mobile-nav-toggle` toggles `#navbar.navbar-mobile` and icon `bi-list` / `bi-x`
- Nested dropdowns toggle `.dropdown-active` in mobile mode

## Back to top

- `.back-to-top` shows `.active` after 100px scroll

## Contact (local drafts)

- Form class `.php-email-form` intercepted by `local-site.js`
- Validates name, email, subject, message; downloads `softland-inquiry-draft.txt`
- No PHP / remote POST; note under submit button

## Hover / transitions

- Buttons, nav links, and pricing CTAs use CSS transitions (~0.3–0.5s)
- Icon feature circles use soft drop shadows (static styling, not timed loops)
