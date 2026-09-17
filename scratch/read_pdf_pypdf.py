from pypdf import PdfReader
import os

reader = PdfReader("public/bangle Design.pdf")
print("Num pages:", len(reader.pages))

os.makedirs("public/extracted_pdf_images", exist_ok=True)

img_count = 0
for idx, page in enumerate(reader.pages):
    print(f"--- PAGE {idx+1} ---")
    text = page.extract_text()
    if text:
        print(text[:500])
    
    for count, image_file_object in enumerate(page.images):
        with open(f"public/extracted_pdf_images/page_{idx+1}_img_{count}_{image_file_object.name}", "wb") as fp:
            fp.write(image_file_object.data)
            img_count += 1

print(f"Extracted {img_count} images total.")
