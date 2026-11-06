import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Settings2,
  Mail,
  ShieldCheck,
  Gauge,
  Smartphone,
  Globe2,
  GitBranch,
  ClipboardCheck,
  SearchCheck,
  Activity,
  Workflow,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { SERVICES, SITE, NAV_SERVICES } from "../data/site";
import NotFound from "./NotFound";

function QATestingPage({ service }) {
  const testingServices = [
    ["Manual Testing", "Human-led exploration that finds edge cases and usability defects scripts may miss."],
    ["Automation Testing", "Repeatable automated scripts built for fast feedback and dependable regression coverage."],
    ["Regression Testing", "Validate that new changes do not break existing features before every release."],
    ["CI/CD Testing", "Test pipelines connected directly to builds, deployments, and automated quality gates."],
    ["API Testing", "Verify backend integrations, endpoint reliability, security, and data handling."],
    ["Performance Testing", "Measure responsiveness and identify bottlenecks under realistic workloads."],
    ["Load Testing", "Confirm platform stability when traffic, users, or transaction volume suddenly spikes."],
    ["Security Testing", "Identify vulnerabilities and weak points before attackers can exploit them."],
    ["Mobile Testing", "Check product quality across iOS and Android devices, screens, and operating versions."],
    ["Web Testing", "Keep browser and platform experiences consistent, functional, and dependable."],
    ["Cross-browser Testing", "Remove inconsistencies across browsers, devices, and customer access paths."],
    ["Accessibility Testing", "Improve WCAG usability so people with diverse abilities can use your software."],
  ];

  const framework = [
    ["Test Strategy Planning", "Create a testing strategy aligned with critical paths, business goals, and release priorities."],
    ["Compliance & Standards", "Review security and privacy expectations, including applicable GDPR and HIPAA requirements."],
    ["UAT Support", "Coordinate user acceptance testing between product stakeholders and technical teams."],
    ["Defect Life Cycle", "Track discovery, prioritization, resolution, verification, and closure without losing context."],
    ["Continuous Integration", "Connect validation to CI/CD pipelines so regressions are blocked before deployment."],
    ["Post-Release Monitoring", "Monitor production behavior and address quality issues before customers feel their impact."],
  ];

  const process = ["Requirements", "Test Planning", "Execution", "Defect Tracking", "Sign-off"];
  const serviceIcons = [
    SearchCheck, Workflow, GitBranch, Activity, Layers, Gauge,
    Activity, ShieldCheck, Smartphone, Globe2, Globe2, ClipboardCheck,
  ];

  return (
    <div className="pt-[72px]">
      <section className="hero-surface relative overflow-hidden py-16 lg:py-24">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700">
                <ShieldCheck size={15} />
                {service.eyebrow}
              </span>
              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {service.title.split("Every Stage")[0]}
                <span className="gradient-text">Every Stage</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                {service.heroDescription}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/#consultation" className="glow-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
                  {service.cta}
                  <ArrowRight size={16} />
                </Link>
                <a href={`mailto:${SITE.email}?subject=QA%20Services%20Consultation`} className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700">
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Comprehensive Testing Services
              </h2>
              <p className="mt-4 leading-relaxed text-gray-500">
                Quality coverage designed for every application layer, release path, and user experience.
              </p>
            </ScrollReveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testingServices.map(([title, description], index) => {
              const Icon = serviceIcons[index];
              return (
                <ScrollReveal key={title} delay={index % 3}>
                  <div className="qa-service-card premium-card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Icon size={21} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Why Choose Our <span className="gradient-text">QA Services?</span>
              </h2>
              <p className="mt-5 leading-relaxed text-gray-500">
                We provide practical, scalable quality assurance that reduces defects, speeds releases, improves customer experience, and strengthens software reliability.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Reduce production defects", "Accelerate releases with continuous QA", "Improve customer experience", "Increase software reliability"].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl border border-green-100 bg-white p-4 text-sm font-semibold text-gray-700">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-[0_24px_70px_rgba(26,58,42,.10)] sm:p-8">
                <p className="text-sm font-bold text-green-700">Scale Without Limits</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
                  Quality processes that grow from focused test batches to large, enterprise-wide test suites without disrupting delivery.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[["70%", "Cost Reduction"], ["<10s", "Response Time"], ["24/7", "Availability"]].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-gray-100 bg-gray-50 px-3 py-5 text-center">
                      <div className="text-2xl font-extrabold text-gray-950">{value}</div>
                      <div className="mt-1 text-xs font-medium text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Our Complete QA Framework</h2>
            <p className="mt-4 text-gray-500">Quality protection at every stage, from planning through post-launch monitoring.</p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map(([title, description], index) => (
              <ScrollReveal key={title} delay={index % 3}>
                <div className="premium-card h-full p-6">
                  <span className="text-sm font-bold text-green-600">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface border-y border-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Our QA Testing Process</h2>
            <p className="mt-4 text-gray-500">A clear, repeatable journey designed to prevent defects before release.</p>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {process.map((step, index) => (
              <ScrollReveal key={step} delay={index % 3}>
                <div className="relative rounded-2xl border border-green-100 bg-white px-3 py-5 text-center">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">{index + 1}</span>
                  <p className="mt-3 text-sm font-bold text-gray-800">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(22,163,74,.22)] sm:px-10">
              <p className="text-sm font-semibold text-green-100">Ready to deliver with confidence?</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Ready to Improve Your Software Quality?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-green-50">
                Discuss your product, release process, and quality goals. We will help plan the clearest testing path.
              </p>
              <Link to="/#consultation" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition-transform hover:-translate-y-1">
                Book Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <NotFound />;
  if (slug === "qa-testing") return <QATestingPage service={service} />;

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="hero-surface relative overflow-hidden py-16 lg:py-20">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700">
                  {service.eyebrow}
                </span>
                <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-xl leading-relaxed text-gray-500">
                  {service.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/#consultation"
                    className="glow-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                  >
                    {service.cta}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`mailto:${SITE.email}?subject=Service%20Consultation`}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-green-400 hover:text-green-700"
                  >
                    <Mail size={16} />
                    Email Us
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={2}>
              <div className="premium-card p-6">
                <div className="rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 p-7 text-white">
                  <p className="text-sm font-medium text-green-100">
                    Strategy, design, engineering, and support
                  </p>
                  <p className="mt-2 text-xl font-bold leading-snug">
                    One practical delivery process — from first idea to launch and
                    beyond.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Discover", "Design", "Deliver"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Details + Sidebar */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div>
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                Service Details
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                A focused delivery model built around clarity, speed, and long-term
                value.
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              <ScrollReveal>
                <div className="premium-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.detailsTitle}
                    </h3>
                  </div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.detailsItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="premium-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.benefitsTitle}
                    </h3>
                  </div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.benefitsItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-12">
              <ScrollReveal>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Other Services
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition-colors hover:border-green-400 hover:text-green-700"
                    >
                      {s.eyebrow}
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          <aside className="space-y-6">
            <ScrollReveal delay={2}>
              <div className="premium-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Settings2 size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Approach</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                  How we make it work
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {service.approach}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Discover", "Design", "Deliver"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="premium-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Layers size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Stack</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                  Tools and platforms
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="premium-card overflow-hidden p-6 text-center">
                <div className="rounded-xl bg-gray-900 p-6 text-white">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                    <Mail size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">Ready to move forward?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    Tell us what you are trying to improve, and we will help map the
                    clearest next step.
                  </p>
                  <Link
                    to="/#consultation"
                    className="glow-btn mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                  >
                    Request Consultation
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      {/* All services strip */}
      <section className="section-surface border-t border-gray-100 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-bold text-gray-900">
            Explore all services
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {NAV_SERVICES.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition-colors hover:border-green-400 hover:text-green-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
