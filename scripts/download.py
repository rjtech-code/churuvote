"""Download the reference document collection into the project's public/ folder.

usage: python -I download.py <data.json> <project public dir>
Writes <public>/documents/... , <public>/thumbs/... and a manifest.json of results.
"""
import json, os, sys, time, urllib.request, urllib.parse

BASE = 'https://slmt.mockpoll.com/'
data_path, public = sys.argv[1], sys.argv[2]
d = json.load(open(data_path, encoding='utf-8'))

jobs = []  # (url, dest)
for f in d['files']:
    rel = f['u'][len('files/'):] if f['u'].startswith('files/') else f['u']
    jobs.append((BASE + f['u'], os.path.join(public, 'documents', *rel.split('/'))))
    jobs.append((BASE + f['th'], os.path.join(public, 'thumbs', os.path.basename(f['th']))))
extra = {
    'ro-guide/docs/candidate-zp-ps-forms.pdf': 'documents/ro-guide/candidate-zp-ps-forms.pdf',
    'ro-guide/docs/polling-party-zp-ps-forms.pdf': 'documents/ro-guide/polling-party-zp-ps-forms.pdf',
    'ro-guide/docs/panchayat-forms-2026.pdf': 'documents/ro-guide/panchayat-forms-2026.pdf',
    'notice/panchayati-raj-amendment-act-6-2026.pdf': 'documents/notice/panchayati-raj-amendment-act-6-2026.pdf',
}
for src, dst in extra.items():
    jobs.append((BASE + src, os.path.join(public, *dst.split('/'))))

seen, results = set(), {}
for url, dest in jobs:
    if dest in seen:
        continue
    seen.add(dest)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    key = os.path.relpath(dest, public).replace(os.sep, '/')
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        results[key] = os.path.getsize(dest)
        continue
    for attempt in range(3):
        try:
            req = urllib.request.Request(urllib.parse.quote(url, safe=':/'), headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=120) as r, open(dest + '.part', 'wb') as out:
                while chunk := r.read(1 << 16):
                    out.write(chunk)
            os.replace(dest + '.part', dest)
            results[key] = os.path.getsize(dest)
            break
        except Exception as e:  # noqa: BLE001
            results[key] = f'ERROR {e}'
            time.sleep(2)
    print(key, results[key], flush=True)

json.dump(results, open(os.path.join(os.path.dirname(data_path), 'manifest.json'), 'w'), indent=1)
ok = sum(1 for v in results.values() if isinstance(v, int))
print(f'DONE {ok}/{len(results)} ok')
