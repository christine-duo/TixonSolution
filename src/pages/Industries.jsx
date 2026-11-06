import { Link } from "react-router-dom";
import { ArrowRight, Mail, UtensilsCrossed, Clapperboard, TicketCheck, ShoppingCart, Briefcase } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { INDUSTRIES, SITE } from "../data/site";

const ICONS = { UtensilsCrossed, Clapperboard, TicketCheck, ShoppingCart, Briefcase };

export default function Industries() {
  return (
    <div className="pt-[72px]">
      <section className="hero-surface py-16 lg:py-20">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Industries We <span className="gradient-text">Work With</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
              From restaurants and video production teams to ticket reselling, retail, and growing
              businesses, we create digital solutions around the way each
              industry actually operates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.icon];
            return (
              <ScrollReveal key={industry.name}>
                <div className="premium-card grid gap-8 p-7 md:grid-cols-[auto_1fr] md:p-9">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 md:h-16 md:w-16">
                    <Icon size={28} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {industry.name}
                    </h2>
                    <p className="mt-3 leading-relaxed text-gray-500">
                      {industry.description}
                    </p>
                    <div className="mt-5 rounded-xl bg-gray-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                        Examples:
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {industry.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          <ScrollReveal>
            <div className="premium-card p-8 text-center md:p-10">
              <h2 className="text-xl font-bold text-gray-900">
                Don't see your industry? We work with businesses of all types.
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  to="/#consultation"
                  className="glow-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Let's Discuss Your Project
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${SITE.email}?subject=Industry%20Project%20Discussion`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-green-400 hover:text-green-700"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
