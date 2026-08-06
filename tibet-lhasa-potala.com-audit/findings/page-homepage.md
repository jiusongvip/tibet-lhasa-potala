# Single Page SEO Analysis: Homepage

**Page**: https://tibet-lhasa-potala.com/
**Date**: August 6, 2026
**Framework**: On-Page SEO + Content Quality + Technical + Schema + Images

---

## Page Score Card

```
Overall Score: 83/100

On-Page SEO:     82/100  ████████████████░░
Content Quality:  86/100  █████████████████░
Technical:        82/100  ████████████████░░
Schema:           90/100  ██████████████████
Images:           78/100  ███████████████░░░
```

---

## On-Page SEO: 82/100

### Title Tag
- **Value**: "Potala Palace, Lhasa Tibet | Complete Visitor Guide 2026 — Tickets, Tips & Travel Info"
- **Length**: 92 characters (Google displays ~50-60; expect truncation)
- **Assessment**: Keyword-rich with primary terms at the front. The pipe separator is effective. The `—` (em dash) adds visual structure. Google will likely truncate to "...Tickets, Tips &..." The year "2026" is a freshness signal.
- **Recommendation**: Consider shortening: "Potala Palace Guide 2026 | Tickets, Permits & Visitor Tips (Lhasa, Tibet)" at ~70 chars.

### Meta Description
- **Value**: 155 characters — right at the optimal edge
- **Assessment**: Includes primary keywords naturally. CTA-adjacent ("Plan your visit"). Includes 2026 freshness signal. The phrase "insider tips from local experts" is strong but unverifiable.
- **Status**: Good.

### H1
- **Single H1**: Yes — "Potala Palace, Lhasa / Tibet's Crown Jewel"
- **Assessment**: Includes primary keyword, descriptive, unique. The `<br/>` split creates a visual headline/subhead effect that reads well.
- **Status**: Good.

### Heading Hierarchy
- H2: 9, H3: 8 — proper nesting, no skipped levels
- Descriptive headings throughout: "Not just a palace. A world unto itself", "Everything you are probably wondering"
- **Status**: Good.

### URL
- `/` — clean root URL, no parameters, no file extensions
- **Status**: Good.

---

## Content Quality: 86/100

### Word Count
- 2,050 words — well above the 500-word homepage minimum
- All sections are substantive with specific details

### Readability
- Short paragraphs (2-4 sentences), bullet-free visual flow
- Conversational tone with practical specifics: "CNY 200", "3,700 m", "2,300 visitors"
- FAQ section covers 10 common user questions in clear Q&A format
- **Assessment**: Excellent for the target audience (English-speaking travelers)

### E-E-A-T Signals
- Organization schema present (establishing publisher entity)
- Review schema with 3 visitor testimonials (5-star ratings, named authors, specific dates)
- UNESCO World Heritage references throughout
- "Updated August 2026" badge visible
- **Gap**: No author bylines on the homepage itself (the About page exists but isn't referenced in content)

### Content Freshness
- "Updated August 2026" badge visible in hero area
- 2026 pricing and logistics throughout
- **Status**: Good.

### Keyword Coverage
- Primary keywords naturally distributed: Potala Palace, Lhasa, Tibet, visit, tickets, permits, altitude
- Semantic variations: UNESCO World Heritage, Buddhist, Dalai Lama, photography, travel guide
- No detectable keyword stuffing
- **Status**: Good.

---

## Technical: 82/100

### Canonical
- `https://tibet-lhasa-potala.com/` — self-referencing, correct
- **Status**: Good.

### Meta Robots
- Not explicitly set — defaults to index, follow (acceptable for homepage)
- **Status**: Acceptable.

### Open Graph
- og:title, og:description, og:type (website), og:image — all present
- og:url recently added (this session)
- **Status**: Good.

### Twitter Card
- `summary_large_image` — best option for visual content
- **Status**: Good.

### Hreflang
- Not present — English-only site, no immediate need. Add `x-default` if multilingual expansion planned.
- **Status**: Acceptable.

---

## Schema & Structured Data: 90/100

### Detected Types (JSON-LD)
- TouristAttraction (with PostalAddress, GeoCoordinates)
- BreadcrumbList
- FAQPage (10 Q&A pairs)
- Organization
- Review (3 reviews with Person author + Rating)

### Assessment
This is excellent schema coverage for a tourism site. The TouristAttraction with geo coordinates enables map-based rich results. The FAQPage markup (with genuine user questions, not keyword-stuffed pseudo-questions) is well-suited for AI citation. Organization schema establishes publisher entity. Review schema enables potential star ratings in SERPs.

### Gaps
- Organization schema could benefit from `sameAs` links (social profiles or Wikipedia)
- No `image` property on TouristAttraction schema (recommended for rich results)

### Note on FAQ Rich Results
FAQ rich results were retired by Google in May 2026, but FAQPage markup still aids AI parsing and entity resolution. Keep it.

---

## Images: 78/100

### Image Inventory

| Image | Alt Text | Lazy | Dimensions | Assessment |
|-------|----------|------|------------|------------|
| Hero | Potala Palace, Lhasa, Tibet's Crown Jewel | eager | 1200x800 (added) | Good alt, eager load, dimensions set |
| Why Card 1 | Panoramic view from Chakpori Hill | lazy | 600x400 | Good |
| Why Card 2 | Golden roofs glowing at sunset | lazy | 600x400 | Good |
| Why Card 3 | Ancient Buddhist murals | lazy | 600x400 | Good |
| Gallery 1-6 | Descriptive alt + captions | lazy | 800x533 (added) | Good |

### Issues
- Hero image file size: 219KB — above 200KB warning threshold. Target 100-120KB.
- Gallery images: 166-275KB — all above 100KB target. Combined gallery payload: ~1.25MB.
- No srcset/responsive variants — all devices download the same size.
- OG image: 179KB — should be 80KB for social platforms.

### What Works
- All alt text is descriptive and keyword-relevant
- All WebP format
- Lazy loading on all below-fold images
- Fetchpriority="high" on hero image
- Preload link for hero image
- Dimensions set on all images (eliminates CLS)

---

## Internal & External Linking

### Internal Links: 55
Excellent internal link count. Well above the 3-5 per 1,000 words guideline. Navigation cards, footer links, and in-content links are all descriptive and relevant.

### External Links: 0
This is the page's most significant gap. A travel guide homepage with zero external citations to authoritative sources (UNESCO, Wikipedia, official tourism board) misses an authoritativeness signal. The history sub-page has external citations — the homepage should have at least 1-2 as well.

### Recommendation
Add at minimum one authoritative external link — UNESCO Potala Palace listing or Wikipedia article — in the "UNESCO World Heritage" trust bar section.

---

## Core Web Vitals (Estimated)

| Metric | Estimate | Target | Status |
|--------|----------|--------|--------|
| LCP (desktop) | 2.0-3.0s | <2.5s | Borderline |
| LCP (mobile) | 3.5-5.0s | <2.5s | Needs work |
| CLS | <0.05 | <0.1 | Good (dimensions set) |
| INP | <50ms | <200ms | Good (minimal JS) |

LCP bottleneck: hero image at 219KB. Preload + fetchpriority helps, but the file size is the root cause.

---

## Issues Found (Ordered by Priority)

| Priority | Issue | Fix |
|----------|-------|-----|
| High | Title tag 92 chars — Google will truncate | Shorten to 60-70 chars |
| High | Zero external links on homepage | Add 1-2 authoritative external links |
| Medium | Hero image 219KB — LCP bottleneck | Compress to 100KB at quality 75 |
| Medium | No srcset/responsive images | Generate 400w/800w/1200w variants |
| Low | Organization schema missing sameAs | Add social/Wikipedia links |
| Low | TouristAttraction schema missing image property | Add image Object to schema |

---

## Schema Snippet: ImageObject Addition

The TouristAttraction schema could be enriched with:

```json
"image": {
  "@type": "ImageObject",
  "url": "https://tibet-lhasa-potala.com/images/og-potala-palace.webp",
  "width": 1200,
  "height": 630,
  "caption": "Potala Palace, Lhasa — Tibet's Crown Jewel"
}
```
