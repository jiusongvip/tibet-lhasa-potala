## Schema & Structured Data Findings

**Score: 80/100 (Weight: 10%)**

### What Works Well

- **TouristAttraction** schema on homepage with address, geo coordinates, opening hours, and tourist type classification
- **BreadcrumbList** schema on every page with correct positioning
- **FAQPage** schema present on 8 of 11 pages (homepage, visit, permits, photography, travel-tips, lhasa-food, hotels-potala-view, lhasa-transport)
- **Article** schema on all 10 content pages with `datePublished` and `dateModified`
- **HowTo** schema on the Visit page with 8 well-described steps
- All JSON-LD is cleanly structured with no syntax errors detected
- Reusable `StructuredData.astro` component means consistent schema implementation

### Issues Found

| Severity | Finding |
|----------|---------|
| High | **No Organization schema** — A site claiming to be "the most complete English-language guide" should have Organization schema establishing the publisher entity. This connects all Article schemas to a verified publisher. |
| Medium | **No Review schema on testimonials** — The 3 visitor testimonials on the homepage are perfect candidates for Review schema (with `reviewRating`, `author.name`, and `datePublished`). This could generate review stars in SERPs, a significant CTR boost. |
| Medium | **No ImageObject schema** — Gallery images and the hero image lack structured data. Adding ImageObject for key visuals (especially the hero image and OG image) improves eligibility for image search and rich results. |
| Low | **Article schema missing `author` and `publisher`** — All Article blocks include headline, description, URL, and dates but lack `author` (Person) and `publisher` (Organization) references. These are recommended by Google for news/article rich results. |
| Info | **Missing pages from FAQ schema** — 3 pages (history, best-time, lhasa-attractions) do not have FAQPage schema despite containing FAQ sections in the rendered HTML. Adding FAQPage schema would improve their SERP appearance. |

### Schema Coverage by Page

| Page | TouristAttraction | Article | FAQPage | HowTo | BreadcrumbList |
|------|:---:|:---:|:---:|:---:|:---:|
| Home | ✅ | — | ✅ | — | ✅ |
| /visit | — | ✅ | ✅ | ✅ | ✅ |
| /permits | — | ✅ | ✅ | — | ✅ |
| /history | — | ✅ | ❌ | — | ✅ |
| /photography | — | ✅ | ✅ | — | ✅ |
| /best-time | — | ✅ | ❌ | — | ✅ |
| /lhasa-attractions | — | ✅ | ❌ | — | ✅ |
| /lhasa-food | — | ✅ | ✅ | — | ✅ |
| /hotels-potala-view | — | ✅ | ✅ | — | ✅ |
| /lhasa-transport | — | ✅ | ✅ | — | ✅ |
| /travel-tips | — | ✅ | ✅ | — | ✅ |

### Recommendations

1. Add Organization schema — include name ("Potala Guide"), URL, logo (use favicon or create one), and sameAs links if you have social profiles.
2. Add Review schema to the 3 homepage testimonials — this is the highest-impact schema addition.
3. Add FAQPage schema to `/history`, `/best-time`, and `/lhasa-attractions`.
4. Add `author` property to Article schema once you establish bylines.
5. Consider adding `image` property (ImageObject) to Article schema for rich result eligibility.
