## Performance Findings

**Score: 60/100 (Weight: 10%)**

**Note**: Lab measurements only — no live server available for Lighthouse/PageSpeed Insights. Scores are estimated based on static asset analysis. Field data (CrUX) unavailable without deployment.

### What Works Well

- All images served as WebP — good compression format choice
- Lazy loading (`loading="lazy"`) applied to gallery and content images
- Eager loading on the hero image (above-the-fold LCP candidate)
- Minimal CSS: 25KB + 9KB = 34KB total (well under the 50KB critical CSS budget)
- No heavy JavaScript frameworks — only vanilla JS for menu toggle and gallery scroll (estimated <2KB)
- No external font files — using system font stack or minimal custom fonts
- No render-blocking third-party scripts

### Issues Found

| Severity | Finding |
|----------|---------|
| Critical | **Hero image is 219KB** — For a 90dvh hero section, this image should be ~80–120KB. At 219KB, it is likely the LCP bottleneck, especially on mobile connections. |
| High | **Gallery images total ~1.25MB on homepage** — Six images at 165–275KB each. Even with lazy loading, the combined payload is excessive for first-time visitors. |
| High | **No responsive images** — No `srcset` or `<picture>` elements. Mobile visitors download the same full-size images as desktop. A mobile user on 4G could wait 8–12 seconds for all images. |
| Medium | **No image dimension attributes on gallery images** — Gallery `<img>` tags lack `width` and `height`, causing layout shifts as images load. Only the "Why Potala" card images have explicit dimensions. |
| Medium | **OG image is 179KB** — Social preview images should be under 120KB. A smaller, sharper OG image would load faster on social platforms. |
| Low | **No `<link rel="preload">` for hero image** — Preloading the hero image would reduce LCP by 200–400ms. |
| Low | **No `fetchpriority="high"` on hero image** — Adding this attribute tells the browser to prioritize the LCP image. |

### Estimated Performance Metrics (Static Analysis)

| Metric | Estimate | Target | Status |
|--------|----------|--------|--------|
| LCP (desktop) | 2.5–3.5s | <2.5s | ⚠️ Borderline |
| LCP (mobile) | 4.0–6.0s | <2.5s | 🔴 Poor |
| CLS | 0.05–0.15 | <0.1 | ⚠️ Borderline (gallery images lack dimensions) |
| Total page weight (homepage) | ~1.8MB | <1MB | 🔴 High |
| CSS size | 34KB | — | ✅ Good |
| JS size | ~2KB | — | ✅ Good |

### Recommendations

1. **Create responsive image variants**: Generate 400w, 800w, 1200w versions of hero and gallery images. Use `<img srcset>` with `sizes` attribute.
2. **Compress hero image to ~100KB**: Reduce quality to 75-80% — the loss will be imperceptible behind the gradient overlay.
3. **Set explicit width/height on gallery images** to prevent CLS.
4. **Add `fetchpriority="high"` and `<link rel="preload">` for the hero image**.
5. **Resize OG image to 1200×630px** at ~80KB — the current 179KB is excessive for social cards.
6. **Consider a blur-up placeholder** or low-quality image placeholder (LQIP) for gallery images.
