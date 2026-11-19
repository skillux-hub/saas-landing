# SoftLand design spec

## Composition

- **Header:** Fixed top bar; transparent over hero, `header-scrolled` blue translucent fill after ~100px scroll; wordmark + nav + mobile toggle
- **Hero:** Full-bleed blue→teal gradient (`hero-bg.jpg` / gradient), white SVG wave divider, left headline + ghost “Get started”, right overlapping phone mockups
- **Features strip:** Four circular gradient icon cards (Explore Team, Whiteboard, Design→Dev, Sign Up)
- **Steps:** Numbered gradient text cards (Create Profile → Enjoy the app)
- **Feature bands:** Alternating undraw SVG + copy with “Download Now”
- **Testimonials:** Centered Swiper slider with stars, quote, avatar
- **CTA:** Full-width blue–teal band with App Store / Play Store buttons
- **Inner pages:** Features, Pricing (card tiers), Blog grid + single post, Contact (details + form)
- **Footer:** About, Navigation, Services, Downloads, copyright

## Typography

- Display / headings: Poppins
- Body: Roboto
- Section headings use gradient text clip (`#3db3c5` → `#274685`)

## Color

See root `tokens.css`. Primary actions use `#2d71a1` and gradients `#1391a5` → `#274685`. CTA band `#274685` → `#3db3c5`. Review stars `#FF8803`.

## Components

- Ghost white outline buttons on hero; solid gradient primary buttons elsewhere
- Pricing cards with `.popular` gradient variant
- Contact form fields (local draft only — see effects.md)
- Back-to-top circular control

## Responsive

- Phone mockups stack/resize under ~991px
- Mobile nav toggles `.navbar-mobile`
- Hero/CTA type scales down under 768px
