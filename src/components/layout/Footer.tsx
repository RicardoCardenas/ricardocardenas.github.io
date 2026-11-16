import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/60 bg-surface/40 py-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <div>
          <p>© {currentYear} Ricardo Fernando Cardenas Minaya. UPC • Ingeniería de Software.</p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/RicardoCardenas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors p-1 rounded-md"
            aria-label="Perfil de GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-cardenas-minaya-4734a3323"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors p-1 rounded-md"
            aria-label="Perfil de LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:fernandocm1112@gmail.com"
            className="text-text-muted hover:text-text-primary transition-colors p-1 rounded-md"
            aria-label="Correo electrónico profesional"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
