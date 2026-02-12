# Purrfect Breeds

## How to run

Make sure to have **Node.js** LTS installed, at least v18. This project uses `pnpm` but `npm` should also work fine.

In your terminal, install required packages with:

```sh
pnpm install
```

Then start the development server with:

```sh
pnpm dev
```

To build for production, run:

```sh
pnpm build
```

## What is included?

A landing page built with Astro based on [this Figma design](https://www.figma.com/design/p0R0GVGAeC6Qqj7dnn0iA3/Petshop-Figma-Template--Public-?node-id=0-1&p=f&t=sgIj1DnkWR9gbrcj-0).

### Features

- Responsive layout in mobile and desktop
- Breed Explorer:
  - Instant search for breeds by name
  - Load more breeds from an external API
- Basic accessibility features:
  - Skip link
  - HTML structure with landmark regions
  - Reduced motion per user preference
  - Keyboard support for navigating testimonials carousel
- Sprite SVG for icons. WebP for images.

### Approximate time spent

6 - 8 hours where the first 2 hours was spent on setting up the project and outlining the page's HTML structure.

I opted for not using any external dependencies or island but only vanilla JavaScript to minimize the script amount sent to client.

### Further development:

- Hambuger menu
- Breed Explorer: Filter by Coat
- Testimonials: More precise calculation when scrolling to currently highlighted item.
- Rework on spacing tokens: They are missing intermediate values like 2.5rem which could be found in the design.
