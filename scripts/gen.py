"""Generate src/data/documents.generated.ts and src/data/roGuide.generated.ts from the reference site.

usage: python -I gen.py <ref dir> <project dir>

Text is copied verbatim. Removed: personal credits/phone numbers, MockPoll links, the
reference site's own nav/hero chrome and inline styles. Interactive regions are replaced
by widget markers rendered by React components.
"""
import html as htmlmod
import json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")

ref, proj = sys.argv[1], sys.argv[2]
public = os.path.join(proj, 'public')
out_dir = os.path.join(proj, 'src', 'data')
J = lambda v: json.dumps(v, ensure_ascii=False, indent=1)

# ---------------------------------------------------------------- documents
d = json.load(open(os.path.join(ref, 'data.json'), encoding='utf-8'))
manifest = json.load(open(os.path.join(ref, 'manifest.json'), encoding='utf-8'))
ELECTION = {'ps': 'zp-ps', 'panch': 'sarpanch-panch'}

def local(path_under_public):
    v = manifest.get(path_under_public)
    return isinstance(v, int) and v > 0

docs = []
for f in d['files']:
    rel = f['u'][len('files/'):]
    doc_path = 'documents/' + rel
    thumb_path = 'thumbs/' + os.path.basename(f['th'])
    doc = {
        'id': f['id'],
        'number': f['n'] or None,
        'title': f['t'],
        'originalFileName': f['o'],
        'election': ELECTION[f['z']],
        'group': f['g'],
        'documentType': f['c'],
        'section': f['sec'],
        'pages': [ELECTION[p] for p in f['pg']],
        'usefulForBoth': bool(f['b']),
        'pageCount': f['p'],
        'fileSize': f['s'],
        'keywords': f['k'],
        'duplicates': f['dup'],
        'available': local(doc_path),
    }
    if doc['available']:
        doc['fileUrl'] = '/' + doc_path
    if local(thumb_path):
        doc['thumbnailUrl'] = '/' + thumb_path
    if f.get('nw'):
        doc['isNew'] = True
    docs.append({k: v for k, v in doc.items() if v is not None})

groups = [{'key': g['key'], 'election': ELECTION[g['z']], 'label': g['label'], 'sourceFolder': g['orig']} for g in d['groups']]
ts = f'''// AUTO-GENERATED from the reference document inventory. Do not edit by hand;
// regenerate instead. Titles, page counts and sizes are copied from the source.
import type {{ DocGroup, DocItem, DocType, DocSection, HighlightItem }} from './types'

export const ELECTIONS = {J({ELECTION[k]: v['label'] for k, v in d['zips'].items()})} as const

export const GROUPS: DocGroup[] = {J(groups)}

/** Document types used on the homepage library (source "cats"). */
export const DOC_TYPES: DocType[] = {J(d['cats'])}

/** Finer sections used on the per-election pages (source "secs"). */
export const DOC_SECTIONS: DocSection[] = {J(d['secs'])}

/** Filled-in form collections highlighted next to the RO guide. */
export const FEATURED_FORMS: string[] = {J(d['featured'])}

/** Sarpanch-Panch page highlights, with the display titles used by the source. */
export const SARPANCH_HIGHLIGHTS: HighlightItem[] = {J([{'id': s['id'], 'title': s['t']} for s in d['sp']])}

/** Files at or above this size get a "बड़ी फ़ाइल" badge. */
export const BIG_FILE_BYTES = {d['big']}

export const DOCUMENTS: DocItem[] = {J(docs)}
'''
open(os.path.join(out_dir, 'documents.generated.ts'), 'w', encoding='utf-8').write(ts)
print('documents', len(docs), 'available', sum(x['available'] for x in docs))

# ---------------------------------------------------------------- RO guide
body = open(os.path.join(ref, 'ro_body.html'), encoding='utf-8').read()
script = open(os.path.join(ref, 'ro_script0.js'), encoding='utf-8').read()

def js_array(name):
    """Pull a JS array literal (which here is valid JSON once quotes are normalised)."""
    start = script.index(f'{name}=[') + len(name) + 1
    depth, i = 0, start
    while True:
        c = script[i]
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                break
        elif c in '\'"':  # skip string
            q, i = c, i + 1
            while script[i] != q:
                i += 2 if script[i] == '\\' else 1
        i += 1
    lit = script[start:i + 1]
    lit = re.sub(r"'((?:[^'\\]|\\.)*)'", lambda m: json.dumps(m.group(1).replace("\\'", "'"), ensure_ascii=False), lit)
    return json.loads(lit)

S19 = js_array('S19')
CL = js_array('CL')
FAQ = js_array('FAQ')
REFS = js_array('R')

sections = []
for m in re.finditer(r'<section id="([\w-]+)"[^>]*>(.*?)</section>', body, re.S):
    sid, inner = m.group(1), m.group(2)
    head = re.search(r'<div class="sec-head">\s*<h2>(.*?)</h2>(.*?)</div>', inner, re.S)
    title = re.sub(r'\s+', ' ', head.group(1)).strip()
    tags = [htmlmod.unescape(t) for t in re.findall(r'<span class="rule">(.*?)</span>', head.group(2))]
    inner = inner[:head.start()] + inner[head.end():]

    # interactive regions -> markers
    if sid == 's19':
        inner = re.sub(r'<div class="tools">.*?</div>\s*<div class="tw">\s*<table>.*?<tbody id="s19b"></tbody></table></div>', '<!--W:s19-->', inner, flags=re.S)
    if sid == 'checklist':
        inner = re.sub(r'<div class="prog">.*?</button></div>\s*<div id="cl"></div>', '<!--W:checklist-->', inner, flags=re.S)
    if sid == 'faq':
        inner = re.sub(r'<div class="tools">.*?</div>\s*<div id="faq-list"></div>', '<!--W:faq-->', inner, flags=re.S)
    if sid == 'cases':
        inner = re.sub(r'<div class="tw">\s*<table>\s*<thead>\s*<tr><th>प्राथमिकता.*?<tbody id="refs"></tbody></table></div>', '<!--W:refs-->', inner, flags=re.S)
    if sid == 'letters':
        rows = []
        for r in re.finditer(r'<tr data-cat="([^"]+)">(.*?)</tr>', inner, re.S):
            cells = re.findall(r'<td[^>]*>(.*?)</td>', r.group(2), re.S)
            hi = re.search(r'<b>(.*?)</b>', cells[3], re.S).group(1)
            en = re.search(r'<small[^>]*>(.*?)</small>', cells[3], re.S).group(1)
            link = re.search(r'href="([^"]+)"', cells[5])
            row = {'n': int(cells[0]), 'letterNo': cells[1], 'date': cells[2], 'subject': htmlmod.unescape(hi),
                   'subjectEn': htmlmod.unescape(en), 'category': htmlmod.unescape(r.group(1))}
            if link:
                row['url'] = link.group(1)
            rows.append(row)
        LETTER_CATS = [htmlmod.unescape(c) for c in re.findall(r'data-c="([^"]*)"', inner) if c]
        inner = re.sub(r'<div class="jump" id="lchips".*?<tbody id="lbody">.*?</tbody></table></div>', '<!--W:letters-->', inner, flags=re.S)

    # local file links
    inner = inner.replace('href="docs/candidate-zp-ps-forms.pdf"', 'href="/documents/ps/filled-forms/1-zp-ps-for-candidate-2026.pdf"')
    inner = inner.replace('href="docs/polling-party-zp-ps-forms.pdf"', 'href="/documents/ps/filled-forms/2-zp-ps-for-polling-party.pdf"')
    inner = inner.replace('href="docs/panchayat-forms-2026.pdf"', 'href="/documents/panch/main/main-4-2026.pdf"')
    inner = inner.replace('href="/notice/panchayati-raj-amendment-act-6-2026.pdf"', 'href="/documents/notice/panchayati-raj-amendment-act-6-2026.pdf"')
    inner = inner.replace('rel="noopener"', 'rel="noopener noreferrer"')
    # inline styles -> classes
    inner = re.sub(r'<p style="font-size:\.88rem;color:var\(--muted\)">', '<p class="fineprint">', inner)
    inner = re.sub(r'<p style="margin-top:10px">', '<p class="mt">', inner)
    inner = re.sub(r'\sstyle="[^"]*"', '', inner)
    inner = re.sub(r'\s+', ' ', inner).strip()

    assert 'mockpoll' not in inner.lower() and 'मनीष' not in inner and not re.search(r'\d{10}', inner), sid
    parts = []
    for i, chunk in enumerate(re.split(r'<!--W:(\w+)-->', inner)):
        if i % 2:
            parts.append({'widget': chunk})
        elif chunk.strip():
            parts.append({'html': chunk.strip()})
    sections.append({'id': sid, 'title': title, 'tags': tags, 'parts': parts})

# The source's own section navigation labels; sections absent from it get a short label.
nav = dict(re.findall(r'<a href="#([\w-]+)">(.*?)</a>', re.search(r'<nav class="nav" id="nav">(.*?)</nav>', body, re.S).group(1)))
nav.setdefault('map', 'कानूनी प्रावधान')
nav.setdefault('programme', 'कार्यक्रम व RO')
for s in sections:
    s['navLabel'] = nav[s['id']]

footer_note = re.search(r'<footer>.*?</div>\s*<p>(.*?)</p>\s*</footer>', body, re.S).group(1)
footer_note = re.sub(r'\s+', ' ', footer_note).strip()

ts = f'''// AUTO-GENERATED from the RO scrutiny guide source. Do not edit by hand.
// Text is verbatim; personal credits and contact numbers have been removed.
import type {{ GuideSection, S19Row, ChecklistGroup, FaqGroup, RefRow, Letter }} from './types'

export const GUIDE_SECTIONS: GuideSection[] = {J(sections)}

/** [खंड, अयोग्यता, RO जाँच, filter key] */
export const S19_ROWS: S19Row[] = {J(S19)}

export const CHECKLIST: ChecklistGroup[] = {J(CL)}

export const FAQ_GROUPS: FaqGroup[] = {J(FAQ)}

/** RO के लिए 15 सबसे महत्वपूर्ण संदर्भ: [प्राथमिकता, प्रावधान, पृष्ठ] */
export const REFERENCES: RefRow[] = {J(REFS)}

export const LETTER_CATEGORIES: string[] = {J(LETTER_CATS)}

export const LETTERS: Letter[] = {J(rows)}

/** Closing source note from the guide (HTML, contains <i>). */
export const GUIDE_SOURCE_NOTE = {J(footer_note)}
'''
open(os.path.join(out_dir, 'roGuide.generated.ts'), 'w', encoding='utf-8').write(ts)
print('sections', [(s['id'], s['navLabel'], [p.get('widget', 'html') for p in s['parts']]) for s in sections])
print('S19', len(S19), 'CL', sum(len(g[1]) for g in CL), 'FAQ', sum(len(g[1]) for g in FAQ), 'REFS', len(REFS), 'letters', len(rows), LETTER_CATS)
