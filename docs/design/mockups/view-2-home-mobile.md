# Mockup y Especificación de Vista 2: Home Mobile

**Documento:** MOCKUP-VIEW-002  
**Vista:** Página Principal en Dispositivos Móviles ($< 640$px)  
**Ruta:** `/`  
**Estilo:** Minimalista Profesional (B)  

---

## 1. Wireframe Estructural y Flujo Móvil

```text
+------------------------------------------+
| [RC]                    [ES/EN] [☰ Menú] | (Header Fijo con Safe Area)
+------------------------------------------+
|                                          |
|  [● Disponible para prácticas]           |
|                                          |
|  Ricardo Cardenas                        |
|  Ingeniería de Software                  |
|  UPC • 8.º Ciclo • Décimo Superior       |
|                                          |
|  Backend • Arquitectura DDD • Cloud/Data |
|                                          |
|  +------------------------------------+  |
|  | [ Descargar CV (PDF) ↓ ] (48px)    |  | (Botón primario ancho completo)
|  +------------------------------------+  |
|  +------------------------------------+  |
|  | [ Explorar Proyectos (↓) ] (48px)  |  | (Botón secundario contorno)
|  +------------------------------------+  |
|                                          |
|  [ GitHub ]   [ LinkedIn ]   [ Correo ]  | (Iconos táctiles 48x48px)
|                                          |
+------------------------------------------+
| SOBRE MÍ                                 |
| +--------------------------------------+ |
| | Enfoque de Ingeniería                | |
| | Arquitectura DDD, microservicios,    | |
| | APIs REST y persistencia en grafos/  | |
| | relacional. 100% código verificable. | |
| +--------------------------------------+ |
+------------------------------------------+
| TECNOLOGÍAS CLAVE                        |
| [Java/Spring] [C#/.NET] [Python/FastAPI] |
| [TypeScript] [Docker] [PostgreSQL]       |
| [BigQuery] [LangGraph] [Flutter]         |
+------------------------------------------+
| PROYECTOS DESTACADOS                     |
| +--------------------------------------+ |
| | Nexo — Agentic GraphRAG              | |
| | [Software] [Data & AI]               | |
| | Plataforma inteligente para pymes    | |
| | con FastAPI, LangGraph y Neo4j.      | |
| | [ Ver Caso de Estudio -> ] (48px)    | |
| +--------------------------------------+ |
|                                          |
| +--------------------------------------+ |
| | Capital Cruise                       | |
| | [Software]                           | |
| | Simulación crediticia vehicular      | |
| | con Spring Boot 3 y PostgreSQL.      | |
| | [ Ver Caso de Estudio -> ] (48px)    | |
| +--------------------------------------+ |
|                                          |
| +--------------------------------------+ |
| | TaleStar Mobile                      | |
| | [Mobile]                             | |
| | App Flutter con ARCore y 351 tests.  | |
| | [ Ver Caso de Estudio -> ] (48px)    | |
| +--------------------------------------+ |
|                                          |
| [ Ver Todos los Proyectos (8) -> ]       |
+------------------------------------------+
| DESCARGA DE CV                           |
| +--------------------------------------+ |
| | CV Software Engineering              | |
| | [ Descargar PDF ↓ ]                  | |
| +--------------------------------------+ |
| +--------------------------------------+ |
| | CV Data & AI                         | |
| | [ Descargar PDF ↓ ]                  | |
| +--------------------------------------+ |
+------------------------------------------+
| CONTACTO DIRECTO                         |
| Lima, Perú                               |
| [ Copiar Correo: fernandocm... ] (48px)  |
| [ WhatsApp / Tel: +51 933206904 ]        |
+------------------------------------------+
| FOOTER: © 2026 Ricardo Cardenas          |
+------------------------------------------+
```

---

## 2. Drawer / Sheet de Navegación Móvil (`MobileNavSheet`)

Al presionar el botón `[☰ Menú]`, se abre desde la base o lateral un panel interactivo accesible:

```text
+------------------------------------------+
|  Navegación                       [✕]    |
|  --------------------------------------- |
|  • Inicio                                |
|  • Sobre mí                              |
|  • Habilidades y Tecnologías             |
|  • Proyectos Destacados                  |
|  • Catálogo Completo (/projects)         |
|  • Formación Académica                   |
|  • Descargar Currículum                  |
|  • Contacto                              |
|  --------------------------------------- |
|  Preferencia de Tema:                    |
|  [ Claro ☼ ]   [ Oscuro ☾ ]  [ Sistema ⚙ ] |
|                                          |
|  Idioma:                                 |
|  [ Español (ES) ]     [ English (EN) ]   |
|                                          |
|  Safe Area Inset Bottom                  |
+------------------------------------------+
```

### Reglas de Implementación Móvil
1. **Focus Trap:** Al abrir el drawer, el foco queda confinado dentro del panel, cerrándose con la tecla `Escape` o deslizando hacia abajo.
2. **Scroll Lock:** Se bloquea el scroll del `<body>` (`overflow: hidden`) mientras el sheet está abierto para prevenir scroll fantasma.
3. **Área táctil ampliada:** Cada enlace de navegación del menú tiene una altura mínima de 52px con padding vertical generoso.
