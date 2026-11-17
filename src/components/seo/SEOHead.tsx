import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_CONFIG, type RouteSEO } from '../../config/seo';

export interface SEOHeadProps extends RouteSEO {
  jsonLd?: object | object[];
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string | undefined) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  type = 'website',
  image = SITE_CONFIG.defaultImage,
  noindex = false,
  jsonLd,
}: SEOHeadProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  useEffect(() => {
    // 1. Título del Documento
    document.title = title;

    // 2. Metadatos estándar
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('name', 'author', SITE_CONFIG.author);

    // 3. Enlace Canónico
    const fullCanonicalUrl = `${SITE_CONFIG.siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    updateLinkTag('canonical', fullCanonicalUrl);

    // 4. Open Graph
    updateMetaTag('property', 'og:site_name', 'Ricardo Cardenas | Portfolio');
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', fullCanonicalUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag(
      'property',
      'og:image',
      image.startsWith('http') ? image : `${SITE_CONFIG.siteUrl}${image}`
    );
    updateMetaTag('property', 'og:locale', lang === 'en' ? 'en_US' : 'es_PE');

    // 5. Twitter / X Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag(
      'name',
      'twitter:image',
      image.startsWith('http') ? image : `${SITE_CONFIG.siteUrl}${image}`
    );

    // 6. JSON-LD Datos Estructurados
    let scriptElement = document.getElementById('route-jsonld') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'route-jsonld';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalPath, type, image, noindex, jsonLd, lang]);

  return null;
}