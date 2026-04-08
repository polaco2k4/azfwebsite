"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 md:p-20">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,102,255,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,255,136,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-8 right-12 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
                Pronto para{" "}
                <span className="text-gradient">transformar</span>
                <br />o seu negócio?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl">
                Agende uma consultoria gratuita e descubra como a inteligência artificial
                e soluções de TI podem revolucionar a sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Agendar Consultoria
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/244923456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/5 font-semibold transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
