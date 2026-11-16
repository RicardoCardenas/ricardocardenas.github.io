# ADR-002: Selección de la Pila Frontend Principal (React 19, TypeScript, Vite, Tailwind CSS v4)

**Estado:** Aprobado  
**Fecha:** 15 de noviembre de 2026  
**Decisores:** Senior Software Architect, Senior React Engineer  
**Contexto Técnico:** Desarrollo de la interfaz de usuario del portafolio profesional  

---

## 1. Contexto y Requisitos
El portafolio debe proyectar los más altos estándares de calidad de software. Se evaluaron criterios de:
- Tipado estricto y prevención de regresiones.
- Velocidad de compilación y experiencia de desarrollo (DX).
- Peso final del bundle y Core Web Vitals (LCP $< 1.2$s, CLS $= 0$).
- Capacidad de componentes accesibles y diseño sin patrones genéricos.

---

## 2. Decisión Arquitectónica
Se adopta la siguiente pila técnica base:
1. **React 19 + TypeScript 5.7+:** Como librería base y lenguaje tipado. Se configura `tsconfig.json` con `"strict": true`, `"noImplicitAny": true` y `"exactOptionalPropertyTypes": true`.
2. **Vite 6+:** Como bundler y servidor de desarrollo ultrarrápido basado en ESM nativo y Rollup optimizado para producción.
3. **Tailwind CSS v4:** Para estilos utility-first con variables CSS nativas, eliminando configuraciones complejas de PostCSS y acelerando el tiempo de compilación.
4. **shadcn/ui (Radix UI primitives):** Para componentes interactivos accesibles (modales, tooltips, tabs) donde el código reside dentro del repositorio y no como una librería de caja negra externa.
5. **Motion (Framer Motion 11+):** Para transiciones de diseño y orquestación de animaciones sutiles.
6. **Lucide React:** Para iconografía técnica consistente con trazo uniforme de 2px.

---

## 3. Consecuencias y Trade-offs

### Beneficios
- **Cero sobrecarga de runtime de CSS:** Tailwind compila únicamente las clases utilizadas, generando un archivo CSS final inferior a 25 KB.
- **Accesibilidad por defecto:** Radix UI resuelve navegación por teclado, focus trapping y atributos ARIA de manera nativa.
- **Mantenibilidad:** El tipado estricto asegura que los datos de proyectos y certificaciones se ajusten siempre a los modelos definidos.

### Mitigaciones
- Se debe vigilar el tamaño de las dependencias importadas, asegurando tree-shaking en Lucide React y cargando Motion de forma granular.
