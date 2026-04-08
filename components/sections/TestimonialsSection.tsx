"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, FinTech Angola",
    content:
      "A AZF transformou completamente a nossa operação com um assistente virtual que reduziu o tempo de atendimento em 80%. A equipe é extremamente profissional e dedicada.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "CTO, MedConnect",
    content:
      "O sistema de gestão hospitalar desenvolvido pela AZF superou todas as expectativas. A integração com IA para triagem de pacientes foi um divisor de águas.",
    rating: 5,
  },
  {
    name: "Pedro Silva",
    role: "Diretor de TI, LogisTech",
    content:
      "A migração para cloud foi impecável. A AZF cuidou de tudo com transparência e nos entregou uma infraestrutura 10x mais eficiente com custos reduzidos.",
    rating: 5,
  },
  {
    name: "Maria João",
    role: "Fundadora, EduPlatform",
    content:
      "Trabalhamos com a AZF no desenvolvimento da nossa plataforma de e-learning com IA. O resultado foi incrível — os alunos adoraram a experiência personalizada.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Depoimentos"
          title="O que nossos clientes"
          highlight="dizem"
          description="A satisfação dos nossos clientes é o nosso maior indicador de sucesso."
        />

        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-4 opacity-10">
              <Quote className="w-20 h-20 text-primary" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 md:p-12 rounded-2xl border border-border bg-surface"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>

                <p className="text-text-secondary text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-display font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-text-primary">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-muted"
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
