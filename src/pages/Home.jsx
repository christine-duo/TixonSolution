import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Workflow,
  Bot,
  MonitorSmartphone,
  ReceiptText,
  MessagesSquare,
  Scaling,
  BadgeDollarSign,
  LifeBuoy,
  ClipboardList,
  Hammer,
  Rocket,
  UtensilsCrossed,
  Clapperboard,
  ShoppingCart,
  Briefcase,
  Target,
  Compass,
  Handshake,
  Sparkles,
  ShieldCheck,
  Mail,
  CheckCircle2,
  Cog,
  TicketCheck,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import {
  SITE,
  HOME_SERVICES,
  WHY_BULLETS,
  PROCESS_STEPS,
  INDUSTRIES,
  TECH_CATEGORIES,
  ABOUT_CARDS,
} from "../data/site";

const ICONS = {
  Code2,
  Workflow,
  Bot,
  MonitorSmartphone,
  ReceiptText,
  MessagesSquare,
  Scaling,
  BadgeDollarSign,
  LifeBuoy,
  ClipboardList,
  Hammer,
  Rocket,
  UtensilsCrossed,
  Clapperboard,
  ShoppingCart,
  Briefcase,
  Target,
  Compass,
  Handshake,
  TicketCheck,
};

function SectionHeading({ title, accent, description, center = true }) {
  return (
    <ScrollReveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-500">{description}</p>
      )}
    </ScrollReveal>
  );
}

function AnimatedMetric({ value, label, suffix = "", duration = 1200 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const metricRef = useRef(null);

  useEffect(() => {
    const element = metricRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          setHasAnimated(true);
          observer.disconnect();
          return;
        }

        const startedAt = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setHasAnimated(true);
            observer.disconnect();
          }
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, hasAnimated, value]);

  return (
    <div
      ref={metricRef}
      className="hero-metric-card rounded-xl border border-green-100 bg-white/70 px-3 py-4 text-center first:ml-0 lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:px-0 lg:pl-4 lg:text-left lg:first:pl-0"
    >
      <div className="text-xl font-bold text-gray-950">
        {displayValue}{suffix}
      </div>
      <div className="mt-1 text-xs leading-relaxed text-gray-500">
        {label}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pt-[72px]">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-gears pointer-events-none absolute inset-0" aria-hidden="true">
        <Cog className="hero-gear hero-gear-one" strokeWidth={1.35} />
        <Cog className="hero-gear hero-gear-two" strokeWidth={1.35} />
        <Cog className="hero-gear hero-gear-three" strokeWidth={1.35} />
        <Cog className="hero-gear hero-gear-four" strokeWidth={1.35} />
      </div>
      <div className="hero-data-flow pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="data-scan-line" />
        <div className="data-stream data-stream-one">
          <span /><span /><span /><span /><span />
        </div>
        <div className="data-stream data-stream-two">
          <span /><span /><span /><span />
        </div>
        <div className="data-stream data-stream-three">
          <span /><span /><span /><span /><span />
        </div>
        <div className="data-source data-source-one" />
        <div className="data-source data-source-two" />
        <div className="data-source data-source-three" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div>
            <ScrollReveal>
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm lg:mx-0">
                <Sparkles size={15} />
                Software aligned with the way your team works
              </span>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h1 className="mx-auto mt-7 max-w-[690px] text-center text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-gray-950 sm:text-5xl lg:mx-0 lg:text-left lg:text-[4rem]">
                Build smarter operations for{" "}
                <span className="gradient-text">whatever comes next.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="mx-auto mt-6 max-w-[610px] text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left">
                We shape digital foundations around your priorities, people, and
                processes. TixonSolution connects the right applications, data, and
                automation to remove friction and give your business room to move.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start lg:justify-start">
                <Link
                  to="/#consultation"
                  className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Start a Conversation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${SITE.email}?subject=Project%20Consultation`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-green-400 hover:text-green-700"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-2 sm:gap-4 lg:mx-0">
                {[
                  { value: "30+", label: "Projects Delivered" },
                  { value: "99%", label: "Client Satisfaction" },
                  { value: "24/7", label: "AI Support" },
                ].map((stat) => (
                  <AnimatedMetric
                    key={stat.label}
                    value={stat.label === "Projects Delivered" ? 30 : stat.label === "Client Satisfaction" ? 99 : 24}
                    suffix={stat.label === "Projects Delivered" ? "+" : stat.label === "Client Satisfaction" ? "%" : "/7"}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2} className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/70 p-3 shadow-[0_24px_70px_rgba(15,23,42,.12)] backdrop-blur sm:p-4">
              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                      Development workspace
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-900">
                      From idea to production
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Workflow size={20} />
                  </span>
                </div>

                <div className="dev-workspace mt-6 overflow-hidden rounded-xl bg-gray-950">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide text-gray-400">tixonsolution/platform</span>
                  </div>
                  <div className="grid sm:grid-cols-[1fr_112px]">
                    <div className="dev-code-lines border-r border-white/10 px-4 py-4 font-mono text-[11px] leading-6 text-gray-300">
                      <p><span className="text-green-400">const</span> <span className="text-sky-300">solution</span> = {'{'}</p>
                      <p className="pl-4">design: <span className="text-amber-300">"thoughtful"</span>,</p>
                      <p className="pl-4">delivery: <span className="text-amber-300">"reliable"</span>,</p>
                      <p className="pl-4">scale: <span className="text-green-400">true</span></p>
                      <p>{'};'}</p>
                      <p className="dev-code-cursor mt-1 text-green-400"><span className="text-gray-500">$</span> build --launch</p>
                    </div>
                    <div className="hidden sm:block px-3 py-4">
                      <div className="dev-branch mx-auto flex h-full flex-col items-center justify-around">
                        {[Code2, Bot, Workflow, Rocket].map((Icon, index) => (
                          <div key={index} className="dev-branch-node flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-green-300">
                            <Icon size={14} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: Code2, title: "Structured", detail: "Clean architecture" },
                    { icon: CheckCircle2, title: "Validated", detail: "Quality checked" },
                    { icon: Rocket, title: "Ready", detail: "Built to launch" },
                  ].map((item) => (
                    <div key={item.title} className="dev-delivery-card cursor-pointer rounded-lg border border-green-100 bg-green-50/90 px-2 py-3 text-center transition-colors duration-200">
                      <item.icon size={16} className="mx-auto text-green-700" />
                      <p className="mt-2 text-[11px] font-bold text-gray-950">{item.title}</p>
                      <p className="mt-0.5 text-[9px] font-semibold text-gray-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card absolute -bottom-6 -left-4 hidden rounded-xl p-4 sm:block">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">Designed to stay dependable</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                    Secure foundations, thoughtful integrations, and support beyond launch.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function DigitalSolutions() {
  const capabilities = [
    {
      icon: Code2,
      title: "Custom Platforms",
      description: "Purpose-built web and business systems shaped around your operations.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Practical automation that reduces repetitive work and improves response speed.",
    },
    {
      icon: Workflow,
      title: "Connected Systems",
      description: "Secure integrations that keep tools, teams, data, and workflows in sync.",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      description: "Continuous improvements, maintenance, monitoring, and technical guidance.",
    },
  ];

  return (
    <section className="border-y border-green-100 bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => (
            <ScrollReveal key={capability.title} delay={i % 3 === 0 ? 0 : i % 3}>
              <div className="capability-card h-full rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <capability.icon size={21} />
                </span>
                <h3 className="mt-4 font-bold text-gray-900">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {capability.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We"
          accent="Build"
          description="We help businesses turn ideas and operational challenges into practical digital solutions. From custom platforms and AI automation to testing, integrations, and ongoing support, we build technology that improves performance and scales with your growth."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ScrollReveal
                key={service.title}
                delay={i % 3 === 1 ? 2 : i % 3 === 2 ? 3 : 0}
                className=""
              >
                <Link to={service.to} className="premium-card block h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <div className="premium-card p-6">
              <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 text-white">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <ShieldCheck size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-green-100">A focused technology partner</p>
                    <p className="text-lg font-bold">TixonSolution</p>
                  </div>
                </div>
                <div className="mt-7 space-y-4">
                  {WHY_BULLETS.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-start gap-3 rounded-lg bg-white/10 p-3 backdrop-blur"
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                      <span className="text-sm font-medium leading-snug">{b.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/20 pt-5 text-center">
                  <div>
                    <div className="text-xl font-bold">1 Team</div>
                    <div className="text-[11px] text-green-100">end-to-end ownership</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">4 Steps</div>
                    <div className="text-[11px] text-green-100">clear delivery path</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">1 Goal</div>
                    <div className="text-[11px] text-green-100">business progress</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Better Way to Build{" "}
                <span className="gradient-text">Software</span>
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-5">
              {WHY_BULLETS.map((bullet, i) => {
                const Icon = ICONS[bullet.icon];
                return (
                  <ScrollReveal key={bullet.title} delay={i % 2 === 1 ? 2 : 0}>
                    <div className="premium-card flex gap-4 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900">{bullet.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">
                          {bullet.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="how-we-deliver" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="From Idea to"
          accent="Impact"
          description="A collaborative delivery process designed for clarity, steady progress, and dependable long-term results."
        />
        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <ScrollReveal key={step.title} delay={i % 2 === 1 ? 2 : 0}>
                <div className="premium-card group relative h-full overflow-hidden p-7">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-green-50 transition-colors group-hover:bg-green-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-glow">
                      <Icon size={24} />
                    </span>
                      <span className="text-4xl font-extrabold text-green-100 transition-colors group-hover:text-green-200">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                        {i === 0 ? "Aligned goals" : i === 1 ? "Clear roadmap" : i === 2 ? "Quality delivery" : "Lasting support"}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industries"
          accent="We Work With"
          description="We partner with restaurants, creative teams, ticket resellers, retailers, and growing businesses. Every solution is shaped around its operations, audience, and long-term goals."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.icon];
            return (
              <ScrollReveal key={industry.name} delay={i % 3 === 1 ? 2 : i % 3 === 2 ? 3 : 0}>
                <Link to="/industries" className="premium-card block h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-bold text-gray-900">{industry.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
          <ScrollReveal delay={3}>
            <Link
              to="/industries"
              className="premium-card flex h-full flex-col items-center justify-center p-7 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-glow">
                <ArrowRight size={22} />
              </span>
              <span className="mt-5 font-bold text-green-700">
                View All Industries
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const technologyLogos = {
    React: "react", "Next.js": "nextdotjs", "Node.js": "nodedotjs", Python: "python",
    Flutter: "flutter", "iOS (Swift)": "swift", "Android (Kotlin)": "kotlin",
    "REST APIs": "swagger", GraphQL: "graphql", Webhooks: "webhook",
    "Adobe Premiere Pro": "adobepremierepro", "After Effects": "adobeaftereffects",
    Photoshop: "adobephotoshop", Illustrator: "adobeillustrator", Blender: "blender",
    "Cinema 4D": "cinema4d", Shopify: "shopify", WooCommerce: "woocommerce",
    Magento: "magento", Stripe: "stripe", PayPal: "paypal", QuickBooks: "quickbooks",
    Klaviyo: "klaviyo", Mailchimp: "mailchimp", ActiveCampaign: "activecampaign",
    AWS: "aws", Hetzner: "hetzner", Render: "render", DigitalOcean: "digitalocean",
    Vultr: "vultr", Linode: "linode", Claude: "anthropic", Grok: "x",
    "OpenCode AI": "opencode", ChatGPT: "openai", DeepSeek: "deepseek",
    PostgreSQL: "postgresql", MySQL: "mysql", MongoDB: "mongodb", Redis: "redis",
    Firebase: "firebase", Supabase: "supabase", Docker: "docker",
    Kubernetes: "kubernetes", "CI/CD": "githubactions",
  };

  const technologyLogoUrls = {
    AWS: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
    "Adobe Premiere Pro": "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    "After Effects": "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    Photoshop: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    Illustrator: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    Magento: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg",
    Klaviyo: "https://www.google.com/s2/favicons?domain=klaviyo.com&sz=128",
    ActiveCampaign: "https://www.google.com/s2/favicons?domain=activecampaign.com&sz=128",
    Linode: "https://www.google.com/s2/favicons?domain=linode.com&sz=128",
    ChatGPT: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    "OpenCode AI": "https://www.google.com/s2/favicons?domain=opencode.ai&sz=128",
    Webhooks: "https://api.iconify.design/mdi:webhook.svg",
  };

  return (
    <section
      id="technologies"
      className="technology-scroll-section relative"
    >
      <div className="technology-sticky top-[72px] flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technologies"
          accent="We Use"
          description="We work with today's most trusted technologies to deliver reliable, scalable solutions."
        />
        <div className="technology-scroll-grid mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                className="technology-card premium-card h-full p-7"
                style={{
                  "--card-order": i,
                }}
              >
                <h3 className="font-bold text-gray-900">{cat.title}</h3>
                <div className="technology-marquee mt-4" aria-label={`${cat.title} tools`}>
                  <div className={`technology-track ${i % 2 ? "technology-track-reverse" : ""}`}>
                    {[...cat.items, ...cat.items].map((item, itemIndex) => (
                      <span
                        key={`${item}-${itemIndex}`}
                        className="technology-tool"
                        style={{ "--tool-order": itemIndex % cat.items.length }}
                      >
                        {technologyLogoUrls[item] || technologyLogos[item] ? (
                          <span className="technology-logo-wrap" aria-hidden="true">
                            <span className="technology-logo-fallback">
                              {item.slice(0, 1)}
                            </span>
                            <img
                              src={
                                technologyLogoUrls[item] ||
                                `https://cdn.simpleicons.org/${technologyLogos[item]}`
                              }
                              alt=""
                              loading="lazy"
                              className="technology-logo"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </span>
                        ) : (
                          <span className="technology-logo-fallback" aria-hidden="true">
                            {item.slice(0, 1)}
                          </span>
                        )}
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700">
            <Sparkles size={15} />
            The TixonSolution Way
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technology shaped around your goals,{" "}
            <span className="gradient-text">not generic templates.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2} className="mx-auto mt-8 max-w-3xl text-center">
          <p className="leading-relaxed text-gray-500">
            We help ambitious teams turn complicated daily operations into focused
            digital experiences. From customer-facing platforms to internal tools,
            our solutions connect people, information, and processes in one reliable
            place.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            Every engagement begins with listening. We learn how your business
            currently moves, identify what slows it down, and build only the
            technology that creates meaningful progress.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2} className="mt-8 flex flex-wrap justify-center gap-3">
          {["Understand", "Create", "Improve"].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-glow"
            >
              {chip}
            </span>
          ))}
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
                  <h3 className="mt-5 font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Consultation() {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    service: "",
    meeting: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleInquirySubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsAccessKey,
          subject: `Consultation request - ${inquiry.service || "General inquiry"}`,
          from_name: inquiry.name.trim(),
          replyto: inquiry.email.trim(),
          email: inquiry.email.trim(),
          service: inquiry.service,
          preferred_meeting: inquiry.meeting || "To be scheduled",
          message: inquiry.message.trim(),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send inquiry");
      setSent(true);
      setInquiry({ name: "", email: "", service: "", meeting: "", message: "" });
    } catch (submissionError) {
      setError(submissionError.message || "Unable to send inquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!SITE.calendlyUrl) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="consultation" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="premium-card overflow-hidden">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Let's <span className="gradient-text">Talk</span>
                </h2>
                <p className="mt-4 leading-relaxed text-gray-500">
                  If you're planning a new project or want to improve existing systems,
                  share your goals by email and we will outline the most useful next step.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm font-semibold text-gray-700 transition-colors hover:border-green-300 hover:text-green-700"
                  >
                    <Mail size={17} className="text-green-600" />
                    Email: {SITE.email}
                  </a>
                </div>
                <p className="mt-5 text-sm text-gray-400">
                  We typically respond within one business day.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={2}>
              {SITE.calendlyUrl ? (
                <div
                  className="calendly-inline-widget h-[520px] min-h-[520px] w-full rounded-xl border border-gray-100"
                  data-url={SITE.calendlyUrl}
                />
              ) : (
                <div className="rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-glow">
                      <CalendarIcon />
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900">Plan a project call</h3>
                      <p className="mt-0.5 text-xs text-gray-500">Send the details below to our team.</p>
                    </div>
                  </div>
                  <form onSubmit={handleInquirySubmit} className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs font-bold text-gray-700">
                      Your name
                      <input
                        required
                        value={inquiry.name}
                        onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })}
                        placeholder="Full name"
                        className="mt-1.5 h-11 w-full rounded-lg border border-green-200 bg-white px-3 text-sm font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      />
                    </label>
                    <label className="text-xs font-bold text-gray-700">
                      Email address
                      <input
                        required
                        type="email"
                        value={inquiry.email}
                        onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })}
                        placeholder="you@company.com"
                        className="mt-1.5 h-11 w-full rounded-lg border border-green-200 bg-white px-3 text-sm font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      />
                    </label>
                    <label className="text-xs font-bold text-gray-700">
                      Service needed
                      <select
                        required
                        value={inquiry.service}
                        onChange={(event) => setInquiry({ ...inquiry, service: event.target.value })}
                        className="mt-1.5 h-11 w-full rounded-lg border border-green-200 bg-white px-3 text-sm font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      >
                        <option value="">Select a service</option>
                        {HOME_SERVICES.map((service) => (
                          <option key={service.title} value={service.title}>{service.title}</option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </label>
                    <label className="text-xs font-bold text-gray-700">
                      Preferred meeting
                      <input
                        type="datetime-local"
                        value={inquiry.meeting}
                        onChange={(event) => setInquiry({ ...inquiry, meeting: event.target.value })}
                        className="mt-1.5 h-11 w-full rounded-lg border border-green-200 bg-white px-3 text-sm font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      />
                    </label>
                    <label className="text-xs font-bold text-gray-700 sm:col-span-2">
                      Project details
                      <textarea
                        required
                        rows={3}
                        value={inquiry.message}
                        onChange={(event) => setInquiry({ ...inquiry, message: event.target.value })}
                        placeholder="What would you like us to build or improve?"
                        className="mt-1.5 w-full rounded-lg border border-green-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={sending}
                      className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white sm:col-span-2"
                    >
                      {sending ? "Sending..." : "Send Inquiry & Request Meeting"}
                      <ArrowRight size={15} />
                    </button>
                    {sent && (
                      <p className="text-center text-sm font-semibold text-green-700 sm:col-span-2">
                        Inquiry sent successfully. TixonSolution will contact you soon.
                      </p>
                    )}
                    {error && (
                      <p className="text-center text-sm font-semibold text-red-600 sm:col-span-2">
                        {error}
                      </p>
                    )}
                  </form>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <DigitalSolutions />
      <Services />
      <WhyUs />
      <HowWeWork />
      <Industries />
      <Technologies />
      <About />
      <Consultation />
    </>
  );
}
