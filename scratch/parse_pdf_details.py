import pymupdf

doc = pymupdf.open("public/bangle Design.pdf")
print("Total pages:", len(doc))
page = doc[0]
rect = page.rect
print(f"Page width: {rect.width}, height: {rect.height}")

# Extract text with UTF-8 encoding
text = page.get_text("text")
with open("scratch/pdf_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
print("Saved scratch/pdf_text.txt")

# Extract blocks (text with coordinates and line structure)
blocks = page.get_text("blocks")
with open("scratch/pdf_blocks.txt", "w", encoding="utf-8") as f:
    for b in blocks:
        f.write(f"BBox: ({b[0]:.1f}, {b[1]:.1f}, {b[2]:.1f}, {b[3]:.1f}) -> {repr(b[4])}\n")
print("Saved scratch/pdf_blocks.txt")

# Render page in vertical slices so we get crisp clear images without memory error
slice_height = 2000 # points
num_slices = int(rect.height // slice_height) + 1
print(f"Rendering {num_slices} slices...")

for i in range(num_slices):
    y0 = i * slice_height
    y1 = min((i + 1) * slice_height, rect.height)
    clip = pymupdf.Rect(0, y0, rect.width, y1)
    matrix = pymupdf.Matrix(0.5, 0.5) # 50% scale
    pix = page.get_pixmap(matrix=matrix, clip=clip)
    slice_path = f"public/design_slice_{i+1}.png"
    pix.save(slice_path)
    print(f"Saved slice {i+1}: {slice_path} ({pix.width}x{pix.height})")
