import pymupdf

doc = pymupdf.open("public/bangle Design.pdf")
page = doc[0]
blocks = page.get_text("blocks")

with open("scratch/section_details.txt", "w", encoding="utf-8") as f:
    for b in blocks:
        text = b[4].strip()
        f.write(f"y0={b[1]:.1f}, x0={b[0]:.1f}, x1={b[2]:.1f}, y1={b[3]:.1f} | {repr(text)}\n")

print("Saved scratch/section_details.txt")
