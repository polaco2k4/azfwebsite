"use client";

import { Zap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  servicos: [
    { label: "Inteligência Artificial", href: "#servicos" },
    { label: "Machine Learning", href: "#servicos" },
    { label: "Automação de Processos", href: "#servicos" },
    { label: "Consultoria em TI", href: "#servicos" },
    { label: "Desenvolvimento Web", href: "#servicos" },
    { label: "Cloud Computing", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Equipe", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter / X", href: "https://x.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-background" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                  AZF
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted leading-none">
                  Tech & Innovation
                </span>
              </div>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Transformando negócios com inteligência artificial e soluções
              tecnológicas de ponta. O futuro da sua empresa começa aqui.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@azfbusiness.ao"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@azfbusiness.ao
              </a>
              <a
                href="tel:+244935415626"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +244 935 415 626
              </a>
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4" />
                Luanda, Angola
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AZF - Tecnologia e Inovação. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-muted">
            Feito com dedicação em Angola
          </p>
        </div>
      </div>
    </footer>
  );
}
