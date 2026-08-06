## On-Page SEO Findings

**Score: 85/100 (Weight: 20%)**

### What Works Well

- Title tags are well-crafted across all pages — keyword-rich, descriptive, within optimal length (~55–65 characters)
- Every page has a unique, compelling meta description (150–160 characters)
- Open Graph tags present on every page: `og:title`, `og:description`, `og:type`, `og:image`
- Twitter card set to `summary_large_image` on all pages
- Clean H1 → H2 → H3 heading hierarchy throughout
- Visual breadcrumb navigation on sub-pages with proper `aria-label`
- Strong internal linking: homepage links to all major sections, footer has organized link categories, and content pages cross-link to related pages
- NavCard components on sub-pages link to related content with descriptive anchor text

### Issues Found

| Severity | Finding |
|----------|---------|
| Medium | **Homepage hero image `alt` text contains HTML** — The hero image has `alt="Potala Palace, Lhasa<br/>Tibet's Crown Jewel"` which includes a `<br/>` tag rendered as literal text in the `alt` attribute. Screen readers will read the break tag literally. Use plain text: `"Potala Palace overlooking Lhasa — Tibet's Crown Jewel"`. |
| Medium | **Title tags could better target commercial intent** — E.g., `/travel-tips` title is "Lhasa & Potala Travel Tips 2026 | Altitude, Packing, Safety" (good), but `/hotels-potala-view` is "Hotels with Potala Palace View | Best Places to Stay" — could add "2026" year for freshness signal. |
| Low | **Page headings lack keyword variation** — Multiple pages use similar H2 patterns ("Frequently Asked Questions", "What to Know Before You Go"). Varying these slightly with page-specific keywords would improve topical relevance signals. |
| Low | **No newsletter/email capture** — For a content site targeting travelers planning trips months in advance, an email list would capture leads who are not ready to visit immediately. |
| Info | **Missing `<meta name="robots">` on pages** — All pages rely on the default `index, follow` behavior. This is fine for now, but consider adding explicit `index, follow` for clarity and adding `noindex` to any future utility pages. |

### Page-by-Page Title Tag Analysis

| Page | Title Tag | Length | Assessment |
|------|-----------|--------|------------|
| Home | Potala Palace, Lhasa Tibet \| Complete Visitor Guide 2026 — Tickets, Tips & Travel Info | 92 | Long but info-dense; Google may truncate |
| /visit | How to Visit Potala Palace \| Complete 2026 Guide | 53 | Excellent |
| /permits | Tibet Travel Permits 2026 \| How to Get Your TTP | 50 | Good |
| /history | Potala Palace History \| 1,300 Years on the Red Hill | 55 | Good |
| /photography | Potala Palace Photography Guide \| Best Spots & Tips | 56 | Good |
| /best-time | Best Time to Visit Potala Palace & Lhasa \| 2026 Guide | 57 | Good |
| /lhasa-attractions | Lhasa Attractions \| Temples, Monasteries & Palaces | 54 | Good |
| /lhasa-food | Lhasa Food Guide \| Tibetan Restaurants & Local Dishes | 57 | Good |
| /hotels-potala-view | Hotels with Potala Palace View \| Best Places to Stay | 56 | Add "2026" |
| /lhasa-transport | Getting to Lhasa \| Flights, Train & Local Transport | 55 | Good |
| /travel-tips | Lhasa & Potala Travel Tips 2026 \| Altitude, Packing, Safety | 61 | Good |

### Recommendations

1. Fix the hero image alt text — remove the `<br/>` tag.
2. Add "2026" to the hotels page title for freshness consistency.
3. Add structured "Key Takeaways" or "At a Glance" summary boxes to top of long articles — these perform well in featured snippets.
4. Vary H2 headings across pages to improve topical depth signals.
