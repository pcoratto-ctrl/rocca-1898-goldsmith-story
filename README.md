# Rocca 1898 Goldsmith Story

I want to plan a premium showcase website for ROCCA 1898 before writing any code.

Do NOT build anything yet.

This website should become a high-quality portfolio/reference project. I care much more about visual quality, responsiveness, image treatment, typography, motion and overall polish than speed of implementation.

BRAND

ROCCA 1898 is an Italian family goldsmith workshop with a tradition dating back to 1898.

The official logo files are uploaded. Never recreate, redraw, alter or replace the official logo.

Primary brand colour:
Racing Green #004225

Supporting colours:

warm ivory #F7F5EF

soft neutral #ECEAE3

almost black #181818

muted grey #686862

very subtle champagne #B59A67

The visual identity should feel:

Italian

artisanal

timeless

sophisticated

intimate

premium

editorial

understated

It must NOT feel like:

a generic jewellery ecommerce template

a SaaS website

an AI-generated landing page

a trendy startup

an overly decorative luxury site

REFERENCE PRINCIPLES

Take inspiration from the quality and visual discipline of maisons such as Cartier, Tiffany & Co., Buccellati and Bvlgari, but do NOT copy their layouts or branding.

Use these principles:

large high-quality photography

very strong collection storytelling

minimal copy above the fold

confident typography

generous whitespace

restrained navigation

elegant editorial compositions

strong craftsmanship storytelling

subtle, premium interactions

collections treated as brand worlds rather than ecommerce cards

SITE PURPOSE

This is currently a showcase website, NOT ecommerce.

There must be:

no cart

no checkout

no account

no product prices

no contact form

The main conversion goal is direct contact through WhatsApp, telephone or email.

CORE PAGES

/
Home

/collezioni
Collections

/personalizzazioni
Personalisation

/storia
Our Story

/contatti
Contact

COLLECTIONS

Collections are one of the most important elements of the entire site.

The six current collections are:

Classic

Hollow

Plate

Twist

Square

Waves

The architecture should allow each collection to feel visually distinctive and potentially receive its own dedicated page in the future.

Do not rely on low-resolution images for large collection imagery. Design placeholders/structure so high-resolution collection photography can be inserted later without redesigning the page.

DESIGN SYSTEM

Plan:

typography pairing

typography scale

colour tokens

spacing system

content widths

grids

image aspect ratios

button styles

header states

footer

section rhythm

interaction patterns

mobile behaviour

RESPONSIVENESS

The site must not simply shrink from desktop to mobile.

Plan intentionally for:

1440px+ desktop

laptop

tablet

mobile

Use fluid responsive typography and spacing where appropriate rather than abrupt breakpoint-only scaling.

Plan around CSS techniques such as clamp() for major typography and spacing when appropriate.

Images must use intentional aspect ratios and responsive crops rather than arbitrary stretching.

MOTION

Motion should be extremely refined.

Plan subtle effects such as:

soft reveals

gentle image scale on hover

controlled parallax only where it genuinely improves the page

elegant transitions between 300–600ms

subtle header transformation while scrolling

smooth anchor/page interactions

Avoid:

excessive parallax

animated text gimmicks

cursor tricks

bouncing elements

large loading animations

flashy page transitions

Performance is more important than decorative motion.

PHOTOGRAPHY

Photography should be one of the main design elements.

Create a clear photographic system for:

cinematic landscape hero imagery

square/portrait collection photography

workshop/detail photography

wedding/lifestyle storytelling

full-bleed emotional sections

Never upscale a low-resolution image just to fill a layout.

PERFORMANCE

The final experience must feel extremely fluid.

Plan for:

responsive WebP/AVIF assets where possible

lazy loading below the fold

appropriate image sizes

minimal JavaScript

no unnecessary animation libraries

stable layouts with no image jumping

good Core Web Vitals

smooth scrolling without making normal scrolling feel unnatural

ACCESSIBILITY

Plan for:

readable contrast

keyboard navigation

semantic structure

focus states

reduced-motion preference

meaningful alt text

sufficient mobile tap targets

IMPORTANT

Before implementation, produce a detailed project plan covering:

visual direction

full sitemap

homepage section hierarchy

collections page concept

personalisation page concept

story page concept

contact page concept

responsive strategy

image strategy

motion strategy

reusable components

implementation order

risks or missing assets that could lower visual quality

Do not write code yet.

I want to review and refine this plan before moving to Build mode.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rocca-1898-goldsmith-story.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5748960d-4dd3-4e74-a10f-15ef6d6b63e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
