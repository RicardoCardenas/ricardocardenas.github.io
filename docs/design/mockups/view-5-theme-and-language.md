# Mockup y Especificación de Vista 5: Selectores de Tema y Lenguaje

**Documento:** MOCKUP-VIEW-005  
**Vista:** Componentes Transversales de Tema e Internacionalización  
**Estilo:** Minimalista Profesional (B)  

---

## 1. Selector de Tema Visual (`ThemeToggle`)

El selector de tema ofrece control total al usuario, permitiendo sincronización con el sistema operativo o anulación manual persistente:

```text
DESKTOP: Menú Dropdown Accesible (Radix UI DropdownMenu)
+------------------------------------+
| [ ☼ / ☾ Icono Dinámico (Tema) v ]  | (Botón Trigger: 36x36px)
+------------------------------------+
  |
  v
+------------------------------------+
|  Modo Visual                       |
|  --------------------------------- |
|  [ ✓ ] ☼  Claro                    | (Activa clase: html:not(.dark))
|  [   ] ☾  Oscuro                   | (Activa clase: html.dark)
|  [   ] ⚙  Sistema (Automático)     | (Lee: matchMedia prefers-color-scheme)
+------------------------------------+
```

### Comportamiento de Tokens según el Tema Activo

| Elemento de Interfaz | Apariencia en Modo Claro | Apariencia en Modo Oscuro |
|---|---|---|
| **Fondo Global del Body** | `#FFFFFF` | `#09090B` (Zinc 950) |
| **Superficie de Tarjetas** | `#F8FAFC` con borde `#E2E8F0` | `#121215` con borde `#27272A` |
| **Texto Primario** | `#0F172A` (Contraste 15.6:1) | `#F4F4F5` (Contraste 16.8:1) |
| **Color Primario (Acción)**| `#7C3AED` (Violet 600 - Ratio 4.6:1) | `#A78BFA` (Violet 400 - Ratio 8.5:1) |
| **Bordes de Enfoque Teclado**| Anillo Violet 600 con offset blanco | Anillo Violet 400 con offset oscuro |
| **Badges de Tecnología** | Fondo `#F5F3FF`, texto `#7C3AED` | Fondo `#1C152B`, texto `#A78BFA` |

---

## 2. Selector Bilingüe de Idioma (`LanguageToggle`)

El selector permite alternar de forma inmediata entre Español (idioma nativo y mercado local) e Inglés (para reclutadores internacionales y posiciones remotas):

```text
DESKTOP: Segmented Toggle Switch
+-----------------------------+
|   [  ES  |  EN  ]           |  (Botón tipo pastilla con fondo deslizante)
+-----------------------------+
      ^
  Estado Activo: Fondo violeta sutil, texto con peso Medium y feedback táctil
```

### Mapeo de Textos Clave por Idioma

| Clave de Traducción | Versión en Español (`es`) | Versión en Inglés (`en`) |
|---|---|---|
| `nav.about` | Sobre mí | About me |
| `nav.skills` | Tecnologías | Skills & Stack |
| `nav.projects` | Proyectos | Projects |
| `nav.education` | Formación | Education |
| `nav.cv` | Descargar CV | Download Resume |
| `nav.contact` | Contacto | Contact |
| `hero.available` | Disponible para prácticas preprofesionales | Open to software engineering internships |
| `hero.subtitle` | Estudiante de Ingeniería de Software (8.º Ciclo) • UPC | Software Engineering Student (8th Semester) • UPC |
| `projects.filter_all` | Todos los proyectos | All Projects |
| `projects.filter_sw` | Software Engineering | Software Engineering |
| `projects.filter_data`| Data & AI | Data & AI |
| `projects.filter_mobile`| Mobile | Mobile |
| `projects.view_case` | Ver Caso de Estudio | View Case Study |
| `projects.view_code` | Ver Código en GitHub | View Source on GitHub |

---

## 3. Estados de Foco Accesible e Interacción de Emil Kowalski

1. **Estado Focus-Visible:**
   ```css
   :focus-visible {
     outline: 2px solid var(--focus);
     outline-offset: 2px;
   }
   ```
2. **Estado Active (Presión):**
   ```css
   button:active, a[role="button"]:active {
     transform: scale(0.98);
     transition: transform 100ms ease-out;
   }
   ```
3. **Respeto a Preferencias del Sistema:**
   Si el usuario no ha forzado un tema en `localStorage`, un cambio en las preferencias del sistema operativo (ej. cambio a modo nocturno programado) actualiza dinámicamente el tema sin necesidad de recargar la página gracias al listener de `window.matchMedia('(prefers-color-scheme: dark)')`.
