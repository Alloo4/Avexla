# Avexla Website

Avexla is a static, responsive website for a healthcare technology advisory company. The site presents Avexla's healthcare IT services, call center modernization offering, company story, and contact information.

The project uses plain HTML, CSS, and vanilla JavaScript. There are no build tools or package installs required.

## Pages

- `index.html` - Homepage with hero, four service pillars, reasons to choose Avexla, solution overview, framework, testimonials, and contact form.
- `solutions.html` - Detailed healthcare technology solution pages with equal two-column cards for "What we deliver" and "Impact."
- `callcenter.html` - Call center modernization content, solution cards, expected outcomes, and Avexla differentiators.
- `about.html` - Company story, mission, vision, values, "Why We're Different," and commitment section.
- `contact.html` - Contact form page.

## Current Updates

Recent design and content updates include:

- Added the new Avexla header logo at `assets/avexla-logo.png`.
- Updated the header logo across all pages while keeping the existing footer logo unchanged.
- Improved whole-site responsiveness for desktop, tablet, and mobile.
- Normalized the header structure, theme toggle, hamburger menu, and mobile navigation across all pages.
- Updated the Solutions page to use equal-width, balanced cards matching the requested layout.
- Aligned the About page "Why We're Different" section into clean, readable cards.
- Replaced outdated Call Center text with Avexla-specific content.
- Cleaned broken text encoding so punctuation and healthcare terms display properly.

## Key Files

```text
.
|-- index.html
|-- about.html
|-- solutions.html
|-- callcenter.html
|-- contact.html
|-- style.css
|-- avexla.js
`-- assets/
    |-- avexla-logo.png
    |-- hero-bg.jpg
    |-- shield.svg
    `-- OneDrive_1_29-12-2025/
```

## How To Open The Site

Because this is a static website, you can open any HTML file directly in a browser.

Recommended for VS Code:

1. Open this folder in VS Code:

```text
C:\Users\Convenience\Documents\Codex\2026-05-20\alloo4-avexla-git-https-github-com
```

2. Open `index.html`.
3. Use the VS Code Live Server extension if available, or open the file directly in your browser.

## How The Theme Works

The light/dark mode is controlled by `avexla.js`.

The script:

- Reads the saved theme from `localStorage`.
- Applies the theme using the `data-theme` attribute on the `<body>`.
- Toggles between light and dark mode when the theme button is clicked.
- Closes the mobile menu when links are selected.

Theme colors are managed with CSS variables in `style.css`.

## Responsive Design Notes

The site is designed around these viewport groups:

- Desktop: `1025px` and wider.
- Tablet: `641px` to `1024px`.
- Mobile: `640px` and below.

Responsive behavior includes:

- Header navigation collapses into a hamburger menu on smaller screens.
- Cards move from multi-column layouts to single-column layouts on mobile.
- Forms and contact details stack cleanly on narrow screens.
- Footer columns collapse without hiding important links.
- The Solutions page keeps equal cards on wider screens and stacks them on mobile.

## Editing Guide

Use these files for common changes:

- Update site text: edit the matching `.html` page.
- Update global spacing, colors, cards, and responsive behavior: edit `style.css`.
- Update theme toggle or mobile menu behavior: edit `avexla.js`.
- Replace the header logo: replace `assets/avexla-logo.png`.
- Replace footer logos: update the footer image references in each HTML page.

## No Build Step

This project does not require npm, bundlers, or compilation.

After editing, refresh the browser to see changes.
