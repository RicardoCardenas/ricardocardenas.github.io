# ADR-004: Estrategia de Internacionalización Bilingüe (Español / Inglés)

**Estado:** Aprobado  
**Fecha:** 15 de noviembre de 2026  
**Decisores:** Senior Software Architect, Lead Content Strategist  
**Contexto Técnico:** Audiencia global (mercado local peruano e internacional remoto)  

---

## 1. Contexto y Problema
El portafolio de Ricardo Cardenas tiene dos mercados objetivos principales:
1. **Mercado Local (Perú / Latinoamérica):** Prácticas preprofesionales en empresas de tecnología, banca y consultoría donde el idioma de trabajo y evaluación curricular inicial es el **español**.
2. **Mercado Internacional / Startups Globales:** Posiciones remotas en ingeniería de software, backend o datos donde el idioma de evaluación es el **inglés** (Ricardo cuenta con certificación oficial TOEFL ITP B2).

Se requiere una solución de internacionalización que:
- Permita alternar entre español e inglés de forma instantánea sin recarga de página.
- Detecte automáticamente el idioma del navegador del visitante y ofrezca fallback al español.
- Mantenga los textos técnicos traducidos con máxima precisión profesional, sin depender de motores automáticos en tiempo de ejecución.
- Preserve la consistencia del SEO y metadatos por idioma.

---

## 2. Decisión Arquitectónica

### 2.1 Pila de Internacionalización
Adoptar **`i18next` + `react-i18next`** complementado con `i18next-browser-languagedetector`.

### 2.2 Estructura de Diccionarios y Namespaces
Los contenidos se separan por ámbito y namespace para facilitar la carga modular y el mantenimiento:
- `src/i18n/locales/es/common.json` / `en/common.json`: Navegación, botones, selectores, estados vacíos, tooltips y avisos legales.
- `src/i18n/locales/es/home.json` / `en/home.json`: Textos de Hero, Sobre mí, disponibilidad, formación y contacto.
- `src/i18n/locales/es/projects.json` / `en/projects.json`: Títulos, resúmenes, lecciones aprendidas, planteamiento de problemas y soluciones de cada caso de estudio.

### 2.3 Reglas de Detección y Persistencia
1. **Orden de Detección:**
   - 1.º Valor explícito guardado en `localStorage` (clave `portfolio-language`).
   - 2.º Idioma detectado del navegador (`navigator.language`). Si inicia con `"en"`, activa inglés; si inicia con `"es"`, activa español.
   - 3.º Fallback predeterminado: Español (`es`).
2. **Persistencia:** Cualquier cambio manual mediante el `LanguageToggle` actualiza `localStorage` de inmediato.
3. **Sincronización del DOM:** Al cambiar de idioma se actualiza automáticamente el atributo `<html lang="es">` o `<html lang="en">` para accesibilidad con lectores de pantalla.

---

## 3. Consecuencias y Mitigaciones
- **Ventaja:** Cero latencia al cambiar de idioma y total desacoplamiento entre la estructura del componente y sus textos.
- **Mantenimiento:** Al agregar un nuevo caso de estudio o certificación, se debe completar la entrada tipada en ambos idiomas (`es` y `en`) como parte de la definición de hecho (*Definition of Done*).
