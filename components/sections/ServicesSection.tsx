"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  BarChart3,
  Eye,
  Cloud,
  Code2,
  Shield,
  Settings,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const aiServices = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Modelos de ML personalizados que aprendem e evoluem com os dados do seu negócio, gerando insights preditivos.",
  },
  {
    icon: Bot,
    title: "Chatbots & Assistentes",
    description:
      "Assistentes virtuais inteligentes que automatizam o atendimento ao cliente com linguagem natural.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description:
      "Transformamos dados brutos em decisões estratégicas através de análise avançada e visualizações.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Soluções de visão computacional para reconhecimento de padrões, OCR e análise de imagens.",
  },
];

const tiServices = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Migração e gestão de infraestrutura cloud com AWS, Azure e GCP para máxima escalabilidade.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web & Mobile",
    description:
      "Aplicações web e mobile modernas, responsivas e performáticas com as melhores tecnologias.",
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    description:
      "Proteja seu negócio com auditorias de segurança, penetration testing e políticas de proteção.",
  },
  {
    icon: Settings,
    title: "Automação de Processos",
    description:
      "Automatize tarefas repetitivas e otimize fluxos de trabalho com RPA e integração de sistemas.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  accent = "primary",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  accent?: "primary" | "accent";
}) {
  const colorMap = {
    primary: {
      iconBg: "bg-primary/10",
      iconText: "text-primary",
      hoverBorder: "hover:border-primary/30",
      glow: "group-hover:shadow-primary/5",
    },
    accent: {
      iconBg: "bg-accent/10",
      iconText: "text-accent",
      hoverBorder: "hover:border-accent/30",
      glow: "group-hover:shadow-accent/5",
    },
  };

  const colors = colorMap[accent];

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        className={`group relative p-6 rounded-2xl border border-border ${colors.hoverBorder} bg-surface hover:bg-surface-light transition-all duration-300 hover:shadow-xl ${colors.glow} h-full`}
      >
        <div
          className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5`}
        >
          <Icon className={`w-6 h-6 ${colors.iconText}`} />
        </div>
        <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-muted group-hover:text-primary transition-colors">
          Saber mais
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>
    </AnimatedSection>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Nossos Serviços"
          title="Soluções que impulsionam"
          highlight="o futuro"
          description="Combinamos inteligência artificial de ponta com expertise em tecnologia da informação para entregar soluções que transformam negócios."
        />

        {/* AI Services */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary">
              Inteligência Artificial
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {aiServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
              accent="primary"
            />
          ))}
        </div>

        {/* TI Services */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-xl text-text-primary">
              Tecnologia da Informação
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
              accent="accent"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
