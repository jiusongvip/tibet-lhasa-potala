## AI Search Readiness Findings

**Score: 72/100 (Weight: 10%)**

### What Works Well

- Extensive FAQ content (10 Q&A on homepage, 4–6 on most sub-pages) — FAQPage schema on 8 of 11 pages makes this content directly ingestible by AI crawlers and eligible for AI Overviews
- Content uses clear, factual statements with specific numbers (prices, altitudes, distances, dates) — exactly the kind of data AI models extract for direct answers
- Well-structured heading hierarchy (H1 → H2 → H3) with descriptive section titles — makes content easy for LLMs to segment and reference
- BreadcrumbList schema on every page helps AI models understand site architecture
- Article schema with `datePublished`/`dateModified` signals content freshness to AI crawlers
- Natural Q&A format in FAQ sections maps directly to AI Overview answer formats

### Issues Found

| Severity | Finding |
|----------|---------|
| High | **No `llms.txt` file** — An `llms.txt` file at the root would give LLM crawlers a structured index of the site's key pages and their descriptions. This is increasingly important as ChatGPT, Perplexity, and Google AI Overviews become primary information sources. |
| Medium | **No `robots.txt` directives for AI-specific crawlers** — Major AI crawlers (GPTBot, Claude-Web, PerplexityBot, Google-Extended) are not explicitly allowed or disallowed. The current blanket `Allow: /` covers them, but explicit rules signal awareness. |
| Medium | **No key facts/summary blocks** — Long articles lack a "Key Facts" or "At a Glance" box at the top. These concise summary blocks are prime candidates for featured snippets and AI Overview extraction. |
| Medium | **FAQ answers could be more structured** — While FAQPage schema is present, the inline FAQ sections use generic `div`/`button` markup rather than semantic `<dl>` or data-attributed structures that help crawlers parse Q&A pairs from the rendered DOM. |
| Low | **No `citation` or `sameAs` links in schema** — Adding `sameAs` (Wikipedia, UNESCO page, official tourism board) to the Organization or TouristAttraction schema would strengthen entity recognition for AI models. |
| Low | **Brand name "Potala Guide" only in footer/schema** — The brand is not prominently featured in a way that builds entity recognition. Consider adding a branded intro paragraph on the homepage. |

### AI Crawler Recommendations

| Crawler | User-Agent Token | Recommendation |
|---------|-----------------|----------------|
| GPTBot | GPTBot | Allow — FAQ content is ideal for ChatGPT |
| Claude-Web | Claude-Web | Allow — well-structured content benefits Claude |
| Google-Extended | Google-Extended | Allow — needed for AI Overviews eligibility |
| PerplexityBot | PerplexityBot | Allow — FAQ format matches Perplexity's style |
| CCBot | CCBot | Allow — Common Crawl data used by many LLMs |

### Recommendations

1. **Create `llms.txt`** at the site root with:
   - A brief site description
   - Links to all 11 main pages with one-line descriptions
   - A note about content freshness and update frequency
2. **Add explicit AI crawler rules** to `robots.txt` — allow all major AI crawlers.
3. **Add "Key Facts" boxes** to the top of long articles (Visit, Permits, Transport, Photography) — 4–6 bullet points of the most important information.
4. **Strengthen entity recognition**: Add `sameAs` links to UNESCO, Wikipedia, and official tourism authority pages in the schema.
5. **Use semantic HTML for FAQ sections** — consider `<dl>` elements or at minimum add `itemprop` attributes for better crawler parsing.
