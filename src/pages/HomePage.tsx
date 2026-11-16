import { useTranslation } from 'react-i18next';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { CVSection } from '../components/sections/CVSection';
import { ContactSection } from '../components/sections/ContactSection';

export function HomePage() {
  const { i18n } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  return (
    <div className="py-8 sm:py-12 space-y-20 sm:space-y-28 max-w-5xl mx-auto px-4 sm:px-6">
      {/* 1. SECCIÓN HERO / PRESENTACIÓN */}
      <HeroSection lang={lang} />

      {/* 2. SECCIÓN SOBRE MÍ Y ENFOQUE DE INGENIERÍA (#about) */}
      <AboutSection lang={lang} />

      {/* 3. SECCIÓN TECNOLOGÍAS Y DOMINIOS (#skills) */}
      <SkillsSection lang={lang} />

      {/* 4. SECCIÓN PROYECTOS DESTACADOS (#featured-projects) */}
      <FeaturedProjectsSection lang={lang} />

      {/* 5. SECCIÓN FORMACIÓN UNIVERSITARIA Y CERTIFICACIONES (#education) */}
      <EducationSection lang={lang} />

      {/* 6. SECCIÓN DESCARGA DE CURRÍCULUM (#cv) */}
      <CVSection lang={lang} />

      {/* 7. SECCIÓN CONTACTO (#contact) */}
      <ContactSection lang={lang} />
    </div>
  );
}
