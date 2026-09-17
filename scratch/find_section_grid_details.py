import pymupdf

doc = pymupdf.open("public/bangle Design.pdf")
page = doc[0]
blocks = page.get_text("blocks")

print("=== ALL TEXT BLOCKS WITH COORDINATES ===")
sections = []
for b in blocks:
    text = b[4].strip()
    if text:
        # print first line of each block and bbox
        first_line = text.split('\n')[0]
        print(f"y0={b[1]:.1f}, x0={b[0]:.1f}, x1={b[2]:.1f}, y1={b[3]:.1f} | {first_line[:60]}")

print("\n=== EXTRACTING DRAWINGS / RECTANGLES FOR CARDS ===")
drawings = page.get_drawings()
print(f"Total vector drawings: {len(drawings)}")

# Find rectangular bounds of images / background cards
rects = []
for d in drawings:
    r = d["rect"]
    if r.width > 50 and r.height > 50:
        rects.append((r.y0, r.x0, r.x1, r.y1, r.width, r.height))

# Sort rects by Y then X
rects.sort()
print(f"Found {len(rects)} substantial card rects")
for r in rects[:40]:
    print(f"Y: {r[0]:.1f}..{r[3]:.1f}, X: {r[1]:.1f}..{r[2]:.1f} (W:{r[4]:.1f}, H:{r[5]:.1f})")
