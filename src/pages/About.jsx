import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Compass, Handshake } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { ABOUT_CARDS } from "../data/site";

const ICONS = { Target, Compass, Handshake };

export default function About() {
  return (
    <div className="pt-[72px]">
      <section className="hero-surface relative py-16 lg:py-20">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700">
              <Sparkles size={15} />
              The TixonSolution Way
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Technology shaped around your goals,{" "}
              <span className="gradient-text">not generic templates.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
              We help ambitious teams turn complicated daily operations into focused
              digital experiences. Our platforms connect people, information, and
              processes without unnecessary friction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="leading-relaxed text-gray-600">
              Every engagement begins with listening. We map how your business
              currently works, uncover the practical barriers, and then turn priorities
              into an achievable technology roadmap.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Understand", "Create", "Improve"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-glow"
                >
                  {chip}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ABOUT_CARDS.map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <ScrollReveal key={card.title} delay={i + 1}>
                  <div className="premium-card h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Icon size={22} />
                    </span>
                    <h2 className="mt-5 font-bold text-gray-900">{card.title}</h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-14 text-center">
            <Link
              to="/#consultation"
              className="glow-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
