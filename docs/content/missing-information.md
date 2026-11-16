# Registro de Información Pendiente y Decisiones del Usuario

**Documento:** CONTENT-PEND-001  
**Versión:** 2.0.0 (Actualizada tras verificación de repositorios remotos de GitHub)  
**Fecha:** 15 de noviembre de 2026  
**Auditor:** Technical Documentation Engineer  

---

## 1. Estado de Resoluciones Anteriores

Gracias a la provisión y auditoría de los repositorios oficiales en `github.com/RicardoCardenas`, se resolvieron satisfactoriamente los siguientes puntos clave:

- [x] **Enlaces remotos oficiales verificados:** Confirmadas las URLs públicas de los 7 repositorios:
  - `Capital-Cruise`
  - `TaleStar-Mobile`
  - `Meditrack`
  - `Customer-Churn-Analytics`
  - `OneCoin-Backend`
  - `Jobsy-Backend`
  - `E-commerce-Data-pipeline`
- [x] **Código fuente de Jobsy y OneCoin:** Verificado e inspeccionado directamente desde GitHub con dependencias, arquitectura y casos de prueba confirmados.
- [x] **Directiva estricta para el Proyecto Nexo:** Establecida como proyecto de investigación de tesis en UPC, de carácter confidencial/privado. Se presentará exclusivamente como caso de estudio académico en el portafolio, **sin enlace a repositorio de código ni publicación de secretos o código privado**.

---

## 2. Elementos Menores Pendientes para Fase 1

Los únicos puntos operativos pendientes que no bloquean la arquitectura pero se definirán al inicio de la Fase 1 son:

### 2.1 Archivos PDF Finales para Descarga de CV
- **Ubicación actual:** En `C:\Ricardo\Kratos\Cvs` existen:
  - `CV_Ricardo_Cardenas_Minaya.pdf` (15/11/2026).
  - `Ricardo_Fernando_Cardenas_MinayaSoftwareATSNuevo.docx` y `Ricardo_Fernando_Cardenas_MinayaDatosATS.docx`.
- **Acción sugerida para Fase 1:** Copiar y estandarizar los dos PDFs en `public/cv/` como:
  - `CV_Ricardo_Cardenas_Software_Backend.pdf`
  - `CV_Ricardo_Cardenas_Data_AI.pdf`
  *(Confirmar si el usuario prefiere proveer PDFs ya exportados o si se realiza la copia directa).*

### 2.2 Fotografía o Avatar de Perfil
- **Acción para Fase 1:** Proveer la imagen oficial de perfil en formato PNG/WebP para `public/assets/avatar/profile.webp` o autorizar el uso temporal del monograma tipográfico minimalista con las iniciales `RC` en violeta y zinc.

### 2.3 Dominio de Despliegue en Producción
- **Decisión para Fase 4:** Confirmar si el portafolio se publicará inicialmente bajo subdominio de Vercel (ej. `ricardocardenas.vercel.app`) o si se vinculará un dominio personalizado propio (ej. `ricardocardenas.dev`).
