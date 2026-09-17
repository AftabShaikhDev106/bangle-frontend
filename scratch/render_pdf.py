import fitz

doc = fitz.open("public/bangle Design.pdf")
print("Total pages:", len(doc))

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(dpi=150)
    out_path = "public/pdf_page_" + str(i + 1) + ".png"
    pix.save(out_path)
    print("Saved " + out_path)
