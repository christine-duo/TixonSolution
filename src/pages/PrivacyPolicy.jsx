import ScrollReveal from "../components/ScrollReveal";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    title: "1. Details Shared Directly",
    body: "Personal information reaches us only when you intentionally send it through email, initiate a project discussion, or continue a conversation. The details may include your name, professional role, business information, requirements, and the material you attach to your message.",
  },
  {
    title: "2. Conversation and Delivery Purpose",
    body: "We use submitted information to answer questions, understand project goals, prepare proposals, complete agreed work, provide follow-up support, and maintain clear communication records for the services you request.",
  },
  {
    title: "3. Preference Storage",
    body: "A browser preference choice may be saved locally so the cookie notice does not repeatedly appear. This setting is not used to identify visitors, serve advertisements, or create behavioural profiles.",
  },
  {
    title: "4. Customer Controls",
    body: "You may request to review information associated with you, ask for corrections, remove optional communication records, or withdraw consent to marketing messages. A related request can be sent directly to our team.",
  },
  {
    title: "5. Protection Approach",
    body: "Reasonable administrative practices, controlled access, and technical safeguards are applied to limit unauthorised viewing or alteration. No connected device or public internet channel is completely immune from risk, so sensitive payment or security credentials should not be shared by email.",
  },
  {
    title: "6. External Systems",
    body: "Hosting infrastructure provides access to the website, while your own mailbox provider transports emails you send or receive. Those services apply their own operational standards, retention periods, and account security features.",
  },
  {
    title: "7. Geographic Processing",
    body: "Information used for communication or project delivery may be accessed from locations other than the website visitor's country. Local privacy expectations can differ, and TixonSolution applies the protections available within each operational relationship.",
  },
  {
    title: "8. Policy Evolution",
    body: "This explanation may be refined when business operations, technology providers, or relevant legal requirements change. The latest published page is the version currently available on the website.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-[72px]">
      <section className="hero-surface relative py-14">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Your Privacy, <span className="gradient-text">Clearly Explained</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              A transparent view of the information TixonSolution receives and why it is used.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-sm leading-relaxed text-gray-600 sm:px-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="text-lg font-bold text-gray-900">9. Direct Privacy Contact</h2>
            <p className="mt-3">
              For questions, corrections, or removal requests, write to{" "}
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
