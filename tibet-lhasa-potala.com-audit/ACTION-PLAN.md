# SEO Action Plan — Potala Guide

**Domain**: tibet-lhasa-potala.com
**Generated**: August 6, 2026
**Based on**: Full audit with 11 pages analyzed

---

## Phase 1: Critical Fixes (Week 1)

### 1.1 Add responsive images with srcset

**Priority**: Critical
**Effort**: 3-4 hours
**Impact**: Performance, Mobile UX, Core Web Vitals

Generate 400w, 800w, and 1200w variants of all 8 images. Use Astro's Image component or a build-time script. Replace flat `<img>` tags with `<img srcset="..." sizes="...">` on hero and gallery images.

### 1.2 Compress all images to reasonable targets

**Priority**: Critical
**Effort**: 30 minutes
**Impact**: LCP, page weight

Run all images through WebP compression at quality 75:
- Hero → 100KB target (from 219KB)
- Gallery images → 100KB target (from 166-275KB)
- OG image → 80KB target (from 179KB)

### 1.3 Add width/height attributes to gallery images

**Priority**: Critical
**Effort**: 15 minutes
**Impact**: CLS (eliminates layout shift from image loading)

Add explicit `width` and `height` attributes to all gallery `<img>` elements to reserve space before images load.

### 1.4 Create About page with author/editor credentials

**Priority**: Critical
**Effort**: 2-3 hours
**Impact**: E-E-A-T, trust signals

Create `/about` page including:
- Who runs Potala Guide (individual or organization)
- Travel experience/credentials in Tibet
- Editorial standards and content review process
- Contact information
- When the site was founded

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

### 2.1 Add Organization schema

**Priority**: High
**Effort**: 15 minutes
**Impact**: Entity recognition, rich results eligibility

Add Organization JSON-LD to the homepage including: name ("Potala Guide"), url, logo, description, and sameAs links if available.

### 2.2 Add Review schema to testimonials

**Priority**: High
**Effort**: 30 minutes
**Impact**: Star ratings in SERPs (CTR boost)

Wrap the 3 homepage testimonials in Review schema with reviewRating (5 stars), author.name, and datePublished.

### 2.3 Add llms.txt file

**Priority**: High
**Effort**: 10 minutes
**Impact**: AI search visibility (ChatGPT, Perplexity, Google AI Overviews)

Create `/llms.txt` with site description and links to all 11 pages with one-line summaries.

### 2.4 Add preload and fetchpriority to hero image

**Priority**: High
**Effort**: 5 minutes
**Impact**: LCP improvement (200-400ms)

Add `<link rel="preload" as="image" href="/images/hero-potala-palace.webp">` to `<head>` and `fetchpriority="high"` to the hero `<img>`.

### 2.5 Add author bylines to articles

**Priority**: High
**Effort**: 30 minutes
**Impact**: E-E-A-T, Article schema enrichment

Add author name (and link to bio/About page) to each content page. Update Article schema to include author property.

### 2.6 Add FAQPage schema to missing pages

**Priority**: High
**Effort**: 20 minutes
**Impact**: Rich results for 3 additional pages

Add FAQPage structured data to `/history`, `/best-time`, and `/lhasa-attractions` — all three have FAQ sections in the rendered HTML.

---

## Phase 3: Content & Authority (Month 2)

### 3.1 Add "Key Facts" summary boxes to long articles

**Priority**: Medium
**Effort**: 1-2 hours
**Impact**: Featured snippets, AI Overview extraction

Add a "Key Facts" or "At a Glance" box (4-6 bullet points) to the top of: Visit Guide, Permits, Transport, Travel Tips.

### 3.2 Add source citations for factual claims

**Priority**: Medium
**Effort**: 1-2 hours
**Impact**: E-E-A-T, credibility

Link key factual claims to sources: UNESCO page for Potala, official tourism board, Wikipedia, academic sources for historical claims.

### 3.3 Add last-reviewed dates to health/altitude content

**Priority**: Medium
**Effort**: 15 minutes
**Impact**: Trust, medical content credibility

Display "Last reviewed: [date]" on sections containing medical advice (Diamox, altitude sickness, acclimatization).

### 3.4 Link testimonials to original sources

**Priority**: Medium
**Effort**: 30 minutes
**Impact**: Trust, verification

If testimonials come from TripAdvisor, Google Maps, or other platforms, add links to the original reviews.

### 3.5 Add AI crawler directives to robots.txt

**Priority**: Medium
**Effort**: 5 minutes
**Impact**: AI crawler clarity

Add explicit rules for GPTBot, Claude-Web, Google-Extended, PerplexityBot (all Allow).

### 3.6 Vary H2 headings across pages

**Priority**: Low
**Effort**: 30 minutes
**Impact**: Topical relevance signals

Replace repeated "Frequently Asked Questions" H2 with page-specific variations (e.g., "Altitude Questions Answered", "Permit Process FAQ").

---

## Phase 4: Monitoring & Iteration (Ongoing)

### 4.1 Deploy and run Lighthouse audit

Deploy the site and run PageSpeed Insights for real CWV measurements (LCP, INP, CLS). Compare against lab estimates in this audit.

### 4.2 Set up Google Search Console

Submit sitemap, monitor indexation, track search performance (clicks, impressions, average position).

### 4.3 Add image sitemap

Generate an image-specific XML sitemap using Astro's build hooks to improve Google Images discovery.

### 4.4 Monitor for AI Overview appearances

Track which queries trigger AI Overviews featuring Potala Guide content. Optimize FAQ answers based on what gets cited.

### 4.5 Consider hreflang tags

If content ever expands to other languages, add hreflang tags. For now, add `hreflang="en"` and `hreflang="x-default"` to signal intentional single-language targeting.

---

## Summary by Priority

| Phase | Items | Total Effort | Timeline |
|-------|-------|-------------|----------|
| Phase 1: Critical | 4 items | ~6 hours | Week 1 |
| Phase 2: High | 6 items | ~2 hours | Weeks 2-3 |
| Phase 3: Medium | 6 items | ~5 hours | Month 2 |
| Phase 4: Ongoing | 5 items | Continuous | Ongoing |
