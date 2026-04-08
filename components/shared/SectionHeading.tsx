"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent border border-accent/20 rounded-full bg-accent/5 mb-6">
        {badge}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </AnimatedSection>
  );
}
