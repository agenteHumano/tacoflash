# Icons and Manifest

He añadido SVG-based app icons and a web manifest for TacoFlash. These files are intended to be used for web apps and progressive web app configuration.

Files added:

- manifest.webmanifest — Web App manifest referencing the SVG icons.
- icon-192.svg — 192x192 SVG icon (for homescreen / apple-touch-icon placeholder).
- icon-512.svg — 512x512 SVG icon.
- favicon.svg — simple SVG favicon (used as main favicon in index.html).

Notes and next steps:

- Many browsers and PWA installers prefer PNG icons. If you want PNG versions (192x192 and 512x512) and a favicon.ico, I can generate them and add them to the repo. To create them locally you can run (requires ImageMagick):

  convert logo.svg -resize 192x192 icon-192.png
  convert logo.svg -resize 512x512 icon-512.png
  convert icon-32.png favicon.ico

- If you prefer, I can generate PNG/ICO files and commit them. Confírmame y lo hago.
