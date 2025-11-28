import os,re
pattern = re.compile(r"['\"](/[^'\"]+\.(?:png|jpg|jpeg|webp))['\"]")
paths = set()
for root, _, files in os.walk('src'):
    for name in files:
        if not name.endswith(('.ts','.tsx','.js','.jsx','.json')):
            continue
        full = os.path.join(root, name)
        with open(full, encoding='utf-8', errors='ignore') as f:
            text = f.read()
        for match in pattern.findall(text):
            paths.add(match)
for path in sorted(paths):
    print(path)
