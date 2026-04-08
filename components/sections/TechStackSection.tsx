"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const technologies = [
  { name: "Python", category: "AI / Backend" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "OpenAI", category: "LLMs / GPT" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "Orquestração" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "NoSQL" },
  { name: "Terraform", category: "IaC" },
  { name: "LangChain", category: "AI Framework" },
  { name: "FastAPI", category: "API" },
];

export default function TechStackSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Tecnologias"
          title="Ferramentas que"
          highlight="dominamos"
          description="Trabalhamos com as tecnologias mais modernas e robustas do mercado para entregar soluções de excelência."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="group p-4 rounded-xl border border-border hover:border-primary/30 bg-surface hover:bg-surface-light transition-all duration-300 text-center cursor-default"
              >
                <div className="font-display font-semibold text-sm text-text-primary mb-1 group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-muted uppercase tracking-wider">
                  {tech.category}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
