# ADR-005: Selección de Plataforma de Alojamiento y Pipeline CI/CD (Vercel + GitHub Actions)

**Estado:** Aprobado  
**Fecha:** 15 de noviembre de 2026  
**Decisores:** Senior Software Architect, DevOps & CI/CD Specialist  
**Contexto Técnico:** Distribución, infraestructura, CDN y compatibilidad con SPA  

---

## 1. Contexto y Requisitos de Infraestructura
La aplicación frontend generada por Vite requiere una infraestructura de distribución que cumpla con:
- Tiempo de respuesta mundial inferior a 100ms mediante Edge CDN.
- Soporte nativo para Single-Page Applications con reescritura de rutas (`rewrites`) para rutas profundas (`/projects/:slug`).
- Despliegue continuo automatizado (CI/CD) vinculado al repositorio de GitHub.
- Certificados SSL/TLS automáticos y compresión moderna (Brotli / Gzip).
- Costo operativo cero en capa gratuita (*hobby tier*).

---

## 2. Decisión Arquitectónica

### 2.1 Plataforma Principal: Vercel
Se selecciona **Vercel** como entorno de alojamiento de producción:
- Soporte nativo de reescritura SPA mediante el archivo `vercel.json`:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/assets/(.*)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
  ```
- Generación de *Preview Deployments* automáticos en cada Pull Request para validación previa a producción.

### 2.2 Estrategia de Fallback: GitHub Pages
Si el usuario prefiere mantener todo alojado exclusivamente en GitHub Pages:
- Se implementará el script `spa-github-pages` con copia de `index.html` a `404.html` en el build step para interceptar rutas dinámicas.
- Se configurará el pipeline en `.github/workflows/deploy.yml` para compilar y publicar en la rama `gh-pages`.

### 2.3 Pipeline Automatizado de CI/CD (GitHub Actions)
Todo commit a la rama principal ejecutará un flujo de validación con las siguientes etapas:
1. **Linting & Formato:** `eslint` y `prettier --check`.
2. **Chequeo de Tipos:** `tsc --noEmit`.
3. **Pruebas Unitarias y de Componentes:** `vitest run`.
4. **Compilación de Producción:** `vite build`.
5. **Auditoría de Enlaces Rotos:** Validación de recursos públicos.

---

## 3. Consecuencias
- Despliegues confiables, auditables y sin caídas.
- Eliminación de la posibilidad de desplegar código con errores de TypeScript o pruebas fallidas.
