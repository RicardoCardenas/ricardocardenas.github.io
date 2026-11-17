# Guía de Despliegue en GitHub Pages (User Site)

> **Plataforma objetivo:** GitHub Pages — User Site  
> **Dominio público canónico:** `https://ricardocardenas.github.io/`  
> **Nombre del repositorio:** `ricardocardenas.github.io`  
> **Rama principal:** `master`  
> **Método de despliegue:** GitHub Actions (`.github/workflows/deploy-pages.yml`)

---

## 1. Contexto de Arquitectura y Configuración

A diferencia de un *Project Site* (que se aloja en un subdirectorio `https://usuario.github.io/nombre-repo/`), un **User Site** (`https://<usuario>.github.io/`):
- Se publica en la raíz absoluta del dominio (`/`).
- La configuración de base en [vite.config.ts](file:///C:/Ricardo/Portafolio/vite.config.ts) es `base: '/'`.
- Las rutas del enrutador React Router operan directamente en `/`, `/projects`, `/projects/:slug`, etc.
- No requiere reescritura de subdirectorios.
- Cuenta con el archivo de bypass de Jekyll `public/.nojekyll`, que asegura que GitHub Pages no ignore carpetas o archivos que comiencen con guion bajo ni intente procesar la salida compilada con Jekyll.
- Cuenta con `404.html` en la raíz de `dist/` para capturar cualquier ruta no reconocida y permitir la navegación SPA o mostrar la pantalla de error canónica.

---

## 2. Preparación Previa en PowerShell

Antes de conectar el repositorio remoto, comprueba localmente que el proyecto compila y supera todos los Quality Gates:

```powershell
# 1. Verificar tipo y sintaxis TypeScript
npm run typecheck

# 2. Verificar reglas de linting ESLint
npm run lint

# 3. Ejecutar pruebas unitarias y de componentes (Vitest)
npm run test

# 4. Compilar proyecto y generar rutas estáticas (SSG)
npm run build

# 5. Validar integridad de dist/ y escaneo de secretos
npm run validate:dist

# 6. Ejecutar suite E2E de Playwright (15 user journeys y regresión)
npx playwright test --reporter=list --workers=2
```

---

## 3. Creación del Repositorio Remoto en GitHub

1. Ingresa a tu cuenta de GitHub: [https://github.com/new](https://github.com/new).
2. Configura los datos del repositorio:
   - **Repository name:** `ricardocardenas.github.io` *(debe coincidir exactamente con tu nombre de usuario en minúsculas)*.
   - **Description:** `Portafolio profesional de Ingeniería de Software, Backend y Data & AI`.
   - **Public / Private:** Selecciona **Public** *(requisito para GitHub Pages gratuito)*.
   - **Initialize this repository with:**
     - ⚠️ **NO** marques "Add a README file".
     - ⚠️ **NO** marques "Add .gitignore".
     - ⚠️ **NO** elijas licencia.
     - *(El repositorio remoto debe crearse completamente vacío para sincronizar limpiamente con el historial local).*
3. Haz clic en **Create repository**.

---

## 4. Vinculación y Primer Push desde PowerShell

Abre PowerShell en el directorio raíz del portafolio (`C:\Ricardo\Portafolio`):

```powershell
# 1. Comprobar estado de Git
git status

# 2. Verificar si existe algún remoto configurado
git remote -v

# 3. Si no existe origin, agregarlo (usando HTTPS o SSH según tu configuración):
# Opción HTTPS:
git remote add origin https://github.com/RicardoCardenas/ricardocardenas.github.io.git

# O si utilizas claves SSH:
# git remote add origin git@github.com:RicardoCardenas/ricardocardenas.github.io.git

# 4. Confirmar que la rama activa sea 'master'
git branch

# 5. Enviar el historial de commits a la rama master en GitHub
git push -u origin master
```

---

## 5. Activación de GitHub Pages en GitHub

Una vez que el código esté en GitHub:

1. Ve a la página del repositorio en GitHub: `https://github.com/RicardoCardenas/ricardocardenas.github.io`.
2. Haz clic en la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, sección *Code and automation*, haz clic en **Pages**.
4. En **Build and deployment** > **Source**:
   - Cambia la opción de *"Deploy from a branch"* a **"GitHub Actions"**.
5. No es necesario seleccionar rama; la acción `.github/workflows/deploy-pages.yml` ya está configurada con los permisos y disparadores exactos para la rama `master`.

---

## 6. Monitoreo y Verificación de la Acción

1. Ve a la pestaña **Actions** en tu repositorio: `https://github.com/RicardoCardenas/ricardocardenas.github.io/actions`.
2. Verás el flujo de trabajo en ejecución titulado **"Deploy to GitHub Pages"**.
3. El flujo ejecutará las dos fases secuenciales:
   - **Build & Quality Gate:**
     - Checkout & Node.js 20.
     - `npm run typecheck`
     - `npm run lint`
     - `npm run test`
     - Playwright E2E suites.
     - `npm run build` con `VITE_SITE_URL=https://ricardocardenas.github.io`.
     - `npm run validate:dist` validando la integridad del bundle.
     - Upload Pages Artifact.
   - **Deploy to GitHub Pages:**
     - Publicación oficial a la red global de GitHub Pages.
4. Al finalizar exitosamente (marcado en verde), la URL pública estará disponible en:  
   👉 **`https://ricardocardenas.github.io/`**

---

## 7. Plan de Verificación Post-Despliegue (Smoke Testing)

Ejecuta las siguientes comprobaciones en tu navegador y consola PowerShell:

### 7.1. Verificación de Rutas Públicas (10 rutas canónicas)
Accede a cada una de las 10 rutas públicas y verifica que cargan instantáneamente el HTML prerenderizado y que React se activa limpiamente:
- `https://ricardocardenas.github.io/`
- `https://ricardocardenas.github.io/projects`
- `https://ricardocardenas.github.io/projects/nexo-agentic-graphrag`
- `https://ricardocardenas.github.io/projects/capital-cruise`
- `https://ricardocardenas.github.io/projects/talestar-mobile`
- `https://ricardocardenas.github.io/projects/meditrack-iot-health`
- `https://ricardocardenas.github.io/projects/thelook-ecommerce-pipeline`
- `https://ricardocardenas.github.io/projects/customer-churn-analytics`
- `https://ricardocardenas.github.io/projects/jobsy-backend`
- `https://ricardocardenas.github.io/projects/onecoin-backend`

### 7.2. Verificación de Descargas de CVs
Confirma la descarga directa de ambos documentos oficiales:
- CV Software Backend:  
  `https://ricardocardenas.github.io/cv/CV_Ricardo_Cardenas_Software_Backend.pdf`
- CV Data & AI:  
  `https://ricardocardenas.github.io/cv/CV_Ricardo_Cardenas-Data.pdf`

### 7.3. Verificación de SEO y Metadatos
Comprueba en el navegador o mediante PowerShell:
```powershell
# Comprobar robots.txt
curl.exe -I https://ricardocardenas.github.io/robots.txt

# Comprobar sitemap.xml
curl.exe -I https://ricardocardenas.github.io/sitemap.xml
```

### 7.4. Verificación de Manejo de Error 404
Prueba acceder a una ruta inexistente:
```powershell
curl.exe -I https://ricardocardenas.github.io/ruta-inexistente-de-prueba
```
GitHub Pages responderá sirviendo el archivo canónico `404.html` (HTTP 404) con el botón funcional para retornar al Home.

---

## 8. Mantenimiento, Actualizaciones y Procedimiento de Rollback

### Actualizaciones Futuras
Cada vez que realices cambios en local y hagas commit en `master`:
```powershell
git push origin master
```
El workflow de GitHub Actions ejecutará de forma automática toda la suite de pruebas y, únicamente si todos los Quality Gates son verdes, desplegará la nueva versión a producción.

### Procedimiento de Rollback de Emergencia
Si un cambio imprevisto llegara a producción y necesitas revertir al último commit estable:
```powershell
# 1. Identificar el commit estable anterior
git log --oneline -n 5

# 2. Crear un commit de reversión limpio
git revert <commit-hash-con-error>

# 3. Enviar a GitHub
git push origin master
```
GitHub Actions compilará el commit revertido y actualizará el sitio en menos de 2 minutos.
