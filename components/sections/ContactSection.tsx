"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,136,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Contacto"
          title="Vamos construir algo"
          highlight="incrível?"
          description="Entre em contacto e descubra como podemos transformar o seu negócio com tecnologia de ponta."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-6">
                Informações de Contacto
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:contacto@azfbusiness.ao"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Email</div>
                    <div className="text-sm text-text-secondary group-hover:text-primary transition-colors">
                      contacto@azfbusiness.ao
                    </div>
                  </div>
                </a>

                <a href="tel:+244935415626" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Telefone</div>
                    <div className="text-sm text-text-secondary group-hover:text-accent transition-colors">
                      +244 935 415 626
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Endereço</div>
                    <div className="text-sm text-text-secondary">
                      Vila Residencial do Gamek, AL-D03
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface">
              <h4 className="font-display font-semibold text-text-primary mb-2">
                Horário de Atendimento
              </h4>
              <p className="text-sm text-text-secondary">
                Segunda a Sexta: 08:00 - 18:00
              </p>
              <p className="text-sm text-text-secondary">
                Sábado: 09:00 - 13:00
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-border bg-surface"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-text-primary text-sm placeholder:text-muted outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-text-primary text-sm placeholder:text-muted outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-text-primary text-sm placeholder:text-muted outline-none transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-text-primary text-sm outline-none transition-all appearance-none"
                  >
                    <option value="" className="text-muted">Selecione um serviço</option>
                    <option value="ai">Inteligência Artificial</option>
                    <option value="ml">Machine Learning</option>
                    <option value="chatbot">Chatbots & Assistentes</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="security">Cibersegurança</option>
                    <option value="automation">Automação</option>
                    <option value="consulting">Consultoria em TI</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-text-primary text-sm placeholder:text-muted outline-none transition-all resize-none"
                  placeholder="Descreva o seu projeto ou como podemos ajudar..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
