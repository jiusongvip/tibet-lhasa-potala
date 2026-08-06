## Image SEO Findings

**Score: 62/100 (Weight: 5%)**

### What Works Well

- All 8 images use WebP format — the best balance of quality and compression available
- Every image has descriptive, keyword-relevant alt text (e.g., "Potala Palace panoramic view from Chakpori Hill")
- Gallery images include visible captions with additional context
- Dedicated OG image for social sharing
- Images are well-chosen and relevant to the content — no decorative filler

### Issues Found

| Severity | Finding |
|----------|---------|
| High | **No responsive image variants** — Zero `srcset` or `<picture>` usage. Mobile users on slow connections (common for travelers in remote areas researching Tibet trips) are forced to download full desktop-size images. |
| Medium | **Image file sizes are consistently large** — 166–275KB per image. For a travel guide site where visitors may be on hotel WiFi or mobile data abroad, every kilobyte matters. Target: 80–120KB for regular images, 40–80KB for gallery thumbs. |
| Medium | **Gallery images missing width/height** — Causing layout shifts as images load (CLS impact). Only the "Why Potala" card images (w=600 h=400) have explicit dimensions. |
| Low | **No image sitemap** — An image-specific XML sitemap would help Google discover and index the gallery images, potentially driving traffic via Google Images. |
| Low | **Hero image alt text contains HTML break tag** — Screen readers will read this as literal text. |

### Image Inventory

| File | Size | Optimized? |
|------|------|------------|
| hero-potala-palace.webp | 219.3 KB | No - target 100KB |
| og-potala-palace.webp | 179.2 KB | No - target 80KB |
| gallery-potala-golden-roofs.webp | 171.1 KB | No - target 100KB |
| gallery-potala-chakpori-hill.webp | 183.9 KB | No - target 100KB |
| gallery-potala-water-reflection.webp | 235.0 KB | No - target 100KB |
| gallery-potala-night.webp | 165.9 KB | No - target 100KB |
| gallery-potala-murals.webp | 274.6 KB | No - largest, needs compression |
| gallery-prayer-flags.webp | 220.2 KB | No - target 100KB |

### Recommendations

1. Generate srcset variants: Create 400w, 800w, 1200w versions of each image. Astro's built-in image optimization can automate this.
2. Compress all images: Hero to 100KB, Gallery to 100KB, OG to 80KB. Use quality: 75 in WebP encoding.
3. Add width/height to gallery images to eliminate CLS.
4. Add decoding="async" to below-fold images for faster initial render.
5. Consider generating an image sitemap using Astro's build hooks.
