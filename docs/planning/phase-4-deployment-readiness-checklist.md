# Checklist de Preparación para Despliegue en Producción — FASE 4
## Portafolio Profesional de Ingeniería de Software — Ricardo Cárdenas

**Documento:** PLAN-DEPLOY-4-001  
**Versión:** 1.0.0  
**Fecha:** 16 de noviembre de 2026  
**Fase Previa Aprobada:** Fase 3.5 — Validación Integral de Preproducción  
**Estado:** 📋 **CHECKLIST LISTO PARA EJECUCIÓN EN FASE 4**  

---

## 1. Propósito del Checklist

Este documento define la hoja de ruta técnica, los pasos de configuración de infraestructura y los criterios de aceptación indispensables para llevar a cabo el despliegue a producción de forma segura, estable y reproducible en la **Fase 4**.

---

## 2. Checklist Técnico Paso a Paso

### Bloque A: Selección y Confirmación de Dominio
- [ ] **A.1:** El usuario confirma el dominio de producción definitivo (ej. `https://ricardocardenas.dev`, `https://ricardocardenas.pe`, o subdominio aprobado).
- [ ] **A.2:** Configurar los registros DNS en el registrador de dominio:
  - Registro `A` o `CNAME` apuntando a la IP/host de la plataforma de despliegue.
  - Registro `CNAME` para subdominio `www` redirigiendo a la raíz (o viceversa).
- [ ] **A.3:** Habilitación y verificación automática del certificado SSL/TLS (HTTPS estricto con renovación automática).

---

### Bloque B: Variables de Entorno y Configuración de Compilación
- [ ] **B.1:** Configurar la variable de entorno obligatoria en la plataforma de hosting:
  ```env
  VITE_SITE_URL=https://<dominio-aprobado>
  ```
- [ ] **B.2:** Verificar que `getSiteUrl()` propague este dominio a:
  - Enlaces canónicos `<link rel="canonical">` en las 10 rutas públicas.
  - Atributos Open Graph `og:url` y `og:image`.
  - Atributos Twitter Cards `twitter:image`.
  - Schemas JSON-LD `url` para `Person` y `WebSite`.
- [ ] **B.3:** Confirmar que `npm run build` ejecute exitosamente:
  1. `tsc --noEmit` (TypeScript typecheck).
  2. `vite build` (Rollup bundling y minificación).
  3. `node scripts/prerender.js` (generación de las 11 rutas HTML estáticas, `sitemap.xml` dinámico y `robots.txt` sincronizado).
- [ ] **B.4:** Verificar que ningún activo de salida contenga referencias residuales a `http://localhost:4173`.

---

### Bloque C: Reglas de Enrutamiento y Código de Respuesta HTTP 404
- [ ] **C.1:** Configurar la plataforma para soporte nativo de **URLs limpias (`cleanUrls`)**, sirviendo rutas como `/projects` sin exigir `/projects.html` ni redirección con trailing slash innecesaria.
- [ ] **C.2:** Configurar la regla de error para emitir un **verdadero código de estado HTTP 404**:
  - **Vercel (`vercel.json`):**
    ```json
    {
      "cleanUrls": true,
      "trailingSlash": false,
      "routes": [
        { "handle": "filesystem" },
        { "src": "/(.*)", "status": 404, "dest": "/404.html" }
      ]
    }
    ```
  - **Netlify (`public/_redirects` o `netlify.toml`):**
    ```toml
    [[redirects]]
      from = "/*"
      to = "/404.html"
      status = 404
    ```
  - **Cloudflare Pages:** Manejo nativo de `404.html` en la raíz de salida estática con código 404.
  - **Nginx / Servidor Dedicado:**
    ```nginx
    error_page 404 /404.html;
    location = /404.html {
      internal;
    }
    ```
- [ ] **C.3:** Probar con `curl -I https://<dominio>/ruta-inexistente` y confirmar:
  - `HTTP/2 404` (o `HTTP/1.1 404 Not Found`).
  - Cabecera `content-type: text/html`.
  - Ausencia de "soft 404" (respuesta 200 ante contenido no encontrado).

---

### Bloque D: Cabeceras de Seguridad HTTP (Security Headers)
Configurar las siguientes directivas recomendadas en la plataforma de entrega:
- [ ] **D.1: Strict-Transport-Security (HSTS):**
  `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- [ ] **D.2: X-Content-Type-Options:**
  `X-Content-Type-Options: nosniff`
- [ ] **D.3: X-Frame-Options:**
  `X-Frame-Options: DENY` (previene ataques de clickjacking).
- [ ] **D.4: Referrer-Policy:**
  `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] **D.5: Permissions-Policy:**
  `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- [ ] **D.6: Content-Security-Policy (CSP):**
  Definir directivas seguras para permitir scripts del mismo origen, estilos inline críticos Tailwind y fuentes locales.

---

### Bloque E: Pipeline de Integración y Despliegue Continuo (CI/CD)
- [ ] **E.1:** Crear flujo de trabajo en GitHub Actions (`.github/workflows/deploy.yml`):
  1. `git checkout`
  2. Configuración de Node.js v20 LTS.
  3. `npm ci` (instalación limpia y reproducible).
  4. Ejecución del Quality Gate obligatorio:
     - `npm run typecheck`
     - `npm run lint`
     - `npm run test`
  5. Instalación de navegadores Chromium para prerenderizado: `npx playwright install --with-deps chromium`.
  6. Compilación de producción con variable de entorno: `VITE_SITE_URL=${{ secrets.VITE_SITE_URL }} npm run build`.
  7. Despliegue automatizado del directorio `dist/` a la plataforma seleccionada mediante token seguro de proveedor.
- [ ] **E.2:** Habilitar protección de rama en `master` / `main` requiriendo que el Quality Gate apruebe antes de fusionar cualquier cambio futuro.

---

### Bloque F: Verificación Post-Despliegue en Vivo (Smoke Testing)
- [ ] **F.1:** Visitar el dominio HTTPS en vivo y confirmar que el candado de seguridad esté activo sin advertencias de contenido mixto.
- [ ] **F.2:** Verificar la entrega de `https://<dominio>/robots.txt` (debe contener enlace al sitemap HTTPS).
- [ ] **F.3:** Verificar `https://<dominio>/sitemap.xml` (debe listar las 10 rutas con origen HTTPS y sin la ruta 404).
- [ ] **F.4:** Inspeccionar una ruta con la herramienta de depuración de Open Graph de Facebook / LinkedIn Post Inspector y confirmar la carga de `og-image.png`.
- [ ] **F.5:** Probar la descarga real de los dos archivos PDF de currículum en el navegador.
- [ ] **F.6:** Ejecutar una auditoría en vivo con Google PageSpeed Insights / Lighthouse sobre la URL pública para validar puntuaciones de producción.

---

## 3. Criterios de "Go / No-Go" para Lanzamiento Oficial

| Condición Crítica | Criterio de Decisión | Decisión |
| :--- | :--- | :---: |
| **Dominio HTTPS Activo** | Certificado SSL válido, sin advertencias de seguridad | **OBLIGATORIO (GO)** |
| **Quality Gate CI/CD** | 0 fallos en typecheck, lint, pruebas unitarias y build | **OBLIGATORIO (GO)** |
| **Código HTTP 404 Real** | Rutas rotas devuelven estado 404 (no soft-404) | **OBLIGATORIO (GO)** |
| **Privacidad Estricta** | Monograma RC preservado, 0 notas numéricas, Nexo privado | **OBLIGATORIO (GO)** |
| **Rendimiento Móvil $\ge 90$** | Lighthouse Mobile en producción $\ge 90$ y TBT $\le 200$ ms | **OBLIGATORIO (GO)** |
| **Descargas de CV Operativas** | Ambos PDF accesibles y descargables con tamaño correcto | **OBLIGATORIO (GO)** |
