# Potala Guide — Full SEO Audit Report

**Domain**: tibet-lhasa-potala.com
**Business Type**: Travel & Tourism — Niche destination guide (Potala Palace & Lhasa, Tibet)
**Date**: August 6, 2026
**Pages Audited**: 11
**Overall SEO Health Score**: 74/100

---

## Executive Summary

The Potala Guide is a well-built niche travel site with strong content fundamentals. The content quality, on-page SEO, and schema implementation are notably good for a site of this size. The primary weaknesses are image optimization (no responsive variants, large file sizes) and E-E-A-T signals (no author bylines, no About page, no Organization schema). Performance metrics are estimated to be borderline on desktop and poor on mobile due to image payload.

### Top 5 Critical Issues

1. **No responsive images** — Mobile users download full desktop-size images (Performance + Images)
2. **No author bylines or About page** — E-E-A-T gap for YMYL-adjacent travel content (Content)
3. **Hero image is 219KB** — LCP bottleneck, especially on mobile (Performance)
4. **No Organization schema** — Publisher entity not established (Schema)
5. **Gallery images lack width/height** — Causing Cumulative Layout Shift (Performance)

### Top 5 Quick Wins

1. Add `llms.txt` file (5 minutes, improves AI search readiness)
2. Fix hero image alt text (remove `<br/>` tag) (1 minute)
3. Add `<lastmod>` to all sitemap entries (5 minutes)
4. Add `fetchpriority="high"` to hero image (1 minute)
5. Add FAQPage schema to the 3 pages missing it (10 minutes)

---

## Category Scores

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 82/100 | 22% | 18.0 |
| Content Quality | 78/100 | 23% | 17.9 |
| On-Page SEO | 85/100 | 20% | 17.0 |
| Schema / Structured Data | 80/100 | 10% | 8.0 |
| Performance (CWV) | 60/100 | 10% | 6.0 |
| AI Search Readiness | 72/100 | 10% | 7.2 |
| Images | 62/100 | 5% | 3.1 |
| **Overall** | | | **74.3** |

---

## 1. Technical SEO (82/100)

See [findings/technical.md](findings/technical.md) for full details.

**Strengths**: Clean robots.txt, well-structured sitemap, canonical URLs on all pages, semantic HTML, skip-to-content link.

**Key Issues**:
- Inconsistent `<lastmod>` coverage in sitemap (3 of 11 entries)
- No hreflang tags (low priority for single-language site)
- Security headers not verified (deployment-dependent)

---

## 2. Content Quality (78/100)

See [findings/content.md](findings/content.md) for full details.

**Strengths**: Substantive long-form content on every page (1,500-3,000+ words), strong factual basis with specific numbers, excellent internal linking, well-crafted FAQ sections.

**Key Issues**:
- **Critical**: No author bylines or credentials on any page
- **High**: No About page — who operates this guide?
- Medium: Testimonials lack external verification links
- Medium: No "last reviewed" dates on health/altitude advice

---

## 3. On-Page SEO (85/100)

See [findings/on-page.md](findings/on-page.md) for full details.

**Strengths**: Well-crafted title tags (all within optimal length), unique meta descriptions on every page, complete OG + Twitter card tags, clean heading hierarchy, visual breadcrumbs.

**Key Issues**:
- Medium: Hero image alt text contains `<br/>` tag
- Medium: Hotels page title missing "2026" freshness signal
- Low: Repeated H2 patterns across pages

---

## 4. Schema & Structured Data (80/100)

See [findings/schema.md](findings/schema.md) for full details.

**Strengths**: TouristAttraction, BreadcrumbList, FAQPage (8 pages), Article (10 pages), HowTo (1 page) — all cleanly implemented via reusable Astro component.

**Key Issues**:
- **High**: No Organization schema
- Medium: No Review schema on testimonials (missed star-rating opportunity)
- Medium: Article schema missing author/publisher properties
- Low: 3 pages with FAQ content but no FAQPage schema

---

## 5. Performance (60/100)

See [findings/performance.md](findings/performance.md) for full details.

**Strengths**: Minimal CSS (34KB), no JS frameworks, WebP images, lazy loading on gallery.

**Key Issues**:
- **Critical**: Hero image 219KB — estimated LCP bottleneck
- **High**: Gallery images total ~1.25MB on homepage
- **High**: No responsive images (srcset/picture)
- Medium: Gallery images missing width/height (CLS risk)

**Estimated Mobile LCP**: 4.0-6.0s (target <2.5s)
**Estimated Total Page Weight (Homepage)**: ~1.8MB (target <1MB)

---

## 6. Images (62/100)

See [findings/images.md](findings/images.md) for full details.

**Strengths**: All WebP format, descriptive alt text on all images, visible captions.

**Key Issues**:
- **High**: No responsive image variants — single size served to all devices
- Medium: All images 166-275KB — target 80-120KB
- Medium: Gallery images lack explicit dimensions

---

## 7. AI Search Readiness (72/100)

See [findings/ai-search.md](findings/ai-search.md) for full details.

**Strengths**: Extensive FAQ content with FAQPage schema (AI Overview eligible), clear factual statements, well-structured headings.

**Key Issues**:
- **High**: No `llms.txt` file
- Medium: No explicit AI crawler rules in robots.txt
- Medium: No "Key Facts" summary blocks for featured snippets

---

## Score Breakdown

```
Technical SEO:    82/100 (18.0 weighted)
Content Quality:  78/100 (17.9 weighted)
On-Page SEO:      85/100 (17.0 weighted)
Schema:           80/100 ( 8.0 weighted)
Performance:      60/100 ( 6.0 weighted)
AI Readiness:     72/100 ( 7.2 weighted)
Images:           62/100 ( 3.1 weighted)
                   OVERALL: 74/100
```

---

## Methodology

Audit conducted via static build analysis of 11 pages in the `dist/` directory. Performance metrics are lab estimates based on asset sizes and loading patterns — deploy the site and run Lighthouse/PageSpeed Insights for accurate CWV measurements. No Google API credentials were available for Search Console, CrUX, or backlink data enrichment.
