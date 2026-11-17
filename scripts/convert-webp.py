from PIL import Image
import os
import glob

def convert_images_to_webp():
    png_files = glob.glob('public/images/projects/*.png')
    print(f"Encontrados {len(png_files)} archivos PNG para optimizar a WebP.")

    total_png = 0
    total_webp = 0

    for png_path in png_files:
        png_size = os.path.getsize(png_path)
        total_png += png_size

        webp_path = os.path.splitext(png_path)[0] + '.webp'
        im = Image.open(png_path)
        im.save(webp_path, 'WEBP', quality=85, method=6)
        
        webp_size = os.path.getsize(webp_path)
        total_webp += webp_size

        reduction = (1 - webp_size / png_size) * 100
        print(f"✓ {os.path.basename(png_path)}: {png_size // 1024} KB -> {webp_size // 1024} KB (-{reduction:.1f}%)")

    total_reduction = (1 - total_webp / total_png) * 100
    print(f"\nResumen Total:")
    print(f"Total PNG: {total_png // 1024} KB")
    print(f"Total WebP: {total_webp // 1024} KB")
    print(f"Ahorro total de transferencia: -{total_reduction:.1f}%")

if __name__ == '__main__':
    convert_images_to_webp()