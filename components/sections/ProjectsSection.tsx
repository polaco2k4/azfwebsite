"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const categories = ["Todos", "Inteligência Artificial", "Desenvolvimento", "Cloud & Infra"];

const projects = [
  {
    title: "Assistente Virtual Bancário",
    category: "Inteligência Artificial",
    description:
      "Chatbot com NLP para atendimento automatizado em instituição financeira, reduzindo tempo de resposta em 80%.",
    tags: ["NLP", "Python", "React"],
    gradient: "from-primary/20 to-secondary/20",
    accentColor: "text-primary",
  },
  {
    title: "Plataforma de Analytics",
    category: "Inteligência Artificial",
    description:
      "Dashboard de análise preditiva com modelos de ML para previsão de vendas e comportamento do consumidor.",
    tags: ["ML", "TensorFlow", "Next.js"],
    gradient: "from-secondary/20 to-purple-500/20",
    accentColor: "text-secondary",
  },
  {
    title: "E-commerce Inteligente",
    category: "Desenvolvimento",
    description:
      "Plataforma de e-commerce completa com recomendação de produtos por IA e processamento de pagamentos.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-accent/20 to-emerald-500/20",
    accentColor: "text-accent",
  },
  {
    title: "Sistema de Gestão Hospitalar",
    category: "Desenvolvimento",
    description:
      "Sistema completo de gestão hospitalar com agendamento, prontuário eletrônico e telemedicina.",
    tags: ["React", "TypeScript", "AWS"],
    gradient: "from-blue-400/20 to-cyan-500/20",
    accentColor: "text-blue-400",
  },
  {
    title: "Infraestrutura Multi-Cloud",
    category: "Cloud & Infra",
    description:
      "Migração e orquestração de infraestrutura multi-cloud para empresa de telecomunicações.",
    tags: ["AWS", "Terraform", "Kubernetes"],
    gradient: "from-orange-400/20 to-amber-500/20",
    accentColor: "text-orange-400",
  },
  {
    title: "Visão Computacional Industrial",
    category: "Inteligência Artificial",
    description:
      "Sistema de inspeção de qualidade com visão computacional para detecção de defeitos em tempo real.",
    tags: ["OpenCV", "PyTorch", "Edge AI"],
    gradient: "from-pink-400/20 to-rose-500/20",
    accentColor: "text-pink-400",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,102,255,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Portfólio"
          title="Projetos que"
          highlight="inspiram"
          description="Cada projeto é uma história de transformação. Veja como ajudamos empresas a alcançar o próximo nível."
        />

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-border hover:border-primary/20 bg-surface overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col"
                >
                  {/* Gradient header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <ExternalLink className="w-8 h-8 text-text-primary/20 group-hover:text-text-primary/40 transition-colors" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${project.accentColor} mb-2`}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-md bg-surface-light border border-border text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
