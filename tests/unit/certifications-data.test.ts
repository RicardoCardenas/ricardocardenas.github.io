import { describe, it, expect } from 'vitest';
import { verifiedCertifications } from '../../src/data/certifications';

describe('verifiedCertifications dataset', () => {
  it('contiene credenciales estructuradas y válidas', () => {
    expect(verifiedCertifications.length).toBeGreaterThanOrEqual(6);

    for (const cert of verifiedCertifications) {
      expect(cert.id).toBeTruthy();
      expect(cert.title.es).toBeTruthy();
      expect(cert.title.en).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.type).toMatch(
        /professional-certification|language-accreditation|specialization|course-completion|in-progress/
      );
      expect(cert.typeLabel.es).toBeTruthy();
      expect(cert.typeLabel.en).toBeTruthy();
      expect(cert.category).toMatch(
        /cloud|data-ai|security|methodology|language|software-engineering/
      );
      expect(Array.isArray(cert.skills)).toBe(true);
    }
  });

  it('clasifica correctamente AZ-900 como certificación profesional oficial', () => {
    const az900 = verifiedCertifications.find((c) => c.id === 'az-900');
    expect(az900).toBeDefined();
    expect(az900?.type).toBe('professional-certification');
    expect(az900?.issuer).toBe('Microsoft');
    expect(az900?.category).toBe('cloud');
    expect(az900?.isFeatured).toBe(true);
  });

  it('clasifica correctamente TOEFL como acreditación de idioma', () => {
    const toefl = verifiedCertifications.find((c) => c.id === 'toefl-itp-b2');
    expect(toefl).toBeDefined();
    expect(toefl?.type).toBe('language-accreditation');
    expect(toefl?.category).toBe('language');
    expect(toefl?.isFeatured).toBe(true);
  });

  it('clasifica especializaciones de Coursera adecuadamente', () => {
    const michigan = verifiedCertifications.find((c) => c.id === 'michigan-python-specialization');
    expect(michigan).toBeDefined();
    expect(michigan?.type).toBe('specialization');
    expect(michigan?.credentialId).toBe('R47DHZSYJHU8');

    const colorado = verifiedCertifications.find((c) => c.id === 'colorado-databases-specialization');
    expect(colorado).toBeDefined();
    expect(colorado?.type).toBe('specialization');
    expect(colorado?.credentialId).toBe('5HK0ZWWIAHCQ');
  });
});
