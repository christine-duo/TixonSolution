import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    title: "1. Responsible Website Access",
    body: "Using the website confirms that you will act lawfully and avoid attempts that interfere with availability, compromise accounts, or bypass protected areas. Automated abuse, harmful content, and unauthorised testing are outside the permission granted by this site.",
  },
  {
    title: "2. Professional Engagement Scope",
    body: "Published service descriptions introduce capabilities, not a signed contract. Every engagement begins separately and identifies the agreed deliverables, schedule, commercial terms, accepted inputs, ownership conditions, and support boundaries.",
  },
  {
    title: "3. Brand and Content Ownership",
    body: "The TixonSolution name, visual identity, interface layout, written content, and custom materials are protected by applicable intellectual property rights. Reproduction, resale, or commercial redistribution requires permission from the owner.",
  },
  {
    title: "4. External Resources",
    body: "References to independent platforms are provided for context. Those platforms operate under their own contracts, pricing, privacy notices, and service availability, so visitors remain responsible for reviewing external terms before use.",
  },
  {
    title: "5. Website Availability and Risk",
    body: "We take care to present accurate and usable information, but the website is provided without an assurance of uninterrupted availability, completeness, or fitness for every visitor's purpose. Losses arising indirectly from website use are excluded to the extent permitted by law.",
  },
  {
    title: "6. Personal Data Relationship",
    body: "Any communication or browser preference described on this site is handled under the separate privacy explanation. That explanation governs information expectations even though this page controls general website access.",
  },
  {
    title: "7. Applicable Resolution",
    body: "These website conditions are interpreted under local law relevant to TixonSolution, subject to any different rules stated in a signed professional agreement. Formal disputes are directed through the appropriate recognised process.",
  },
  {
    title: "8. Updating These Conditions",
    body: "These terms can be refined when the website, offered services, or legal environment changes. Updated text is published directly on this page, and continued use after publication represents acceptance of the revised wording.",
  },
];

export default function TermsOfService() {
  return (
    <div className="pt-[72px]">
      <section className="hero-surface relative py-14">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Website <span className="gradient-text">Use Conditions</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              The boundaries and expectations that apply while you use the TixonSolution website.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-sm leading-relaxed text-gray-600 sm:px-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="text-lg font-bold text-gray-900">9. Clarification Channel</h2>
            <p className="mt-3">
              Questions about these conditions can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-green-600 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
