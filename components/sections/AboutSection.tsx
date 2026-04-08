"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Award, Rocket, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Estamos sempre à frente, explorando novas tecnologias e metodologias.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada solução é desenhada para gerar impacto mensurável no seu negócio.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais certificados com vasta experiência em IA e TI.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Código limpo, arquiteturas robustas e melhores práticas do mercado.",
  },
  {
    icon: Rocket,
    title: "Entrega Ágil",
    description: "Metodologias ágeis que garantem entregas rápidas e iterativas.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria de Longo Prazo",
    description: "Não somos apenas fornecedores — somos parceiros estratégicos.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,255,136,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Sobre Nós"
          title="Quem é a"
          highlight="AZF?"
          description="Somos uma agência de tecnologia e inovação focada em entregar soluções inteligentes que aceleram a transformação digital."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Story */}
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                A <span className="text-text-primary font-semibold">AZF - Tecnologia e Inovação</span> nasceu
                da paixão por resolver problemas complexos com tecnologia de ponta. Combinamos
                expertise em inteligência artificial com profundo conhecimento em tecnologia
                da informação para criar soluções que realmente fazem a diferença.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Nossa missão é democratizar o acesso à tecnologia de qualidade, ajudando
                empresas de todos os tamanhos a se tornarem mais eficientes, inteligentes
                e competitivas no mercado digital.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Com uma equipe multidisciplinar de engenheiros, cientistas de dados e
                designers, entregamos projetos que vão desde chatbots inteligentes até
                infraestruturas cloud de alta disponibilidade.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-surface border border-border">
                  <div className="font-display font-bold text-2xl text-primary mb-1">2019</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Fundada em</div>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border">
                  <div className="font-display font-bold text-2xl text-accent mb-1">15+</div>
                  <div className="text-xs text-muted uppercase tracking-wider">Especialistas</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-xl border border-border hover:border-primary/20 bg-surface hover:bg-surface-light transition-all duration-300 group"
                >
                  <value.icon className="w-5 h-5 text-primary mb-3 group-hover:text-accent transition-colors" />
                  <h4 className="font-display font-semibold text-sm text-text-primary mb-1.5">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
