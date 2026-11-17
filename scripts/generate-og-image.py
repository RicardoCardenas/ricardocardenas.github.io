from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    width = 1200
    height = 630
    
    # Fondo #09090B
    img = Image.new('RGB', (width, height), color=(9, 9, 11))
    draw = ImageDraw.Draw(img)
    
    # Marco sutil #27272A
    draw.rounded_rectangle([30, 30, width - 30, height - 30], radius=24, outline=(39, 39, 42), width=2)
    
    # Decoración de cuadrícula sutil en la esquina superior derecha
    for x in range(800, 1140, 40):
        for y in range(60, 240, 40):
            draw.point((x, y), fill=(39, 39, 42))

    # Intentar cargar fuente TTF estándar del sistema o usar default
    try:
        font_large = ImageFont.truetype("arial.ttf", 46)
        font_sub = ImageFont.truetype("arial.ttf", 26)
        font_badge = ImageFont.truetype("arial.ttf", 18)
        font_logo = ImageFont.truetype("arialbd.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_badge = ImageFont.load_default()
        font_logo = ImageFont.load_default()

    # Monograma RC
    draw.rounded_rectangle([80, 80, 144, 144], radius=14, fill=(124, 58, 237))
    draw.text((95, 96), "RC", fill=(255, 255, 255), font=font_logo)
    
    # Etiqueta de especialidad superior
    draw.text((164, 94), "RICARDO CARDENAS", fill=(255, 255, 255), font=font_sub)
    draw.text((164, 126), "UPC • SOFTWARE ENGINEERING & ARCHITECTURE", fill=(167, 139, 250), font=font_badge)

    # Título principal
    draw.text((80, 240), "Architecture, Microservices & Data AI", fill=(255, 255, 255), font=font_large)
    
    # Subtítulo descriptivo
    sub_text = "Domain-Driven Design • CQRS • Modular Monoliths • Agentic GraphRAG • Clean Architecture"
    draw.text((80, 315), sub_text, fill=(148, 163, 184), font=font_sub)

    # Línea divisoria elegante
    draw.line([(80, 420), (width - 80, 420)], fill=(39, 39, 42), width=1)

    # Métricas y distintivos verificados inferiores
    draw.rounded_rectangle([80, 460, 280, 520], radius=10, outline=(124, 58, 237), width=1, fill=(24, 24, 27))
    draw.text((100, 480), "UPC Top 10% (Décimo Superior)", fill=(228, 228, 231), font=font_badge)

    draw.rounded_rectangle([300, 460, 530, 520], radius=10, outline=(39, 39, 42), width=1, fill=(24, 24, 27))
    draw.text((320, 480), "8 Casos de Estudio Verificados", fill=(228, 228, 231), font=font_badge)

    draw.rounded_rectangle([550, 460, 780, 520], radius=10, outline=(39, 39, 42), width=1, fill=(24, 24, 27))
    draw.text((570, 480), "Full-Stack • Data • Cloud", fill=(228, 228, 231), font=font_badge)

    os.makedirs('public/images', exist_ok=True)
    out_path = 'public/images/og-image.png'
    img.save(out_path, format='PNG', optimize=True)
    print(f"OG Image generada con éxito en: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == '__main__':
    create_og_image()