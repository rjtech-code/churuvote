# SLMT / ALMT / RO — चुनाव प्रशिक्षण सामग्री

A frontend-only reference portal for **Rajasthan Panchayati Raj Election 2026** training
material: 87 PDF documents (training PPTs, filled-in forms, checklists, orders, circulars)
and the interactive **RO scrutiny guide** (RO संवीक्षा मार्गदर्शिका), covering everything
from nomination to the final candidate list.

Built with Vite, React 19, TypeScript, Tailwind CSS v4, React Router and Lucide icons.
It has no backend, database or login.

> This is an unofficial training compilation, not the Rajasthan State Election Commission
> website. In case of doubt, the SEC's original order, Act, Rule or Gazette notification
> prevails: https://sec.rajasthan.gov.in/

## Run locally

Requires Node.js 20.19+ (tested on Node 24).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the build at http://localhost:4173
```

Deployment: routing uses `BrowserRouter`, so configure the host's SPA fallback to serve
`index.html` for unknown paths. The PDFs in `public/documents/` (about 195 MB) are copied
into `dist/`. Some free hosts limit total size, so check yours.

## Design

A soft, rounded, light interface:
- **Header:** a sticky horizontal bar with the "S" logo, the name and subtitle on the left, navigation in the centre, and the language and theme toggles on the right. On mobile, a compact menu holds the navigation (and the theme toggle on the smallest screens).
- **Palette:** calm blue (`#3976D2`) and soft teal (`#73B7A5`) accents on `#F7F8FC`, with a coordinated navy dark mode. All colours are CSS variables in `src/index.css`, exposed as Tailwind tokens (`bg-surface`, `text-accent`, `bg-teal-soft`, …).
- **Components:** rounded panels (`.panel`), pill filters (`FilterPills`), a rounded search field, compact rounded document rows with gentle hover, and accordion FAQs.
- **Motion:** transitions only (colour, border and a 2 px lift on homepage panels). Everything respects `prefers-reduced-motion`.
- **Fonts:** Inter plus Noto Sans Devanagari.

## Routes

| Route | Content |
| --- | --- |
| `/` | Compact intro with stat chips, four rounded section panels, "start here" resources, **`#files`** (complete library) |
| `/zp-ps` | ZP-PS election: intro with stats, type chips that jump to each group, start-here panel, library by section |
| `/sarpanch-panch` | Sarpanch-Panch election: intro with stats, the six key materials in a soft teal panel, library by section |
| `/ro-margdarshan` | RO scrutiny guide (lazy-loaded): 16 sections, sticky contents panel on desktop, dropdown on mobile, Section 19 search, 46-point checklist, 100 searchable FAQs, 29 SEC letters, model orders with copy buttons |
| `/zp-ps.html`, `/panch-sarpanch.html`, `/ro-guide` | Redirects from the source site's paths |
| `*` | 404 |

## Language (हिन्दी / English) and theme

- **Language:** the `हिन्दी | English` switch is in the rail or top bar. Hindi is the
  default. The choice is saved in `localStorage` (`chunav-lang`). Switching keeps the
  current route, search text, filters and checklist ticks, and updates `<html lang>`, the
  page title and the meta description.
- **Theme:** a real switch (`role="switch"`), saved as `chunav-theme`. The first visit
  follows the system setting. The inline script in `index.html` applies the saved theme
  and language before first paint.

Translation architecture: no component holds its own Hindi/English text.

| Layer | File |
| --- | --- |
| Interface strings (typed keys, `{placeholder}` support) | `src/i18n/translations.ts` |
| Language state, `t()` | `src/i18n/LanguageProvider.tsx`, `src/i18n/usePageMeta.ts` |
| Theme state | `src/context/ThemeProvider.tsx` |
| Document metadata in English (titles, groups, types, sections) | `src/data/documents.en.ts` |
| Full English RO guide (all sections, tables, Section 19, checklist, 100 FAQs) | `src/data/roGuide.en.ts` |
| Language-aware accessors used by components | `src/lib/documents.ts`, `src/lib/guide.ts` |

Translation rules followed:
- The source data files (`*.generated.ts`) are never modified. English sits beside them.
- Original file names, PDF URLs, page counts, sizes, folder names, letter numbers,
  Rule/Section/Form numbers, case names and Manual page numbers are never translated.
- Titles that are already English in the source are shown unchanged. For translated
  titles, English mode shows the original Hindi title underneath (`lang="hi"`).
- Search covers both the Hindi and the English metadata in either language.
- The PDFs themselves are not translated. English mode labels them, and the footer notes
  that documents are in their original language.
- The English guide is marked as a convenience translation: where it and the Hindi text
  differ, the Hindi text and the original legal documents prevail.
- The SEC letter list carries both a Hindi summary and an English subject line from the
  source. The active language is shown first.

## Where the content comes from

Everything was taken from the reference site's published data on 19 Oct 2026. The source
footer is dated 18-10-2026.

| What | Where in this project |
| --- | --- |
| Document inventory: titles, numbers, groups, page counts, sizes, keywords, duplicates | `src/data/documents.generated.ts` |
| The 87 PDFs (byte-for-byte copies) and the 64 first-page thumbnails | `public/documents/`, `public/thumbs/` |
| RO guide text, tables, Section 19 table, checklist, FAQs, letters, references | `src/data/roGuide.generated.ts` (HTML is verbatim) |
| Amendment Act No. 6 of 2026 plus the SEC letter linked from the 19(l) card | `public/documents/notice/` |
| SEC letter PDFs | Linked directly to `sec.rajasthan.gov.in` (not copied) |

Stats are computed from the data and never hard-coded. Every count was checked against the
reference: 87 files, 1,568 pages, 54 + 40 per page, 100 FAQs, 46 checklist items, 29 letters.

**Removed on purpose:** the individual's photograph, name, designation, phone number and
compilation credit; the names and phone numbers in the "विशेष आभार" list; MockPoll.com
links and logos; and the source's "built with AI" footer line. The generic attribution
"मार्ग दर्शनः- राज्य निर्वाचन आयोग" and the source note about the Manual of Panchayati Raj
Election Law (Rajasthan), 2026 are kept.

### Regenerating the data

`scripts/download.py` fetches the PDFs and thumbnails. `scripts/gen.py` rebuilds both
`*.generated.ts` files from a saved copy of the reference pages. The scripts document
their inputs; edit the generator rather than the generated files.

## Content notes to review

These are carried over from the source as-is. They are not errors introduced here.

- **Section 19(r), educational qualification:** the source itself flags that its own
  table and text disagree. The warning is reproduced verbatim on the page, so check the
  current Gazette text.
- **Section 19(l), more than two children:** the source says this clause was deleted by
  Amendment Act 6 of 2026 (notified 25.03.2026). The linked PDF is the source's copy.
- **Form page numbers** marked `*` are starred in the source and need checking against the printed Manual.
- **Letter no. 15 (7388, 27-08-2026)** has no link in the source and is marked "लिंक उपलब्ध नहीं".
- Some circulars relate to **municipal** elections. The file names say so, as the footer notes.
- The filled-in forms are sample forms prepared by a trainer, not SEC originals. The guide states this.
- **Attribution:** the RO guide is a compilation by an individual trainer, built on the SEC
  Manual. The individual's credit was removed as requested. Before publishing, consider
  getting their permission or adding a non-personal acknowledgement.
